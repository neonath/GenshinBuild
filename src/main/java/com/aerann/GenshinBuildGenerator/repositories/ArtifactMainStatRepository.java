/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Interface.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.repositories;

import org.springframework.data.mongodb.repository.MongoRepository;
import com.aerann.GenshinBuildGenerator.metier.ArtifactMainStat;

/**
 *
 * @author nathan
 */
public interface ArtifactMainStatRepository extends MongoRepository<ArtifactMainStat, String>{
    public ArtifactMainStat findByRarity(Integer rarity);
}
