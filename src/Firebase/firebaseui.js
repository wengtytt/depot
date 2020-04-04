import { firebaseApp } from "./firebase"
const firebaseui = require('firebaseui')

const firebaseUIConfig = {
    callbacks: {
        signInSuccessWithAuthResult: function (authResult, redirectUrl) {
            // User successfully signed in.
            // Return type determines whether we continue the redirect automatically
            // or whether we leave that to developer to handle.
            return true
        },
        uiShown: function () {
            // The widget is rendered.
            // Hide the loader.
            // document.getElementById('loader').style.display = 'none'
        }
    },
    // Will use popup for IDP Providers sign-in flow instead of the default, redirect.
    signInFlow: 'popup',
    //signInSuccessUrl: '/',
    signInOptions: [
        // Leave the lines as is for the providers you want to offer your users.
        firebaseApp.auth.GoogleAuthProvider.PROVIDER_ID,
        firebaseApp.auth.EmailAuthProvider.PROVIDER_ID,
        {
            provider: firebaseApp.auth.PhoneAuthProvider.PROVIDER_ID,
            defaultCountry: 'CA',
        }
    ],
    // Terms of service url.
    // tosUrl: '<your-tos-url>',
    // Privacy policy url.
    // privacyPolicyUrl: '<your-privacy-policy-url>'
    // To fix the Email Sign In not in popup issue
    credentialHelper: firebaseui.auth.CredentialHelper.NONE,
}

let ui = null

const initUI = (firebaseApp) => {
    // Initialize the FirebaseUI Widget using Firebase.
    if (ui === null) {
        ui = new firebaseui.auth.AuthUI(firebaseApp.auth())
    }
}

export const firebaseUI = () => {
    return ui
}

export const initFiarebaseUI = () => {
    initUI(firebaseApp)
    // The start method will wait until the DOM is loaded.
    ui.start('#firebaseui-auth-container', firebaseUIConfig)
}
