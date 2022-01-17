var amo = document.getElementById("amount");
var pref = document.getElementById("preffered");
var div = document.getElementById("atm")

function submit (){
    var input = amo.value;
    var prefCurrency = pref.value;
    notes = [500, 100, 50, 20, 10, 5, 1];
var index = notes.indexOf(prefCurrency);
if (index > -1) {
    notes.splice(index, 1);
}

var distributedNotes = Math.floor(input / prefCurrency);
if (distributedNotes > 200) {
    distributedNotes = 200
}
var distributedAmount = distributedNotes * prefCurrency
var p = document.createElement("p")
p.innerText = `${prefCurrency}: ${distributedNotes}`
div.appendChild(p)

input = input - distributedAmount;


for (let i = 0; i < notes.length; i++) {
    if (input == 0) {
        break;
    }
    distributedNotes = Math.floor(input / notes[i]);
    if(distributedNotes == 0){
        continue;
    }
    var otherP = document.createElement("p")
    otherP.innerText = `${notes[i]}: ${distributedNotes}`
div.appendChild(otherP)
    console.log(`${notes[i]}: ${distributedNotes}`)
    distributedAmount = distributedNotes * notes[i]
    input = input - distributedAmount;
   
}
}



