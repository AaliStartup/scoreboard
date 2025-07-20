// Home Scoreboard

let homeScore = 0
let homeBoard = document.getElementById("home-board")

function homePlusOne(){
    homeScore += 1
    homeBoard.textContent = homeScore
}

function homePlusTwo(){
    homeScore += 2
    homeBoard.textContent = homeScore
}

function homePlusThree(){
    homeScore += 3
    homeBoard.textContent = homeScore
}


// Guest Scoreboard

let guestScore = 0
let guestBoard = document.getElementById("guest-board")

function guestPlusOne(){
    guestScore += 1
    guestBoard.textContent = guestScore
}

function guestPlusTwo(){
    guestScore += 2
    guestBoard.textContent = guestScore

}

function guestPlusThree(){
    guestScore += 3
    guestBoard.textContent = guestScore

}