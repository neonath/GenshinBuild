/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

//var app = angular.module("app");
app.controller("home_controller", function($scope,$http) {
    $scope.mainStatSablier = [{label: "ATK%", value: "atk_"},
                            {label: "DEF%", value: "def_"},
                            {label: "PV%", value: "hp_"},
                            {label: "Recharge d'énergie", value: "enerRech_"}];
    $scope.mainStatCoupe = [{label: "ATK%", value: "atk_"},
                        {label: "DEF%", value: "def_"},
                        {label: "PV%", value: "hp_"},
                        {label: "DGT Physique %", value: "physical_dmg_"},
                        {label: "DGT Anemo %", value: "anemo_dmg_"},
                        {label: "DGT Pyro %", value: "pyro_dmg_"},
                        {label: "DGT Electro %", value: "electro_dmg_"},
                        {label: "DGT Cryo %", value: "cryo_dmg_"},
                        {label: "DGT Hydro %", value: "hydro_dmg_"},
                        {label: "DGT Geo %", value: "geo_dmg_"},
                        {label: "Recharge d'énergie", value: "enerRech_"}];
    $scope.mainStatCouronne = [{label: "ATK%", value: "atk_"},
                            {label: "DEF%", value: "def_"},
                            {label: "PV%", value: "hp_"},
                            {label: "Taux critique", value: "critRate_"},
                            {label: "DGT Critique %", value: "critDMG_"},
                            {label: "Soins %", value: "heal_"},
                            {label: "Recharge d'énergie", value: "enerRech_"}];
    $scope.subStats = [{label: "ATK", value: "atk"},
                        {label: "DEF", value: "def"},
                        {label: "PV", value: "hp"},
                        {label: "ATK%", value: "atk_"},
                        {label: "DEF%", value: "def_"},
                        {label: "PV%", value: "hp_"},
                        {label: "Taux critique", value: "critRate_"},
                        {label: "DGT Critique %", value: "critDMG_"},
                        {label: "Maitrise elementaire", value: "eleMas"},
                        {label: "Recharge d'énergie", value: "enerRech_"}];
    $scope.stats = [{label: "ATK", value: "atk"},
                        {label: "DEF", value: "def"},
                        {label: "PV", value: "hp"},
                        {label: "ATK", value: "atk_"},
                        {label: "DEF", value: "def_"},
                        {label: "PV", value: "hp_"},
                        {label: "Taux critique", value: "critRate_"},
                        {label: "DGT Critique", value: "critDMG_"},
                        {label: "DGT Physique", value: "physical_dmg_"},
                        {label: "DGT Anemo", value: "anemo_dmg_"},
                        {label: "DGT Pyro", value: "pyro_dmg_"},
                        {label: "DGT Electro", value: "electro_dmg_"},
                        {label: "DGT Cryo", value: "cryo_dmg_"},
                        {label: "DGT Hydro", value: "hydro_dmg_"},
                        {label: "DGT Geo", value: "geo_dmg_"},
                        {label: "Maitrise elementaire", value: "eleMas"},
                        {label: "Recharge d'énergie", value: "enerRech_"},
                        {label: "Soins", value: "heal_"}];
    
    $scope.artifacts = [{slotKey:"flower", mainStat:"hp", substats:["critDMG_","atk_","",""]},
                        {slotKey:"plume", mainStat:"atk", substats:["critDMG_","atk_","",""]},
                        {slotKey:"sands", mainStat:"atk_", substats:["critDMG_","atk_","",""]},
                        {slotKey:"goblet", mainStat:"def_", substats:["critDMG_","atk_","",""]},
                        {slotKey:"circlet", mainStat:"critDMG_", substats:["critRate_","atk_","",""]}];
//    $scope.artifacts = [{slotKey:"flower", mainStat:"hp", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"plume", mainStat:"atk", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"sands", mainStat:"atk_", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"goblet", mainStat:"def_", substats:["critDMG_","atk_","",""]},
//                        {slotKey:"circlet", mainStat:"critDMG_", substats:["critRate_","atk_","",""]}];
                    
    $scope.updateSubStatList = function (index, content) {
                        if (index !== -1) {
                            $scope.rows.splice(index, 1);
                        }
                    };
    $scope.calculateBuild = function(){
        
        $http({
            method: 'POST',
            url: "127.0.0.1:8080/calculateBuild",
            data: angular.toJson($scope.artifacts),
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(_success,_error);
    };
    
    function _success(res){
        $scope.artifactsRes = res.data;
        console.log("httpcallresponse",res);
    }
    
    function _error(res){
        var data = res.data;
        var status = res.status;
        var header = res.header;
        var config = res.config;
        alert("Error: " + status + ":" + data);
    }
    
    $scope.importArtefactFromJson = function(){
        $http({
            method: 'POST',
            url: "/import",
            data: {},
            headers: {
                'Content-Type': 'application/json'
            }
        }).then(_successImport,_errorImport);
    };
    
    function _successImport(res){
        console.log("httpcallresponse",res);
    }
    
    function _errorImport(res){
        var data = res.data;
        var status = res.status;
        var header = res.header;
        var config = res.config;
        alert("Error: " + status + ":" + data);
    }
    
    $scope.formatStat = function(stat){
        var statDao = {};
        if(stat.key !== null){
            statDao.key = $scope.getStatLabel(stat.key);
            statDao.value = "+ "+stat.value;
            if(stat.key.includes("_")){
                statDao.value = statDao.value+"%";
            }
        }
        return statDao.key+" "+statDao.value;
    };
    
    $scope.getStatLabel = function(statValue){
       var stat = $scope.stats.find(stat => stat.value === statValue);
       if(stat !== null && stat !== undefined){
          return stat.label; 
       }
       return null;
   };
});