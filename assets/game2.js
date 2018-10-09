var config = {
    apiKey: "AIzaSyCKtlmpkJNV8Y49dEHC_Ojr2FnNxD0NCBg",
    authDomain: "rock-paper-scissors-38877.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-38877.firebaseio.com",
    projectId: "rock-paper-scissors-38877",
    storageBucket: "rock-paper-scissors-38877.appspot.com",
    messagingSenderId: "944543469060"
  };
  firebase.initializeApp(config);

  var database = firebase.database();
  var firstChoice = 0;
  var secondChoice = 0;
  var attempts = 0;

  

  
  $(".rockButton").on("click", function() {
    console.log("rock")

    attempts++;
    console.log(attempts);
    database.ref().set({
        totalAttempts: attempts
      });

    if(firstChoice == 0){
       firstChoice = "r";
    console.log(firstChoice); 

    database.ref().set({
        player1Choice: firstChoice
      });
    }
    else if (secondChoice == 0){
        secondChoice = "r2";
        console.log(secondChoice);

        database.ref().set({
            player2Choice: secondChoice
          });
    }
});

    $(".paperButton").on("click", function(){
        console.log("paper")

        attempts++;
        database.ref().set({
            totalAttempts: attempts
          });

        if(firstChoice == 0){
            firstChoice = "p";
         console.log(firstChoice);

         database.ref().set({
            player1Choice: firstChoice
          });
         }
         else if (secondChoice == 0){
             secondChoice = "p2";
             console.log(secondChoice);

             database.ref().set({
                player2Choice: secondChoice
              });
         }
    });
    
    $(".scissorsButton").on("click", function(){
        console.log("scissors");

        attempts++;
        database.ref().set({
            totalAttempts: attempts
          });

        if(firstChoice == 0){
            firstChoice = "s";
         console.log(firstChoice); 

         database.ref().set({
            player1Choice: firstChoice
          });
         }
         else if (secondChoice == 0){
             secondChoice = "s2";
             console.log(secondChoice);

             database.ref().set({
                player2Choice: secondChoice
              });
         }
    });

    //$(".goButton").on("click", function(){
    $("#rpsButtons").on("click", function(){
        while (attempts == 2){
        console.log("go");
        if( firstChoice !== 0 && secondChoice !== 0){

            if (firstChoice =='r' && secondChoice=='r2' || firstChoice=='p' && secondChoice=='p2' || firstChoice=='s' && secondChoice=='s2'){
                alert("Tie game!");
                firstChoice = 0;
                secondChoice = 0;
                attempts = 0;

                database.ref().set({
                    player1Choice: firstChoice
                  });
                  database.ref().set({
                    player2Choice: secondChoice
                  });
                  database.ref().set({
                    totalAttempts: attempts
                  });

            }
            if (firstChoice=='r' && secondChoice=='p2' || firstChoice=='p' && secondChoice=='s2' || firstChoice=='s' && secondChoice=='r2'){
                alert("Player two wins!")
                firstChoice = 0;
                secondChoice = 0;
                attempts = 0;

                database.ref().set({
                    player1Choice: firstChoice
                  });
                  database.ref().set({
                    player2Choice: secondChoice
                  });
                  database.ref().set({
                    totalAttempts: attempts
                  });
            }
            if (firstChoice=='r' && secondChoice=='s2' || firstChoice=='p' && secondChoice=='r2' || firstChoice=='s' && secondChoice=='p2'){
                alert("Player one wins!")
                firstChoice = 0;
                secondChoice = 0;
                attempts = 0;

                database.ref().set({
                    player1Choice: firstChoice
                  });
                  database.ref().set({
                    player2Choice: secondChoice
                  });
                  database.ref().set({
                    totalAttempts: attempts
                  });
            }
    }
    }
});

//Sync two players with each other
//Update players' win/loss counters
