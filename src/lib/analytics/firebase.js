import { initializeApp } from 'firebase/app';
import { getAnalytics, logEvent } from 'firebase/analytics';

const firebaseConfig = {
  apiKey: "AIzaSyCIetD2sqddB9a0PyXP32BjWQEZ7fEp-Rw",
  authDomain: "menucom-ff087.firebaseapp.com",
  projectId: "menucom-ff087",
  storageBucket: "menucom-ff087.firebasestorage.app",
  messagingSenderId: "1053737382833",
  appId: "1:1053737382833:web:787bf4799cfe0063900390",
  measurementId: "G-G0RD42N6XR"
};

let analytics = null;

function init() {
  if (analytics || import.meta.env.SSR) return;
  const app = initializeApp(firebaseConfig);
  analytics = getAnalytics(app);
}

init();

export function pageview(url) {
  if (import.meta.env.SSR || !analytics) return;
  logEvent(analytics, 'page_view', { page_path: url, page_location: url });
}

export function event(action, params) {
  if (import.meta.env.SSR || !analytics) return;
  logEvent(analytics, action, params);
}
