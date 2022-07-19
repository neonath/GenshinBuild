/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.services;

import com.aerann.GenshinBuildGenerator.metier.Artifact;
import com.aerann.GenshinBuildGenerator.services.interfaces.IArtifactService;
import com.aerann.GenshinBuildGenerator.metier.ArtifactInvKam;
import com.aerann.GenshinBuildGenerator.metier.ArtifactForm;
import com.aerann.GenshinBuildGenerator.metier.ArtifactMainStat;
import com.aerann.GenshinBuildGenerator.metier.GenshinData;
import com.aerann.GenshinBuildGenerator.metier.Substat;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiComponent;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiResult;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiSet;
import com.aerann.GenshinBuildGenerator.repositories.ArtefactRepository;
import com.aerann.GenshinBuildGenerator.repositories.ArtifactMainStatRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import com.mongodb.client.MongoClient;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.data.mongodb.core.MongoTemplate;
import org.springframework.data.mongodb.core.query.Criteria;
import org.springframework.data.mongodb.core.query.Query;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author nathan
 */
@Service
@PropertySource("classpath:application.properties")
public class ArtifactService implements IArtifactService {
    
    @Value("${bouchon}")
    private Boolean bouchon;

    @Autowired
    private ArtefactRepository repository;    
    private ObjectMapper om = new ObjectMapper();
    private RestTemplate restTemplate = new RestTemplate();
    
    @Autowired
    private MongoTemplate mongoTemplate;
    
    @Autowired
    private ArtifactMainStatRepository mainStatRepo;
    
    @Override
    public String getArtifactFromJson(String json){
        ArrayList<Artifact> listArtifact = new ArrayList<>();
        ArrayList<Float> mainStatList = new ArrayList<>();
        GenshinData data;
        
        try {
            if(bouchon){
                data = om.readValue(new File("src/main/resources/genshinData_GOOD_2022_05_13_14_39.json"), GenshinData.class);
            } else{
                data = om.readValue(json, GenshinData.class);
            }
            
            ArrayList<ArtifactInvKam> ListArtifactInvKam = data.getArtifacts();
            for(ArtifactInvKam artInvKam : ListArtifactInvKam){
                //recup de la main stat de l'artefact
                ArtifactMainStat artMainStat = mainStatRepo.findByRarity(artInvKam.getRarity());
                if(artMainStat != null){
                    switch(artInvKam.getMainStatKey()){
                        case "hp":
                            mainStatList = artMainStat.getHp();
                            break;
                        case "atk":
                            mainStatList = artMainStat.getAtk();
                            break;
                        case "hp_":
                            mainStatList = artMainStat.getHp_();
                            break;
                        case "atk_":
                            mainStatList = artMainStat.getAtk_();
                            break;
                        case "def_":
                            mainStatList = artMainStat.getDef_();
                            break;
                        case "enerRech_":
                            mainStatList = artMainStat.getEnergyRech_();
                            break;
                        case "eleMas":
                            mainStatList = artMainStat.getElemMastery();
                            break;
                        case "heal_":
                            mainStatList = artMainStat.getHeal_();
                            break;
                        case "critRate_":
                            mainStatList = artMainStat.getCritRate_();
                            break;
                        case "physical_dmg_":
                            mainStatList = artMainStat.getPhysDMG_();
                            break;
                        case "anemo_dmg_":
                        case "pyro_dmg_":
                        case "electro_dmg_":
                        case "cryo_dmg_":
                        case "hydro_dmg_":    
                        case "geo_dmg_":
                            mainStatList = artMainStat.getElemDMG_();
                            break;
                    }
                }
                
                //recup du nom de l'artefact
                String url = "https://sg-wiki-api-static.hoyolab.com/hoyowiki/wapi/entry_page?entry_page_id=";
                HashMap<String,String> artefactSetEntryPageIdMap = om.readValue(new File("src/main/resources/ArtefactSetEntryPageId.json"), new TypeReference<HashMap<String,String>>(){});
                System.out.println("artefactSetEntryPageIdMap: "+artefactSetEntryPageIdMap);
                System.out.println("artInvKam.getSlotKey(): "+artInvKam.getSetKey());
                url += artefactSetEntryPageIdMap.get(artInvKam.getSetKey());
                System.out.println("url: "+url);
                HoyoWikiResult result = restTemplate.getForObject(url, HoyoWikiResult.class);
                HoyoWikiSet set = null;
                String artefactName = "";
                try {
                    set = om.readValue(result.getData().getPage().getModules().get(1).getComponents().get(0).getData(), HoyoWikiSet.class);
                } catch (IOException ex) {
                    Logger.getLogger(ArtifactService.class.getName()).log(Level.SEVERE, null, ex);
                }
                
                if(set != null){
                    switch(artInvKam.getSlotKey()){
                    case "flower":
                        artefactName = set.getFlower_of_life().getTitle();
                        break;
                    case "plume":
                        artefactName = set.getPlume_of_death().getTitle();
                        break;
                    case "sands":
                        artefactName = set.getSands_of_eon().getTitle();
                        break;
                    case "goblet":
                        artefactName = set.getGoblet_of_eonothem().getTitle();
                        break;
                    case "circlet":
                        artefactName = set.getCirclet_of_logos().getTitle();
                        break;
                    }
                }
                
                Artifact artifact = new Artifact(artInvKam, artefactName, mainStatList.get(artInvKam.getLevel()));
                listArtifact.add(artifact);
            }
            
            repository.insert(listArtifact);
        } catch (IOException ex) {
            Logger.getLogger(ArtifactService.class.getName()).log(Level.SEVERE, null, ex);
        }
        
        return null;
    }
    
    @Override
    public List<Artifact> calculateBuild(List<ArtifactForm> data){
        List<Artifact> res = new ArrayList<>();
        for(ArtifactForm artefact : data){
            Query query = new Query();
            ArrayList<Criteria> substatsCriteria = new ArrayList<>();

            for(String substat : artefact.getSubstats()){
                if(!substat.equals("")){
                    substatsCriteria.add(Criteria.where("substats.key").is(substat));
                }
            }      
            query.addCriteria(Criteria.where("slotKey").is(artefact.getSlotKey()).and("mainStat").is(artefact.getMainStat()).andOperator(substatsCriteria));
            res.addAll(mongoTemplate.find(query,Artifact.class));   
        }
//        ArtifactForm artefact = data.get(0);  
         
        return res;
    }
}
