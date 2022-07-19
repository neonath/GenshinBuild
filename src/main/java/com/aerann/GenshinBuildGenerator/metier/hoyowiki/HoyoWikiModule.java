/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier.hoyowiki;

import java.util.List;

/**
 *
 * @author nathan
 */
public class HoyoWikiModule {
    public String name;
    public List<HoyoWikiComponent> components;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<HoyoWikiComponent> getComponents() {
        return components;
    }

    public void setComponents(List<HoyoWikiComponent> components) {
        this.components = components;
    }

    @Override
    public String toString() {
        return "HoyoWikiModule{" + "name=" + name + ", components=" + components + '}';
    }
}
