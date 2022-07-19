/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier;

import com.fasterxml.jackson.annotation.JsonGetter;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonSetter;
import java.util.HashMap;
import java.util.List;
import org.springframework.data.annotation.Id;

/**
 *
 * @author nathan
 */
public class Artifact {
    @Id
    private String Id;
    private String setKey;
    private String slotKey;
    private String name;
    private Integer rarity;
    private String mainStat;
    private Float mainStatValue;
    private Integer level;
    private List<Substat> substats;
    private String equippedCharacter;
    private Boolean lock;
    private Integer subStatsCount;

    public Artifact(String setKey, String slotKey) {
        this.setKey = setKey;
        this.slotKey = slotKey;
    }
    
    public Artifact(ArtifactInvKam artifact, String name, Float mainStatValue){
        this.setKey = artifact.getSetKey();
        this.slotKey = artifact.getSlotKey();
        this.name = name;
        this.rarity = artifact.getRarity();
        this.mainStat = artifact.getMainStatKey();
        this.mainStatValue = mainStatValue;
        this.level = artifact.getLevel();
        this.substats = artifact.getSubstats();
        this.equippedCharacter = artifact.getLocation();
        this.lock = artifact.getLock();
        this.subStatsCount = artifact.getSubStatsCount();
    }

    public Artifact() {
        super();
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Float getMainStatValue() {
        return mainStatValue;
    }

    public void setMainStatValue(Float mainStatValue) {
        this.mainStatValue = mainStatValue;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    @JsonGetter("Id")
    public String getId() {
        return Id;
    }

    @JsonSetter("Id")
    public void setId(String Id) {
        this.Id = Id;
    }

    public String getSetKey() {
        return setKey;
    }

    public void setSetKey(String setKey) {
        this.setKey = setKey;
    }

    public String getSlotKey() {
        return slotKey;
    }

    public void setSlotKey(String slotKey) {
        this.slotKey = slotKey;
    }

    public Integer getRarity() {
        return rarity;
    }

    public void setRarity(Integer Rarity) {
        this.rarity = Rarity;
    }

    public String getMainStatKey() {
        return mainStat;
    }

    public void setMainStatKey(String mainStat) {
        this.mainStat = mainStat;
    }

    public List<Substat> getSubstats() {
        return substats;
    }

    public void setSubstats(List<Substat> substats) {
        this.substats = substats;
    }
    
    public String getLocation() {
        return equippedCharacter;
    }

    public void setLocation(String equippedCharacter) {
        this.equippedCharacter = equippedCharacter;
    }

    public Boolean getLock() {
        return lock;
    }

    public void setLock(Boolean lock) {
        this.lock = lock;
    }
    
    @JsonGetter("SubStatsCount")
    public Integer getSubStatsCount() {
        return subStatsCount;
    }
    
    @JsonSetter("SubStatsCount")
    public void setSubStatsCount(Integer subStatsCount) {
        this.subStatsCount = subStatsCount;
    }

    @Override
    public String toString() {
        return "Artifact{" + "Id=" + Id + ", setName=" + setKey + ", slotKey=" + slotKey + ", Rarity=" + rarity + ", mainStat=" + mainStat + ", level=" + level + ", substats=" + substats + ", equippedCharacter=" + equippedCharacter + ", lock=" + lock + ", subStatsCount=" + subStatsCount + '}';
    }
    
}
