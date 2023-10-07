// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// Follow this pattern to import other Firebase services
// import { } from 'firebase/<service>';
import { getAnalytics } from "firebase/analytics";
import {
  getFirestore,
  getDocs,
  collection,
  doc,
  setDoc,
  addDoc,
  updateDoc,
} from "firebase/firestore/lite";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDBgtc10y5QafpfGwDQ_oT8IabMEzBd_iQ",
  authDomain: "saha-31c87.firebaseapp.com",
  projectId: "saha-31c87",
  storageBucket: "saha-31c87.appspot.com",
  messagingSenderId: "534566682858",
  appId: "1:534566682858:web:503228ffec5816ac52d793",
  measurementId: "G-WB3Q51SF5F",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app);

// Add a new document in collection "cities"

export async function addCities() {
  await setDoc(doc(db, "cities", "LA"), {
    name: "Los Angeles",
    state: "CA",
    country: "USA",
    tous: { name: "Los Angeles", state: "CA", country: "USA" },
    tab: [1, 2, 3],
  });

  //       const cityRef = doc(db, 'cities', 'BJ');
  // setDoc(cityRef, { capital: true }, { merge: true });

  // Add a new document with a generated id.
  // const docRef = await addDoc(collection(db, "cities"), {
  //   name: "Tokyo",
  //   country: "Japan"
  // });
  // console.log("Document written with ID: ", docRef.id);
}

// update doc of cities from your database
export async function updatetCities() {
  const washingtonRef = doc(db, "cities", "DC");

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    capital: true,
  });
}

// Get a list of cities from your database
export async function getCities() {
  let data = [];
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol);
  const cityList = citySnapshot.docs.map((doc) => {
  
    return doc.data();
  });
  // console.log(cityList);
  return cityList;
}
