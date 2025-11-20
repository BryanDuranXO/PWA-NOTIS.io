// Importamos las versiones compat de Firebase para SW
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-app-compat.js");
importScripts("https://www.gstatic.com/firebasejs/10.12.2/firebase-messaging-compat.js");

// Configuración igual que en app.js
firebase.initializeApp({
  apiKey: "AIzaSyD_ZCzt1Bzck2GgOYvWgliGeaRciC2W7rs",
  authDomain: "pwa-10d-notis.firebaseapp.com",
  projectId: "pwa-10d-notis",
  storageBucket: "pwa-10d-notis.firebasestorage.app",
  messagingSenderId: "573442548395",
  appId: "1:573442548395:web:e781660b5f5bd8541ecdee"
});

const messaging = firebase.messaging();

// Evento cuando llega un mensaje en segundo plano
messaging.onBackgroundMessage((payload) => {
  const title = payload.notification?.title || "Notificación";
  const options = {
    body: payload.notification?.body || "",
   // icon: "/icon-192.png"
  };
  self.registration.showNotification(title, options);
});

// Manejar clics en la notificación
self.addEventListener('notificationclick', (event) => {
  event.notification.close();
  event.waitUntil(clients.openWindow('./'));
});