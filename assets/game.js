
(function() {
var config = {
    apiKey: "AIzaSyCKtlmpkJNV8Y49dEHC_Ojr2FnNxD0NCBg",
    authDomain: "rock-paper-scissors-38877.firebaseapp.com",
    databaseURL: "https://rock-paper-scissors-38877.firebaseio.com",
    projectId: "rock-paper-scissors-38877",
    storageBucket: "rock-paper-scissors-38877.appspot.com",
    messagingSenderId: "944543469060"
  };
  firebase.initializeApp(config);

 

  const textEmail = document.getElementById("textEmail");
  const textPassword = document.getElementById("textPassword");
  const loginButton = document.getElementById("loginButton");
  const signUpButton = document.getElementById("signUpButton");
  const logOutButton = document.getElementById("logOutButton");

//login event
    loginButton.addEventListener('click', e => {
      const email = textEmail.value;
      const pass = textPassword.value;
      const auth = firebase.auth();

      const promise = auth.signInWithEmailAndPassword(email, pass);
      promise.catch(e => console.log(e.message));
  });

  //sign up event
  signUpButton.addEventListener('click', e => {
    const email = textEmail.value;
    const pass = textPassword.value;
    const auth = firebase.auth();

    const promise = auth.createUserWithEmailAndPassword(email, pass);
    promise.catch(e => console.log(e.message));
  });

  logOutButton.addEventListener('click', e => {
      firebase.auth().signOut();
  });

  //realtime listener
  firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser) {
          console.log(firebaseUser);
          logOutButton.classList.remove('hide');
      }
          else{
            console.log('not logged in');
            logOutButton.classList.add('hide');
          }
      
  });

  $("#rockButton").on("click", function() {
    clickCounter++;
    database.ref().set({
      clickCount: clickCounter
    });
  });
  
}());
   

