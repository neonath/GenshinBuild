/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.services;

import com.aerann.GenshinBuildGenerator.metier.GenshinData;
import com.fasterxml.jackson.databind.ObjectMapper;
import java.io.File;
import java.io.IOException;
import java.io.InputStreamReader;
import java.io.Reader;
import java.io.UncheckedIOException;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.core.io.Resource;
import org.springframework.stereotype.Service;
import org.springframework.util.FileCopyUtils;

/**
 *
 * @author nathan
 */
@Service
public class TestService {
    @Value("classpath:genshinData_GOOD_2022_05_13_14_39.json")
    private Resource res;
    
    ObjectMapper om = new ObjectMapper();
    
    public void testJsonReader() throws IOException{
//        try (Reader reader = new InputStreamReader(res.getInputStream(), "UTF_8")) {
//            FileCopyUtils.copyToString(reader);
//        } catch (IOException e) {
//            throw new UncheckedIOException(e);
//        }
        GenshinData data = om.readValue(new File("src/main/resources/genshinData_GOOD_2022_05_13_14_39.json"), GenshinData.class);
        System.out.println(data.toString());
    }
    
}
