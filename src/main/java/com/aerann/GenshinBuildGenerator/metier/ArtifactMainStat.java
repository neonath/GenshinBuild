/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier;

import java.util.ArrayList;
import org.springframework.data.annotation.Id;

/**
 *
 * @author nathan
 */
public class ArtifactMainStat {
    @Id
    private String id;
    private Integer rarity;
    private ArrayList<Float> hp;
    private ArrayList<Float> atk;
    private ArrayList<Float> hp_;
    private ArrayList<Float> atk_;
    private ArrayList<Float> def_;
    private ArrayList<Float> physDMG_;
    private ArrayList<Float> elemDMG_;
    private ArrayList<Float> elemMastery;
    private ArrayList<Float> energyRech_;
    private ArrayList<Float> critRate_;
    private ArrayList<Float> critDMG_;
    private ArrayList<Float> heal_;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }
    
    public Integer getRarity() {
        return rarity;
    }

    public void setRarity(Integer rarity) {
        this.rarity = rarity;
    }

    public ArrayList<Float> getHp() {
        return hp;
    }

    public void setHp(ArrayList<Float> hp) {
        this.hp = hp;
    }

    public ArrayList<Float> getAtk() {
        return atk;
    }

    public void setAtk(ArrayList<Float> atk) {
        this.atk = atk;
    }

    public ArrayList<Float> getHp_() {
        return hp_;
    }

    public void setHp_(ArrayList<Float> hp_) {
        this.hp_ = hp_;
    }

    public ArrayList<Float> getAtk_() {
        return atk_;
    }

    public void setAtk_(ArrayList<Float> atk_) {
        this.atk_ = atk_;
    }

    public ArrayList<Float> getDef_() {
        return def_;
    }

    public void setDef_(ArrayList<Float> def_) {
        this.def_ = def_;
    }

    public ArrayList<Float> getPhysDMG_() {
        return physDMG_;
    }

    public void setPhysDMG_(ArrayList<Float> physDMG_) {
        this.physDMG_ = physDMG_;
    }

    public ArrayList<Float> getElemDMG_() {
        return elemDMG_;
    }

    public void setElemDMG_(ArrayList<Float> elemDMG_) {
        this.elemDMG_ = elemDMG_;
    }

    public ArrayList<Float> getElemMastery() {
        return elemMastery;
    }

    public void setElemMastery(ArrayList<Float> elemMastery) {
        this.elemMastery = elemMastery;
    }

    public ArrayList<Float> getEnergyRech_() {
        return energyRech_;
    }

    public void setEnergyRech_(ArrayList<Float> energyRech_) {
        this.energyRech_ = energyRech_;
    }

    public ArrayList<Float> getCritRate_() {
        return critRate_;
    }

    public void setCritRate_(ArrayList<Float> critRate_) {
        this.critRate_ = critRate_;
    }

    public ArrayList<Float> getCritDMG_() {
        return critDMG_;
    }

    public void setCritDMG_(ArrayList<Float> critDMG_) {
        this.critDMG_ = critDMG_;
    }

    public ArrayList<Float> getHeal_() {
        return heal_;
    }

    public void setHeal_(ArrayList<Float> heal_) {
        this.heal_ = heal_;
    }

    @Override
    public String toString() {
        return "ArtifactMainStat{" + "id=" + id + ", rarity=" + rarity + ", hp=" + hp + ", atk=" + atk + ", hp_=" + hp_ + ", atk_=" + atk_ + ", def_=" + def_ + ", physDMG_=" + physDMG_ + ", elemDMG_=" + elemDMG_ + ", elemMastery=" + elemMastery + ", energyRech_=" + energyRech_ + ", critRate_=" + critRate_ + ", critDMG_=" + critDMG_ + ", heal_=" + heal_ + '}';
    }
    
}
