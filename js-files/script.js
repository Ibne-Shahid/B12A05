// Heart Icon Numbers

function heartIcon (){

    const heartCount = parseInt(document.getElementById("heart-count").innerText)
    
    document.getElementById("heart-count").innerText = heartCount + 1

}

// Function for dynamic call buttons

function buttonHandler (buttonId, titleId, eNumber){

    document.getElementById(buttonId).addEventListener('click',function(){

    const coinsCount = document.getElementById("coins-count").innerText;

    const title = document.getElementById(titleId).innerText;
    const emergencyNumber = document.getElementById(eNumber).innerText;

    if(coinsCount<20){
        alert('❌ You do not have enough coins. You need at least 20 coins to make a call.')
        return;
    }

    document.getElementById("coins-count").innerText = coinsCount-20

    alert(`📞 Calling ${title} ${emergencyNumber}...`);


})

}

// Dynamic Call Buttons

// National Emergency

buttonHandler("national-emergency", "national-emergency-title", "national-emergency-number")

// Police Helpline

buttonHandler("police-helpline-button", "police-helpline-title", "police-number")

// Fire Service

buttonHandler("fire-service-button", "fire-service-title", "fire-service-number")

// Ambulance Service

buttonHandler("ambulance-service-button", "ambulance-title", "ambulance-number")

// Women & Child Helpline

buttonHandler("women-and-child-button", "women-and-child-title", "women-and-child-number")

// Anti Corruption Helpline

buttonHandler("anti-corruption-button", "anti-corruption-title", "anti-corruption-number")

// Electricity Helpline

buttonHandler("electricity-button", "electricity-title", "electricity-number")

// Brac Helpline

buttonHandler("brac-button", "brac-title", "brac-number")

// Bangladesh Railway Helpline

buttonHandler("railway-button", "railway-title", "railway-number")