// Heart Icon Numbers

function heartIcon() {

    const heartCount = parseInt(document.getElementById("heart-count").innerText)

    document.getElementById("heart-count").innerText = heartCount + 1

}

// Call History Data

const callHistory = [];


// Function for dynamic call buttons

function buttonHandler(buttonId, titleId, eNumber) {

    document.getElementById(buttonId).addEventListener('click', function () {

        const coinsCount = document.getElementById("coins-count").innerText;

        const title = document.getElementById(titleId).innerText;
        const emergencyNumber = document.getElementById(eNumber).innerText;

        if (coinsCount < 20) {
            alert('❌ You do not have enough coins. You need at least 20 coins to make a call.')
            return;
        }

        document.getElementById("coins-count").innerText = coinsCount - 20

        alert(`📞 Calling ${title} ${emergencyNumber}...`);

        const history = {
            service: title,
            number: emergencyNumber,
            time: new Date().toLocaleTimeString()
        }

        callHistory.push(history)

        // Dynamic Call History Section

        const callHistoryContainer = document.getElementById("call-history-container")
        callHistoryContainer.innerHTML = ""

        for (const history of callHistory) {

            const div = document.createElement('div')

            div.innerHTML = `
    <div class="bg-[#fafafa] rounded-lg p-4 flex justify-between items-center">
                            <div>
                                <h1 class="font-inter font-semibold text-sm">${history.service}</h1>
                                <p class="text-[#5c5c5c] font-hindmadurai text-sm">${history.number}</p>
                            </div>
                            <p class="text-xs">${history.time}</p>
                        </div>
    `

            callHistoryContainer.appendChild(div)

        }


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

