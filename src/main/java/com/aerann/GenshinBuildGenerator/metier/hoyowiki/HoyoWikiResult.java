/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */
package com.aerann.GenshinBuildGenerator.metier.hoyowiki;

/**
 *
 * @author nathan
 */
public class HoyoWikiResult {
    public HoyoWikiData data;
    public String message;
    public Integer retCode;

    public HoyoWikiData getData() {
        return data;
    }

    public void setData(HoyoWikiData data) {
        this.data = data;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public Integer getRetCode() {
        return retCode;
    }

    public void setRetCode(Integer retCode) {
        this.retCode = retCode;
    }

    @Override
    public String toString() {
        return "HoyoWikiResult{" + "data=" + data + ", message=" + message + ", retCode=" + retCode + '}';
    }
    
}
