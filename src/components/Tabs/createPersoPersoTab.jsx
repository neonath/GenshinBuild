// import { ReactComponent as bgConstel} from "../../assets/backgroundConstel.svg";
import { ReactSVG } from "react-svg";
import { ReactComponent as BgConstel } from "../../assets/backgroundConstel.svg";
import { Col, Row } from "react-bootstrap";
import { useState } from "react";
import { LevelButton } from "../buttons/level-button";

export const CreatePersoPersoTab = ({vision,listConstel}) =>{
    var [listConstelLock,setListConstelLock] = useState([false,false,false,false,false,false]);

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
        <Row>
            <LevelButton/>
        </Row>
        </> 
    )
}