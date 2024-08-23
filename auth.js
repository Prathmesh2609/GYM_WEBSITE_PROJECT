console.log("Auth loded");
const baseUrl = "http://localhost:5500/";
var default_Profile = baseUrl + "images/avatar5.png";
var photoURL2 = baseUrl + "images/avatar5.png";

// setting a firebase
const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCoGwlbbrELEg-xnGFcdzLizzlduLsZRmY",
    authDomain: "prathmesh2-2c361.firebaseapp.com",
    databaseURL: "https://prathmesh2-2c361-default-rtdb.firebaseio.com",
    projectId: "prathmesh2-2c361",
    storageBucket: "prathmesh2-2c361.appspot.com",
    messagingSenderId: "316788141626",
    appId: "1:316788141626:web:9c92464e582db5e697cf03"
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

function logout() {
  firebase
    .auth()
    .signOut()
    .then(function () {
      console.log("Logged out sucessful.");
      toastr.success("Logged out sucessful");
    })
    .catch(function (error) {
      // An error happened.
    });
}

$(document).on("click", ".logoutEvent", function () {
  logout();
});

$(document).on("click", "#signInCustom", function () {
  var uname = $("#username").val();
  var upass = $("#password").val();
  var re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

  var checkemail = re.test(uname);

  if (checkemail) {
    $("#username").removeClass("invalid_login");
    $("#password").removeClass("invalid_login");

    firebase
      .auth()
      .signInWithEmailAndPassword(uname, upass)
      .then(() => {
        toastr.success("Logged In Success");
      })
      .catch(function (error) {
        if (error) {
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorMessage);
          $("#username").addClass("invalid_login");
          $("#password").addClass("invalid_login");
          toastr.error(errorMessage);
          // return false
        }
      });
    // afterLogin();
  } else {
    $("#username").addClass("invalid_login");
    toastr.error("Please enter valid email");
  }
});

// function afterLogin()
// {
//      firebase.auth().onAuthStateChanged(function(user) {
//       if (user) {
//         console.log("User logged in");
//         window.location.href = baseUrl+"admin"

//       } else {
//           console.log("User logged out");
//           // window.location.href = baseUrl+"login"
//          }
//     });
// }

$(document).on("click", "#googleSignIn", function () {
  if (!firebase.auth().currentUser) {
    var provider = new firebase.auth.GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/contacts.readonly");
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        // This gives you a Google Access Token. You can use it to access the Google API.
        var token = result.credential.accessToken;
        // The signed-in user info.
        var user = result.user;
        // document.getElementById('quickstart-oauthtoken').textContent = token;
        //   afterLogin()
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
        if (errorCode === "auth/account-exists-with-different-credential") {
          alert(
            "You have already signed up with a different auth provider for that email."
          );
          // If you are using multiple auth providers on your app you should handle linking
          // the user's accounts here.
        } else {
          console.error(error.message);
          toastr.error(error.message);
        }
      });
  } else {
    firebase.auth().signOut();
  }
});

// Upload Image
async function uploadImage(inpId, nextPath) {
  const ref = firebase.storage().ref("/images/" + nextPath);
  const file = document.querySelector("#" + inpId).files[0];
  const name = +new Date() + "-" + file.name;
  const metadata = {
    contentType: file.type,
  };
  const newUrl = await ref
    .child(name)
    .put(file, metadata)
    .then((snapshot) => snapshot.ref.getDownloadURL())
    .then((url) => {
      // console.log(url);
      // document.querySelector("#image").src = url;
      return url;
    })
    .catch(console.error);

  // console.log(task)
  return newUrl;
}

// Real time listner
firebase.auth().onAuthStateChanged(function (user) {
  if (user) {
    //   console.log("User logged in", user);
    // window.location.href = baseUrl+"admin"
    // userDetails = user
    defaultDetails = user

    let emailVerified = user.emailVerified
    let photoURL = user.photoURL || photoURL2;

    let userData = user;
    console.log(userData.email);

    var docRef = db.collection("admins").doc(user.email);
    docRef
      .get()
      .then((doc) => {
        if (doc.exists) {
          console.log(doc.data());

          userDetails = doc.data();
          afrerCheckUeser();
        } else {
          console.log("No such document!", user.email);
          console.log(
            defaultDetails.displayName || "User",
            photoURL || default_Profile,
            emailVerified,
            user.email
          );
          docRef
            .set({
              displayName: defaultDetails.displayName || "User",
              photoURL: photoURL || default_Profile,
              emailVerified: emailVerified || "false",
              userEmail: user.email,
            })
            .then(() => {
              toastr.success("Profile Updated");
              afrerCheckUeser();
            })
            .catch((error) => {
              console.error("Error writing document: ", error);
            });

          // afrerCheckUeser()
        }
      })
      .catch((error) => {
        console.log("Error getting document:", error);
      });
    // afrerCheckUeser()
  } else {
    console.log("User logged out");
    // window.location.href = baseUrl+"login.html"
  }
});

async function afrerCheckUeser() {
    console.log("checking status user")
}


