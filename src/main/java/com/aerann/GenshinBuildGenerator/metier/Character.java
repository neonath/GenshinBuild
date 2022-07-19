/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier;

import java.util.HashMap;

/**
 *
 * @author nathan
 */
public class Character {
    private String key;
    private Integer level;
    private Integer constellation;
    private Integer ascension;
    private HashMap<String,Integer> talent;

    public String getKey() {
        return key;
    }

    public void setKey(String key) {
        this.key = key;
    }

    public Integer getLevel() {
        return level;
    }

    public void setLevel(Integer level) {
        this.level = level;
    }

    public Integer getConstellation() {
        return constellation;
    }

    public void setConstellation(Integer constellation) {
        this.constellation = constellation;
    }

    public Integer getAscension() {
        return ascension;
    }

    public void setAscension(Integer ascension) {
        this.ascension = ascension;
    }

    public HashMap<String, Integer> getTalent() {
        return talent;
    }

    public void setTalent(HashMap<String, Integer> talent) {
        this.talent = talent;
    }

    @Override
    public String toString() {
        return "Character{" + "key=" + key + ", level=" + level + ", constellation=" + constellation + ", ascension=" + ascension + ", talent=" + talent + '}';
    }
    
    
}
