'use strict';

/**
 * ICS3UC Final Project S1 2023-24
 * 
 * Author: Rylan Traill
 * Description: In this game there is two modes. One where both players have the same word where they will fight to get the word before the other without giving too many hints to the other one. The second mode will be where they each have a different word and the player who guesses they're word in less guesses wins.
 * 
 */

let guessCounter = 1;
$("row" + guessCounter + "player1").addEventListener("animationend", removeShake)
$("playagain").addEventListener("click", reloadPage)
$("playagain1").addEventListener("click", reloadPage)
document.body.addEventListener("keydown", inputChecker);
let user1 = "";
let turn = 1;
let title1 = getTitle(6);
title1 = title1.toLowerCase()
console.log(title1);
let playerguess1 = "";
let player1 = "";
let letter = ""
let word1 = [];
let word1string = ""
let letterCounter = 1;


function winpopupunhide() {
  $("winPopup").hidden = false
}

function losepopupunhide() {
  $("losePopup").hidden = false
}

function reloadPage() {
  window.location.reload()
}

function removeShake () {
  $("row1player1").classList.remove("apply-shake")
  $("row2player1").classList.remove("apply-shake")
  $("row3player1").classList.remove("apply-shake")
  $("row4player1").classList.remove("apply-shake")
  $("row5player1").classList.remove("apply-shake")
}

function popupHide() {
  $("myLetterpopup").hidden = true
}

function $(id) {
  return document.getElementById(id);
}

function blah() {
  $("letter" + letterCounter + "player1row" + guessCounter).innerHTML = "";
}

function inputChecker(event) {
  letter = event.key;
   if (event.key == "Backspace") {
     if (letterCounter != 1) {
      letterCounter -= 1;
      word1.splice(-1)
      blah()
    }
  }
  else {
    if (event.keyCode >= 65 && event.keyCode <= 90) {
      $("letter" + letterCounter + "player1row" + guessCounter).innerHTML = letter
      letterCounter += 1;
      letter = letter.toLowerCase()
      word1.push(letter)
    }
    if (event.key == "Enter") {
      if (letterCounter == 6) {          
        console.log(word1)
        letterCounter = 1
        for (let z = 0; z <= 4; z++) {
          word1string = word1.join('')
        }
        game()
      }
      else {
        $("row" + guessCounter + "player1").classList.add("apply-shake")
        $("myLetterpopup").hidden = false
        setTimeout(popupHide, 2000)        
      }
    }
  }
}




function game() {  
  //checks if each letter is the same as any other letters in the other word
  for (let i = 0; i <= 4; i++) {
    for (let x = 0; x <= 4; x++) {
      let id = "letter" + (i+1) + "player1row" + guessCounter
      //checks if the right letter is in the right spot
      if (word1[i] == title1[x]) {
        if (x == i) {
          $(id).style.backgroundColor = "#50c878";
          i++;
        }
        else if (x != i) {
          $(id).style.backgroundColor = "#FFBF00";
        }
      }
      else if (word1[i] != title1[x]) {
        console.log(" ")
      }
    }
  }
  if (word1string == title1) {
    setTimeout(winpopupunhide, 500)
  }
  if (word1string != title1 && guessCounter == 5) {
    console.log(guessCounter, word1string)
    setTimeout(losepopupunhide, 500)
  }
  else {
    guessCounter++;
    word1 = []
    word1string = ""
  }
}

