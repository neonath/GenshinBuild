/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.repositories;

import com.aerann.GenshinBuildGenerator.metier.Artifact;
import com.aerann.GenshinBuildGenerator.metier.ArtifactInvKam;
import java.util.List;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 *
 * @author nathan
 */
public interface ArtefactRepository extends MongoRepository<Artifact, String>{
    public List<Artifact> findBySetKeyAndSlotKey(String setKey, String slotKey);
}