import { useEffect, useState } from 'react';
import "./HitStay.css";
import ShowPicsComputer from "./ShowPicsComputer"

function Computer({getCard, computerCards, setComputerCards, playerLost, computerLost, setComputerLost, countComputer, setCountComputer, countPlayer}) {

    const btnStand = document.getElementById("btn-stand");
    //const imgSec = document.getElementById("computer-second");
    //const pickedCard1 = getCard();
    //const pickedCard2 = getCard();
       
    function clickedStand (){
        console.log("btn-stand");
        setComputerLost("start");
        btnStand.style.visibility = 'hidden';
    }

    useEffect(() => {
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
                setCountComputer(sum);
            });
        }
    },[computerCards])

    useEffect(() => {
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
            if (countComputer<countPlayer && playerLost!="true" && computerLost!="true"){
                setTimeout(()=>{
                        computerHit();
                }, 3000);
            } else {
                setComputerLost("stand");
            }
        } else if (countComputer<countPlayer){ 
                    setTimeout(()=>{
                        computerHit();
                    }, 3000);
                    console.log("hitCheck", countComputer<countPlayer && playerLost!="true" && computerLost!="true" && countComputer<21);
                } else {
                    setComputerLost("stand");
                    console.log("hitCheck", countComputer<countPlayer && playerLost!="true" && computerLost!="true" && countComputer<21);
        }
    },[computerLost])

    function computerHit(){
        const newCard = getCard();
        console.log("newCrd"+newCard);
        setComputerCards([...computerCards, newCard]);
        console.log("playerCardsss"+computerCards);
        setComputerLost("hit"+computerCards.length);
    }

    useEffect(() => {
        if(playerLost=="true" || playerLost=="false"){
            console.log(playerLost);
            btnStand.style.visibility = 'hidden';
        }
    },[playerLost])

    useEffect(() => {
        console.log("countCheck"+countComputer)
        if(countComputer>21){
            setComputerLost("true");
        } else if(countComputer==21){
            setComputerLost("false");
        } 
        /*else if (countComputer<countPlayer){
            const newCard = getCard();
            console.log("newCrdComp"+newCard);
            setComputerCards([...computerCards, newCard]);
            console.log("playerCardsss"+computerCards);
        }*/
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