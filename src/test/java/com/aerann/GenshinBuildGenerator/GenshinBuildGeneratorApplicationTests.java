package com.aerann.GenshinBuildGenerator;

import com.aerann.GenshinBuildGenerator.metier.ArtifactInvKam;
import com.aerann.GenshinBuildGenerator.metier.ArtifactForm;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiArtefact;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiComponent;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiModule;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiResult;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiSet;
import com.aerann.GenshinBuildGenerator.services.interfaces.IArtifactService;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collection;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;

@SpringBootTest
class GenshinBuildGeneratorApplicationTests {
    
//    @Autowired
//    private IArtifactService artefactService;

	@Test
	void contextLoads() {
	}
        
//        @Test
//        void testGenerateBuild(){
//            ArtifactForm form = new ArtifactForm();
//            form.setSlotKey("goblet");
//            form.setMainStat("def_");
//            form.setSubstats(new ArrayList(Arrays.asList("critDMG_","atk_","","")));
//            
//            List<ArtifactForm> data = new ArrayList<>();
//            data.add(form);
//            
//            List<ArtifactInvKam> artifacts = artefactService.calculateBuild(data);
//            
//            System.out.println("artifacts: "+artifacts.toString());
//        }
        
        @Test
        void testAppelRest(){
            ObjectMapper om = new ObjectMapper();
            
            RestTemplate restTemplate = new RestTemplate();
            HoyoWikiResult result = restTemplate.getForObject("https://sg-wiki-api-static.hoyolab.com/hoyowiki/wapi/entry_page?entry_page_id=2061", HoyoWikiResult.class);

            for(HoyoWikiComponent component : result.getData().getPage().getModules().get(1).getComponents()){
                System.out.println(component);    
            }
            
            try {
                HoyoWikiSet set = om.readValue(result.getData().getPage().getModules().get(1).getComponents().get(0).getData(), HoyoWikiSet.class);
                
                System.out.println(set);
            } catch (IOException ex) {
                Logger.getLogger(GenshinBuildGeneratorApplicationTests.class.getName()).log(Level.SEVERE, null, ex);
            }
        }
}
