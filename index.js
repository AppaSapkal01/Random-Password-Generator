const characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?",
"/"];

let firstPassEl = document.getElementById("first-pass");
let secondPassEl = document.getElementById("second-pass")
function generatePass() {
    for (let i = 0; i < 10; i++) {
    let random1 = Math.floor(Math.random() * characters.length)
    firstPassEl.textContent += characters[random1];
    
    
    let random2 = Math.floor(Math.random() * characters.length)
    secondPassEl.textContent += characters[random2];
    
}

};






  