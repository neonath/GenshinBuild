// import { ReactComponent as bgConstel} from "../../assets/backgroundConstel.svg";
import PropTypes from "prop-types"
import React from "react";
import { ReactComponent as BgConstel } from "../../assets/backgroundConstel.svg";
import { Col, Container, Form, Row } from "react-bootstrap";
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
        <Container>
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
            <Row><div className="title text-center">Niveau</div></Row>
            <Row className="margin-top-21px">
                <Col className="me-3">
                    <LevelButton setLevel={setLevelPerso} min={0} max={90}/>
                </Col>
                <Col className="ms-3 align-self-center">
                {listAscension.map((ascension,index) => {
                    return (
                        <img key={index} src={ascensionIcon} className={ascension ? "width-20px margin-right-3px":"width-20px margin-right-3px opacity-25"}></img>
                    )
                })}
                </Col>
            </Row>
            <Row><div className="title text-center margin-top-28px">Talents</div></Row>
            <Row className="margin-top-21px">
                <Form.Group as={Col}>
                    <Form.Label as="div" className="text-center">Normal</Form.Label>
                    <LevelButton setLevel={setLevelAtkNormal} min={0} max={10}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label as="div" className="text-center">Compétence</Form.Label>
                    <LevelButton setLevel={setLevelCompetence} min={0} max={10}/>
                </Form.Group>
                <Form.Group as={Col}>
                    <Form.Label as="div" className="text-center">Déchainement</Form.Label>
                    <LevelButton setLevel={setLevelDechainement} min={0} max={10}/>
                </Form.Group>
            </Row>
        </Container>
    )
}

CreatePersoPersoTab.propTypes = {
  listConstel: PropTypes.array,
  vision: PropTypes.any
}



export default CreatePersoPersoTab;