/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import java.util.ArrayList;

/**
 *
 * @author nathan
 */
@JsonIgnoreProperties(ignoreUnknown = true)
public class GenshinData {
    private String format;
    private Integer version;
    private ArrayList<Weapon> weapons;
    private ArrayList<ArtifactInvKam> artifacts;
    private ArrayList<Character> characters;

    public String getFormat() {
        return format;
    }

    public void setFormat(String format) {
        this.format = format;
    }

    public Integer getVersion() {
        return version;
    }

    public void setVersion(Integer version) {
        this.version = version;
    }

    public ArrayList<Weapon> getWeapons() {
        return weapons;
    }

    public void setWeapons(ArrayList<Weapon> weapons) {
        this.weapons = weapons;
    }

    public ArrayList<ArtifactInvKam> getArtifacts() {
        return artifacts;
    }

    public void setArtifacts(ArrayList<ArtifactInvKam> artifacts) {
        this.artifacts = artifacts;
    }

    public ArrayList<Character> getCharacters() {
        return characters;
    }

    public void setCharacters(ArrayList<Character> characters) {
        this.characters = characters;
    }

    @Override
    public String toString() {
        return "GenshinData{" + "format=" + format + ", version=" + version + ", weapons=" + weapons + ", artifacts=" + artifacts + ", characters=" + characters + '}';
    }
    
}
