/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.rest;

import com.aerann.GenshinBuildGenerator.metier.GenshinData;
import com.aerann.GenshinBuildGenerator.metier.ArtifactInvKam;
import com.aerann.GenshinBuildGenerator.metier.ArtifactForm;
import com.aerann.GenshinBuildGenerator.services.interfaces.IArtifactService;
import java.util.ArrayList;
import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author nathan
 */
@RestController
public class ArtifactAPI {
    
    @Autowired
    private IArtifactService artefactService;
    
    @PostMapping(value = "/import",consumes = MediaType.APPLICATION_JSON_VALUE,produces = MediaType.APPLICATION_JSON_VALUE)
    public void importFromJSON(@RequestBody GenshinData data){
        System.out.println(data.toString());
    }
    
    @PostMapping(value ="/calculateBuild",produces = MediaType.APPLICATION_JSON_VALUE)
    public List<ArtifactInvKam> calculateBuild(@RequestBody ArrayList<ArtifactForm> artefacts){
        List<ArtifactInvKam> res = artefactService.calculateBuild(artefacts);
        System.out.println(res.toString());
        return res;
    }
}
