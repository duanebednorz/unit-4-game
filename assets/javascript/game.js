
    $(document).ready(function () {
    var targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
    $("#number-to-guess").text(targetNumber);

    var wins = 0;
    var losses = 0;
    var counter = 0;
    
    // Here we created code that selects a number. 
    // We'll set this number at the start of the "game".
    //var numberOptions = [10, 15, 22, 13, 1, 5];
    //var increment = numberOptions[Math.round(Math.random())];
    // }

    // var numberOptions = [10, 5, 3, 7];
    // for (var i = 0; i < numberOptions.length; i++) {
    //     var imageCrystal = 0;
    //     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
    // }
      function initializeReset() {
        counter = 0;
            $("p.counter").text(counter); 
            targetNumber = 0;
            targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19; 
            $("#number-to-guess").text(targetNumber);  
    //     counter.reset();
    //     $("p.counter").text(counter);
    //     targetNumber.reset();
    //     $("#number-to-guess").text(targetNumber);
     };

    $(".crystalImageOne, .crystalImageTwo, .crystalImageThree, .crystalImageFour").on("click", function () {
            var crystalValue = Math.floor(Math.random() * (10 - 1 + 1)) + 1;
            crystalValue = parseInt(crystalValue);
            counter += crystalValue;
            // counter += increment;
         $("p.counter").text(counter);
        if (counter === targetNumber) {
            wins++;
                   
            alert("New Game")
            initializeReset();
        } else if (counter >= targetNumber) {
            losses++;
            counter = 0;
            // $("p.counter").text(counter);
            // targetNumber = 0;
            // targetNumber = Math.floor(Math.random() * (120 - 19 + 1)) + 19;
            // $("#number-to-guess").text(targetNumber);
            alert("New Game")
            initializeReset();
        }
        var html =
            "<p>Wins: " + wins + "</p>" +
            "<p>Losses: " + losses + "</p>";
        document.querySelector("#winsLosses").innerHTML = html
    })
    // initializeReset();
});


    //reset counter
    // $(".counter").on("click", function() {

        // Call initializeReset to reset the state of our app
        // initializeReset();

    //   });


// var numberOptions = [10, 5, 3, 7];
// for (var i = 0; i < numberOptions.length; i++) {
//     var imageCrystal = $("<img>");
//     imageCrystal.attr("data-crystalvalue", numberOptions[i]);
//     $("#crystals").append(imageCrystal);
// }
// $(".crystal-image").on("click", function() {
//     var crystalValue = ($(this).attr("data-crystalvalue"));
//     crystalValue = parseInt(crystalValue);
//     counter += crystalValue;
//     alert("New score: " + counter);

//     if (counter === targetNumber) {
//       alert("You win!");
//     }    else if (counter >= targetNumber) {
//       alert("You lose!!");
//     }
// });









