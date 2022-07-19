/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier.hoyowiki;

/**
 *
 * @author nathan
 */
public class HoyoWikiComponent {
    private String component_id;
    private String data;

    public String getComponentId() {
        return component_id;
    }

    public void setComponentId(String componentId) {
        this.component_id = componentId;
    }

    public String getData() {
        return data;
    }

    public void setData(String data) {
        this.data = data;
    }

    public String getComponent_id() {
        return component_id;
    }

    public void setComponent_id(String component_id) {
        this.component_id = component_id;
    }

    @Override
    public String toString() {
        return "HoyoWikiComponent{" + "component_id=" + component_id + ", data=" + data + '}';
    }
}
