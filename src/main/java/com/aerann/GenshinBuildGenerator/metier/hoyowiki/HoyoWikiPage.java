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
public class HoyoWikiPage {
    private String id;
    private String menuName;
    private String name;
    private List<HoyoWikiModule> modules;

    public String getId() {
        return id;
    }

    public void setId(String id) {
        this.id = id;
    }

    public String getMenuName() {
        return menuName;
    }

    public void setMenuName(String menuName) {
        this.menuName = menuName;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public List<HoyoWikiModule> getModules() {
        return modules;
    }

    public void setModules(List<HoyoWikiModule> modules) {
        this.modules = modules;
    }

    @Override
    public String toString() {
        return "HoyoWikiPage{" + "id=" + id + ", menuName=" + menuName + ", name=" + name + ", modules=" + modules + '}';
    }
}
