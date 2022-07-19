/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator;

import com.aerann.GenshinBuildGenerator.metier.ArtifactMainStat;
import com.aerann.GenshinBuildGenerator.metier.GenshinData;
import com.aerann.GenshinBuildGenerator.metier.hoyowiki.HoyoWikiResult;
import com.aerann.GenshinBuildGenerator.repositories.ArtifactMainStatRepository;
import com.fasterxml.jackson.core.type.TypeReference;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.util.List;
import java.util.logging.Level;
import java.util.logging.Logger;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.web.client.RestTemplate;

/**
 *
 * @author nathan
 */
@SpringBootTest
public class AppelRestTest {
    private ObjectMapper om;
    
    @Autowired
    ArtifactMainStatRepository mainStatRepository;
    
    @Test
    void contextLoads() {}
    
    //@Test
    void mainStatValueSetup() {
        om = new ObjectMapper();
        try {
            List<ArtifactMainStat> listMainStat = om.readValue(new File("src/main/resources/artifactMainStat.json"), new TypeReference<List<ArtifactMainStat>>(){});
            mainStatRepository.insert(listMainStat);
        } catch (IOException ex) {
            Logger.getLogger(AppelRestTest.class.getName()).log(Level.SEVERE, null, ex);
        }
    }
}
