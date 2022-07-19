/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.services.interfaces;

import com.aerann.GenshinBuildGenerator.metier.ArtifactInvKam;
import com.aerann.GenshinBuildGenerator.metier.ArtifactForm;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author nathan
 */
public interface IArtifactService {

    List<ArtifactInvKam> calculateBuild(List<ArtifactForm> data);
    String getArtifactFromJson();
    
}
