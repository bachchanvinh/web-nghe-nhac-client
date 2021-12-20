import * as authfire from "firebase/auth";//getAuth, createUserWithEmailAndPassword
import { addDataUser } from "../firestore";
import { upLoadphoto } from "../storage";

const auth = authfire.getAuth();
export const signupFunc = (email, password, username, imgfile) => {
    authfire.createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            const user = userCredential.user;
            upLoadphoto(user.uid, imgfile).then((res) => {

                addDataUser(username, res, user.uid)
            })
            // 
            // ...
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // return errorCode
        });
}
// ----------------------------------SIGN IN-----------------------------------------------------

export const signinFunc = (email, password) => {

    return authfire.signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
            // Signed in 
            const user = userCredential.user;
            // console.log(user)
            console.log("signed in")
        })
        .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(typeof errorCode === "string")
            console.log(errorMessage)

            return errorCode
        })


}
// -------------------------------GET SIGNED IN---------------------------------------------
export const getSignedIn = (callback) => {
    return new Promise((resolve, reject) => {
        authfire.onAuthStateChanged(auth, (user) => {
            callback(user)
            if (user) {
                // User is signed in, see docs for a list of available properties
                // https://firebase.google.com/docs/reference/js/firebase.User
                const uid = user.uid;
                // console.log(uid)

                resolve(uid)
            } else {
                // User is signed out
                console.log("no account-signin")
                resolve(false)
            }
        });
    })
}
// ----------------------------------SIGN OUT---------------------------------------------
export const signOutfunc = () => {
    authfire.signOut(auth).then(() => {
        console.log("Sign-out successful")

        // Sign-out successful.
    }).catch((error) => {
        console.log("Sign-out error:", error)
        // An error happened.
    });

}
