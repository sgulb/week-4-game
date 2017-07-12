//Variables
var goal = Math.floor(Math.random() * (102) + 19);
    console.log(goal);
var crystal1 = Math.floor(Math.random() * (12) + 1);
    console.log(crystal1);
var crystal2 = Math.floor(Math.random() * (12) + 1);
    console.log(crystal2);
var crystal3 = Math.floor(Math.random() * (12) + 1);
    console.log(crystal3);
var crystal4 = Math.floor(Math.random() * (12) + 1);
    console.log(crystal4);
var wins = 0;
var losses = 0;
var playerScore = 0;
    
//Populate goal number to goal div
$("#numberGoal").html("<p>Goal: " + goal + "</p>");   

//Set on click function for crystal1 to add it's value to playerScore div
$("#crystal1").on("click", function(event) {
    playerScore += crystal1;
    $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
    if (playerScore === goal) {
        wins++;
        alert("You Won!");
        $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
        goal = Math.floor(Math.random() * (102) + 19);
        $("#numberGoal").html("<p>Goal: " + goal + "</p>");
        playerScore = 0;
        $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
        crystal1 = Math.floor(Math.random() * (12) + 1);
        crystal2 = Math.floor(Math.random() * (12) + 1);
        crystal3 = Math.floor(Math.random() * (12) + 1);
        crystal4 = Math.floor(Math.random() * (12) + 1);
    }
        else if (playerScore > goal) {
            losses++;
            alert("You Lost!");
            $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
            goal = Math.floor(Math.random() * (102) + 19);
            $("#numberGoal").html("<p>Goal: " + goal + "</p>");
            playerScore = 0;
            $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
            crystal1 = Math.floor(Math.random() * (12) + 1);
            crystal2 = Math.floor(Math.random() * (12) + 1);
            crystal3 = Math.floor(Math.random() * (12) + 1);
            crystal4 = Math.floor(Math.random() * (12) + 1);
        }
});

//Set on click function for crystal2 to add it's value to playerScore div
$("#crystal2").on("click", function(event) {
    playerScore += crystal2;
    $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
    if (playerScore === goal) {
        wins++;
        alert("You Won!");
        $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
        goal = Math.floor(Math.random() * (102) + 19);
        $("#numberGoal").html("<p>Goal: " + goal + "</p>");
        playerScore = 0;
        $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
        crystal1 = Math.floor(Math.random() * (12) + 1);
        crystal2 = Math.floor(Math.random() * (12) + 1);
        crystal3 = Math.floor(Math.random() * (12) + 1);
        crystal4 = Math.floor(Math.random() * (12) + 1);
    }
        else if (playerScore > goal) {
            losses++;
            alert("You Lost!");
            $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
            goal = Math.floor(Math.random() * (102) + 19);
            $("#numberGoal").html("<p>Goal: " + goal + "</p>");
            playerScore = 0;
            $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
            crystal1 = Math.floor(Math.random() * (12) + 1);
            crystal2 = Math.floor(Math.random() * (12) + 1);
            crystal3 = Math.floor(Math.random() * (12) + 1);
            crystal4 = Math.floor(Math.random() * (12) + 1);
        }
});

//Set on click function for crystal3 to add it's value to playerScore div
$("#crystal3").on("click", function(event) {
    playerScore += crystal3;
    $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
    if (playerScore === goal) {
        wins++;
        alert("You Won!");
        $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
        goal = Math.floor(Math.random() * (102) + 19);
        $("#numberGoal").html("<p>Goal: " + goal + "</p>");
        playerScore = 0;
        $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
        crystal1 = Math.floor(Math.random() * (12) + 1);
        crystal2 = Math.floor(Math.random() * (12) + 1);
        crystal3 = Math.floor(Math.random() * (12) + 1);
        crystal4 = Math.floor(Math.random() * (12) + 1);
    }
        else if (playerScore > goal) {
            losses++;
            alert("You Lost!");
            $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
            goal = Math.floor(Math.random() * (102) + 19);
            $("#numberGoal").html("<p>Goal: " + goal + "</p>");
            playerScore = 0;
            $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
            crystal1 = Math.floor(Math.random() * (12) + 1);
            crystal2 = Math.floor(Math.random() * (12) + 1);
            crystal3 = Math.floor(Math.random() * (12) + 1);
            crystal4 = Math.floor(Math.random() * (12) + 1);
        }
});

//Set on click function for crystal4 to add it's value to playerScore div
$("#crystal4").on("click", function(event) {
    playerScore += crystal4;
    $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
    if (playerScore === goal) {
        wins++;
        alert("You Won!");
        $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
        goal = Math.floor(Math.random() * (102) + 19);
        $("#numberGoal").html("<p>Goal: " + goal + "</p>");
        playerScore = 0;
        $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
        crystal1 = Math.floor(Math.random() * (12) + 1);
        crystal2 = Math.floor(Math.random() * (12) + 1);
        crystal3 = Math.floor(Math.random() * (12) + 1);
        crystal4 = Math.floor(Math.random() * (12) + 1);
    }
        else if (playerScore > goal) {
            losses++;
            alert("You Lost!");
            $("#scoreboard").html("<p>Wins: " + wins + "</p>" + "<p>Losses: " + losses + "</p>");
            goal = Math.floor(Math.random() * (102) + 19);
            $("#numberGoal").html("<p>Goal: " + goal + "</p>");
            playerScore = 0;
            $("#playerScore").html('<p class="text-center">' + playerScore + '</p>');
            crystal1 = Math.floor(Math.random() * (12) + 1);
            crystal2 = Math.floor(Math.random() * (12) + 1);
            crystal3 = Math.floor(Math.random() * (12) + 1);
            crystal4 = Math.floor(Math.random() * (12) + 1);
        }
});
