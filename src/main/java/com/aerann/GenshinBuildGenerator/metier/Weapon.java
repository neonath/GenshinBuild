/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier;

/**
 *
 * @author nathan
 */
public class Weapon {
    private Integer id;
    private String key;
    private Integer level;
    private Integer ascension;
    private Integer refinement;
    private String location;
    private Boolean lock;

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

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

    public Integer getAscension() {
        return ascension;
    }

    public void setAscension(Integer ascension) {
        this.ascension = ascension;
    }

    public Integer getRefinement() {
        return refinement;
    }

    public void setRefinement(Integer refinement) {
        this.refinement = refinement;
    }

    public String getLocation() {
        return location;
    }

    public void setLocation(String location) {
        this.location = location;
    }

    public Boolean getLock() {
        return lock;
    }

    public void setLock(Boolean lock) {
        this.lock = lock;
    }

    @Override
    public String toString() {
        return "Weapon{" + "key=" + key + ", level=" + level + ", ascension=" + ascension + ", refinement=" + refinement + ", location=" + location + ", lock=" + lock + '}';
    }
    
}
