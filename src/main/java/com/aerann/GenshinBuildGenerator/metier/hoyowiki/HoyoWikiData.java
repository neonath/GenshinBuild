/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier.hoyowiki;

/**
 *
 * @author nathan
 */
public class HoyoWikiData {
    public HoyoWikiPage page;

    public HoyoWikiPage getPage() {
        return page;
    }

    public void setPage(HoyoWikiPage page) {
        this.page = page;
    }

    @Override
    public String toString() {
        return "HoyoWikiData{" + "page=" + page + '}';
    }
    
    
}
