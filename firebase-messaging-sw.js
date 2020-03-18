// firebase-messaging-sw.js
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.11.0/firebase-messaging.js');

firebase.initializeApp({
    messagingSenderId: '562339649853'
});

const messaging = firebase.messaging();
