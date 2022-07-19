/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier;

import java.util.ArrayList;

/**
 *
 * @author nathan
 */
public class ArtifactForm {
    private String slotKey;
    private String mainStat;
    private ArrayList<String> substats;

    public String getSlotKey() {
        return slotKey;
    }

    public void setSlotKey(String slotKey) {
        this.slotKey = slotKey;
    }

    public String getMainStat() {
        return mainStat;
    }

    public void setMainStat(String mainStat) {
        this.mainStat = mainStat;
    }

    public ArrayList<String> getSubstats() {
        return substats;
    }

    public void setSubstats(ArrayList<String> substats) {
        this.substats = substats;
    }

    @Override
    public String toString() {
        return "ArtifactForm{" + "slotKey=" + slotKey + ", mainStat=" + mainStat + ", substats=" + substats + '}';
    }
    
    
}
