// Variables
$(document).ready(function() {
    var money = 500.00;
    var images = [
        "img/0.png",
        "img/1.png",
        "img/2.png"];
    
    //on-click listener
    $("#spin_button").on("click", function() {
        
        //local variables
        var numbersArray = [];
        
        //reset
        $("#choices").empty();
        
        //get user bet
        let userBet = $("#bet").val();
        console.log("User Bet: " + userBet);
        if (isNaN(userBet) || userBet == undefined) {
            $(`#betFeedback`).html("Cannot input letters! Only numbers!");
            $(`#betFeedback`).attr("class", "bg-warning text-white"); 
            return;
        }
        if (money <= -500) {
            $(`#betFeedback`).html("Uh-oh! You've lost too much money. Game over!");
            $(`#betFeedback`).attr("class", "bg-danger text-white"); 
            return;
        }
        
        
        // Display What the wheel results are
        for (let i = 0; i < images.length; i++) {
        var number = Math.floor(Math.random() * 3);
        numbersArray.push(number);
        var stringNumber = String(number);
        $("#choices").append(` <img src="img/${stringNumber}.png"></img> `);
        }
        
        //Tell if there is any result
        if (numbersArray[0] == numbersArray[1] && numbersArray[0] == numbersArray[2] && numbersArray[0] == 0) {
            userBet = userBet*2;
            money = money+userBet;
            $(`#betFeedback`).html("Cherries! That means x2 to the bet!");
            $(`#betFeedback`).attr("class", "bg-success text-white"); 
            display();
            return;
        }
        else if (numbersArray[1] == numbersArray[2] && numbersArray[1] == numbersArray[0] && numbersArray[0] == 1) {
            userBet = userBet*5;
            money = money+userBet;
            $(`#betFeedback`).html("Oranges! That means x5 to the bet!");
            $(`#betFeedback`).attr("class", "bg-success text-white"); 
            display();
            return;
        }
        else if (numbersArray[2] == numbersArray[1] && numbersArray[2] == numbersArray[0] && numbersArray[0] == 2) {
            userBet = userBet*7;
            money = money+userBet;
            $(`#betFeedback`).html("7s! That's x7 to the bet! Congrats!");
            $(`#betFeedback`).attr("class", "bg-success text-white"); 
            display();
            return;
        }
        else {
            money = money-userBet;
            $(`#betFeedback`).html("Sorry, didn't get anything!");
            $(`#betFeedback`).attr("class", "bg-warning text-white"); 
            display();
            return;
        }
    });
    
    
    
    display();
    function display() {
        $("#user_money").html(`You have: $${money}`);
        console.log(money);
    }
});