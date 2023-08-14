import { useEffect, useState } from 'react';
import "./HitStay.css";
import ShowPicsComputer from "./ShowPicsComputer"

function Computer({getCard, computerCards, setComputerCards, playerLost, computerLost, setComputerLost, countComputer, setCountComputer, countPlayer}) {

    const btnStand = document.getElementById("btn-stand");
       
    function clickedStand (){
        setComputerLost("start");
        btnStand.style.visibility = 'hidden';
    }

    useEffect(() => {
        if(computerLost === 'true' || playerLost==="true") {
            return;
        }
        if (computerLost=="inProgress"){
            if(computerCards[0]?.value<10){
                setCountComputer(computerCards[0]?.value);
            } else {
                setCountComputer(10);
            }
        } else {
            let sum=0;
            computerCards.forEach(element => {
                if(element.value>10){
                    sum+=10;
                } else {
                    sum+=element.value;                
                }
            });
            setCountComputer(sum);
            if(sum<countPlayer && playerLost!="true" && computerLost!="true"){
                setComputerLost("hit"+computerCards.length);}
            else {
                setComputerLost("stand");}
            //setCountComputer(sum);
        }
    },[computerCards])

    useEffect(() => {
        if(computerLost === 'true' || computerLost === 'inProgress') {
            return;
        }
        if(computerLost=="start"){
            let sum = 0;
            computerCards.forEach(element => {
                if(element.value>10){
                    sum+=10;
                } else {
                    sum+=element.value;                
                }
                setCountComputer(sum);
            });
            if (sum<countPlayer && playerLost!="true" && computerLost!="true"){
                console.log("check1");
                setTimeout(()=>{
                        setCountComputer(sum);
                        computerHit();
                }, 3000);
            } else {
                console.log("check2");
                setCountComputer(sum);
                setComputerLost("stand");
            }
        } else if (countComputer<countPlayer && playerLost!="true" && computerLost!="true"){ 
            console.log("check3");
            setTimeout(()=>{
                        computerHit();
                    }, 3000);
                } else {
                    console.log("check4");
                    setComputerLost("stand");
        }
    },[computerLost])

    function computerHit(){
        const newCard = getCard();
        setComputerCards([...computerCards, newCard]);
        console.log("hittt");
    }

    useEffect(() => {
        if(computerLost === 'true') {
            return;
        }
        if(playerLost=="true" || playerLost=="false"){
            btnStand.style.visibility = 'hidden';
        }
    },[playerLost])

    useEffect(() => {
        if(countComputer>21){
            setComputerLost("true");
        } else if(countComputer==21){
            setComputerLost("false");
        } 
    },[countComputer])

    return (
        <div className="player-div">
            <h1 className='player-dealer'>Dealer:</h1>
            <h1 className='counter'>{countComputer}</h1>
            <ShowPicsComputer computerCards={computerCards} computerLost={computerLost}/>
            <button id="btn-stand" className="game-option" onClick={clickedStand}>Stand</button>
        </div>
    );
}

export default Computer;