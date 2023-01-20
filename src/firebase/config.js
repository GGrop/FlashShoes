import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: 'AIzaSyARd2zIQCv2LvyiRKDRgzNlweZ77Poefmc',
  authDomain: 'proyecto-react-coder-94357.firebaseapp.com',
  projectId: 'proyecto-react-coder-94357',
  storageBucket: 'proyecto-react-coder-94357.appspot.com',
  messagingSenderId: '739608076816',
  appId: '1:739608076816:web:f0392a6779d2e3f72de095',
};

const app = initializeApp(firebaseConfig);

const getFireStoreApp = () => app;

export default getFireStoreApp;
