// import { ReactComponent as bgConstel} from "../../assets/backgroundConstel.svg";
import { ReactSVG } from "react-svg";
import { ReactComponent as BgConstel } from "../../assets/backgroundConstel.svg";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { LevelButton } from "../buttons/level-button";
import ascensionIcon from "../../assets/ascension.png";

export const CreatePersoPersoTab = ({vision,listConstel}) =>{
    var [listConstelLock,setListConstelLock] = useState([false,false,false,false,false,false]);
    var [listAscension, setListAscension] = useState([true,true,true,false,false,false]);

    function onConstelClick(index) {
        const nextConstelLock = listConstelLock.map((constelLock,i) => {
            if (i === index){
                return !constelLock;
            }else{
                return constelLock;
            }
        })
        setListConstelLock(nextConstelLock);
        console.log("listConstelLock",listConstelLock);
    }

    return(
        <>
        <Row>
            {listConstel.map((constel,index) => {
                console.log("listConstelLock",listConstelLock);
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
            <Col><LevelButton className="margin-left-36px"/></Col>
            <Col>
            {listAscension.map((ascension,index) => {
                return (
                    <img src={ascensionIcon} className={ascension ? "width-20px margin-right-3px":"width-20px margin-right-3px opacity-25"}></img>
                )
            })}
            </Col>
        </Row>
        </> 
    )
}