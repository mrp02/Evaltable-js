let totalBAL= $5000000
balance.innerHTML= totalBal+".00"



function playMusic() {
    var song = new Audio("Audios/Fail-2.mp3")
    song.play()
}



function amount() {
    playMusic()
    if (bags.value == '' && childName.value == '' && transport.value == '' && date.value == '' && cloth.value == '' && food.value == '' && otherExpenses.value == '' && medicare.value=='') {
    err.style.display = "block"
} else{
    var confirmation = confirm ("Are sure you want to proceed")  
    if (confirmation==true) {
        err.style.display ="none"
        intro.innerHTML= "Welcome  "  + document.getElementById("childName").value
        intro.style.color= "white"
        note.innerHTML= "Becarefull not to spend more than budget and trynna consider your parent thats working for money, Incase you dont know we are still in Tinubu regim"
        note.style.color = "black"

        var sum = Number(bags.value) + Number(transport.value)+Number(cloth.value) +Number(food.value)+ Number(otherExpenses.value) + Number(medicare.value)
        if (sum >=0 && sum <10000){
            result.innerHTML="The total amount you used on " + document.getElementById("date").value+ "  $"+ sum
            
            let minBAL= Number(totalBAL-sum)
        balance.innerHTML=minBAL+".00"

            result.style.color="green"
        }else if (sum>=10001 && sum <1000000000000000){
            result.innerHTML="You have ask for more than what you suppose to"+"$"+sum
            result.style.color="yellow"
        }
        else if (sum >-500 && sum <0) {
            alert('put the correct amount')
        }

        document.getElementById("ChildName").value=""
        document.getElementById("bags").value=""
        document.getElementById("date").value=""
        document.getElementById("transport").value=""
        document.getElementById("food").value=""
        document.getElementById("otherExpenses").value=""
        document.getElementById("medicares").value=""
        
    }else {
        alert ("check again")
    }
  
 }

}