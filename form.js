// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAxEeqTzZhwGd1dw1TQtCjWsZwdTCpKSno",
    authDomain: "flutter5daybootcamp.firebaseapp.com",
    databaseURL: "https://flutter5daybootcamp.firebaseio.com",
    projectId: "flutter5daybootcamp",
    storageBucket: "flutter5daybootcamp.appspot.com",
    messagingSenderId: "930327161128",
    appId: "1:930327161128:web:155b68b63d374f10c0081d",
    measurementId: "G-1R9MMTNBFE"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();


function signUp() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.createUserWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed Up")
}

function signIn() {

    var email = document.getElementById("email");
    var password = document.getElementById("password");

    const promise = auth.signInWithEmailAndPassword(email.value, password.value);
    promise.catch(e => alert(e.message));

    alert("Signed In" + email.value);

    var user = firebase.auth().currentUser;
    var name, email, photoUrl, uid, emailVerified;

    //is signed in
    name = user.displayName;
    email = user.email;
    photoUrl = user.photoURL;
    emailVerified = user.emailVerified;
    uid = user.uid;  // The user's ID, unique to the Firebase project. Do NOT use
    // this value to authenticate with your backend server, if
    // you have one. Use User.getToken() instead.
    console.log("you are signed in" + name
        + " your email id is:" + email + " your uid is:" + uid);
}

function signOut() {
    auth.signOut();
    alert("Signed Out");
}

auth.onAuthStateChanged(function (user) {


    if (user) {
    } else {
        //no user is signed in
    }

});


