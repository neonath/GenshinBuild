// import { ReactComponent as bgConstel} from "../../assets/backgroundConstel.svg";
import PropTypes from "prop-types"
import React from "react";
import { ReactSVG } from "react-svg";
import { ReactComponent as BgConstel } from "../../assets/backgroundConstel.svg";
import { Col, Form, Row } from "react-bootstrap";
import { useState } from "react";
import LevelButton from "../buttons/level-button";
import ascensionIcon from "../../assets/ascension.png";

const CreatePersoPersoTab = ({vision,listConstel}) =>{
    var [listConstelLock,setListConstelLock] = useState([false,false,false,false,false,false]);
    var [listAscension, setListAscension] = useState([false,false,false,false,false,false]);
    var [levelPerso,setLevelPerso] = useState(0);
    var [levelAtkNormal,setLevelAtkNormal] = useState(0);
    var [levelCompetence,setLevelCompetence] = useState(0);
    var [levelDechainement,setLevelDechainement] = useState(0);

    function onConstelClick(index) {
        const nextConstelLock = listConstelLock.map((constelLock,i) => {
            if (i === index){
                return !constelLock;
            }else{
                return constelLock;
            }
        })
        setListConstelLock(nextConstelLock);
        // console.log("listConstelLock",listConstelLock);
    }

    function handleMinusLevelPersoButtonClick() {
        if(levelPerso>0){
            setLevelPerso(levelPerso-1);
        }
        setAscensionList();
    }

    function handlePlusLevelPersoButtonClick() {
        if(levelPerso<90){
            setLevelPerso(levelPerso+1);
        }
        setAscensionList();
    }

    function onChangeLevelPerso(e){
        setLevelPerso(parseInt(e.target.value));
        setAscensionList();
    }

    function handleMinusLevelAtkNormalButtonClick() {
        if(levelAtkNormal>0){
            setLevelAtkNormal(levelAtkNormal-1);
        }
    }

    function handlePlusLevelAtkNormalButtonClick() {
        if(levelAtkNormal<10){
            setLevelAtkNormal(levelAtkNormal+1);
        }
    }

    function onChangeLevelAtkNormal(e){
        setLevelAtkNormal(parseInt(e.target.value));
    }

    function handleMinusLevelCompetenceButtonClick() {
        if(levelCompetence>0){
            setLevelCompetence(levelCompetence-1);
        }
    }

    function handlePlusLevelCompetenceButtonClick() {
        if(levelCompetence<10){
            setLevelCompetence(levelCompetence+1);
        }
    }

    function onChangeLevelCompetence(e){
        setLevelCompetence(parseInt(e.target.value));
    }

    function handleMinusLevelDechainementButtonClick() {
        if(levelDechainement>0){
            setLevelDechainement(levelDechainement-1);
        }
    }

    function handlePlusLevelDechainementButtonClick() {
        if(levelDechainement<10){
            setLevelDechainement(levelDechainement+1);
        }
    }

    function onChangeLevelDechainement(e){
        setLevelDechainement(parseInt(e.target.value));
    }

    function setAscensionList(){
        if (levelPerso<20){
            setListAscension([false,false,false,false,false,false]);
        }else if(levelPerso>20 && levelPerso<40){
            setListAscension([true,false,false,false,false,false]);
        }else if(levelPerso>40 && levelPerso<50){
            setListAscension([true,true,false,false,false,false]);
        }else if(levelPerso>50 && levelPerso<60){
            setListAscension([true,true,true,false,false,false]);
        }else if(levelPerso>60 && levelPerso<70){
            setListAscension([true,true,true,true,false,false]);
        }else if(levelPerso>70 && levelPerso<80){
            setListAscension([true,true,true,true,true,false]);
        }else if(levelPerso>80){
            setListAscension([true,true,true,true,true,true]);
        }
    }
    console.log(listAscension);

    return(
        <>
        <Row>
            {listConstel.map((constel,index) => {
                // console.log("listConstelLock",listConstelLock);
                return (
                    <Col key={"constel"+index}>
                        <div onClick={() => onConstelClick(index)}>
                            <BgConstel className={listConstelLock[index] ? "width-69px " + vision + "-color locked":"width-69px " + vision + "-color"}/>
                            <img src={constel.iconUrl} className={listConstelLock[index] ? "width-37px constel-img locked":"width-37px constel-img"}></img>
                        </div>
                    </Col>
                )
            })}
        </Row>
        <Row><div className="title">Niveau</div></Row>
        <Row className="margin-top-21px">
            <Col>
                <LevelButton className="margin-left-36px" level={levelPerso} onMinusClick={handleMinusLevelPersoButtonClick} onPlusClick={handlePlusLevelPersoButtonClick} onChange={onChangeLevelPerso}/>
            </Col>
            <Col>
            {listAscension.map((ascension,index) => {
                return (
                    <img key={index} src={ascensionIcon} className={ascension ? "width-20px margin-right-3px":"width-20px margin-right-3px opacity-25"}></img>
                )
            })}
            </Col>
        </Row>
        <Row><div className="title margin-top-28px">Talents</div></Row>
        <Row className="margin-top-21px">
            <Form.Group as={Col}>
                <Form.Label>Normal</Form.Label>
                <LevelButton className="margin-left-36px" level={levelAtkNormal} onMinusClick={handleMinusLevelAtkNormalButtonClick} onPlusClick={handlePlusLevelAtkNormalButtonClick} onChange={onChangeLevelAtkNormal}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Compétence</Form.Label>
                <LevelButton className="margin-left-36px" level={levelCompetence} onMinusClick={handleMinusLevelCompetenceButtonClick} onPlusClick={handlePlusLevelCompetenceButtonClick} onChange={onChangeLevelCompetence}/>
            </Form.Group>
            <Form.Group as={Col}>
                <Form.Label>Déchainement</Form.Label>
                <LevelButton className="margin-left-36px" level={levelDechainement} onMinusClick={handleMinusLevelDechainementButtonClick} onPlusClick={handlePlusLevelDechainementButtonClick} onChange={onChangeLevelDechainement}/>
            </Form.Group>
        </Row>
        </> 
    )
}

CreatePersoPersoTab.propTypes = {
  listConstel: PropTypes.shape({
    map: PropTypes.func
  }),
  vision: PropTypes.any
}



export default CreatePersoPersoTab;