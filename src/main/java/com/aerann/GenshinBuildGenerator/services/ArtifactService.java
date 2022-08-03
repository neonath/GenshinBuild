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
import org.springframework.data.domain.Sort;
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
        GenshinData data;
        
        try {
            if(bouchon){
                data = om.readValue(new File("src/main/resources/genshinData_GOOD_2022_07_20_03_04.json"), GenshinData.class);
            } else{
                data = om.readValue(json, GenshinData.class);
            }
            
            ArrayList<ArtifactInvKam> ListArtifactInvKam = data.getArtifacts();
            for(ArtifactInvKam artInvKam : ListArtifactInvKam){
                Artifact artifact = new Artifact(artInvKam);
                //recup de la main stat de l'artefact
                ArtifactMainStat artMainStat = mainStatRepo.findByRarity(artInvKam.getRarity());
                if(artMainStat != null){
                    switch(artInvKam.getMainStatKey()){
                        case "hp":
                            artifact.setMainStatValue(artMainStat.getHp().get(artInvKam.getLevel()));
                            break;
                        case "atk":
                            artifact.setMainStatValue(artMainStat.getAtk().get(artInvKam.getLevel()));
                            break;
                        case "hp_":
                            artifact.setMainStatValue(artMainStat.getHp_().get(artInvKam.getLevel()));
                            break;
                        case "atk_":
                            artifact.setMainStatValue(artMainStat.getAtk_().get(artInvKam.getLevel()));
                            break;
                        case "def_":
                            artifact.setMainStatValue(artMainStat.getDef_().get(artInvKam.getLevel()));
                            break;
                        case "enerRech_":
                            artifact.setMainStatValue(artMainStat.getEnergyRech_().get(artInvKam.getLevel()));
                            break;
                        case "eleMas":
                            artifact.setMainStatValue(artMainStat.getElemMastery().get(artInvKam.getLevel()));
                            break;
                        case "heal_":
                            artifact.setMainStatValue(artMainStat.getHeal_().get(artInvKam.getLevel()));
                            break;
                        case "critRate_":
                            artifact.setMainStatValue(artMainStat.getCritRate_().get(artInvKam.getLevel()));
                            break;
                        case "physical_dmg_":
                            artifact.setMainStatValue(artMainStat.getPhysDMG_().get(artInvKam.getLevel()));
                            break;
                        case "anemo_dmg_":
                        case "pyro_dmg_":
                        case "electro_dmg_":
                        case "cryo_dmg_":
                        case "hydro_dmg_":    
                        case "geo_dmg_":
                            artifact.setMainStatValue(artMainStat.getElemDMG_().get(artInvKam.getLevel()));
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
                try {
                    set = om.readValue(result.getData().getPage().getModules().get(1).getComponents().get(0).getData(), HoyoWikiSet.class);
                } catch (IOException ex) {
                    Logger.getLogger(ArtifactService.class.getName()).log(Level.SEVERE, null, ex);
                }
                
                if(set != null){
                    switch(artInvKam.getSlotKey()){
                    case "flower":
                        artifact.setName(set.getFlower_of_life().getTitle());
                        artifact.setIconUrl(set.getFlower_of_life().getIcon_url());
                        break;
                    case "plume":
                        artifact.setName(set.getPlume_of_death().getTitle());
                        artifact.setIconUrl(set.getPlume_of_death().getIcon_url());
                        break;
                    case "sands":
                        artifact.setName(set.getSands_of_eon().getTitle());
                        artifact.setIconUrl(set.getSands_of_eon().getIcon_url());
                        break;
                    case "goblet":
                        artifact.setName(set.getGoblet_of_eonothem().getTitle());
                        artifact.setIconUrl(set.getGoblet_of_eonothem().getIcon_url());
                        break;
                    case "circlet":
                        artifact.setName(set.getCirclet_of_logos().getTitle());
                        artifact.setIconUrl(set.getCirclet_of_logos().getIcon_url());
                        break;
                    }
                }             
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
            query.with(Sort.by(Sort.Direction.DESC,"mainStatValue"));
            List<Artifact> artifactSlotList = mongoTemplate.find(query,Artifact.class);
            if(artifactSlotList.size() > 1){
                
            }
            
            res.addAll(mongoTemplate.find(query,Artifact.class));
        }
//        ArtifactForm artefact = data.get(0);  
         
        return res;
    }
}
