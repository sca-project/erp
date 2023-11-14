import { initializeApp } from "firebase/app";

import {
  initializeFirestore,
  CACHE_SIZE_UNLIMITED,
  getDocs,
  collection,
  doc,
  setDoc,
  updateDoc,
  deleteDoc,
  persistentLocalCache,
  persistentSingleTabManager,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDZbBBdmLEcRDSnhTA4VLF3CJsqE9eBbmU",
  authDomain: "scaniger-52f91.firebaseapp.com",
  projectId: "scaniger-52f91",
  storageBucket: "scaniger-52f91.appspot.com",
  messagingSenderId: "278423236518",
  appId: "1:278423236518:web:fe2dbd4e93e1f31bb76967",
  measurementId: "G-1QYDZ7TSJJ",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);
// const db = getFirestore(app);
const db = initializeFirestore(app, {
  localCache: persistentLocalCache(
    /*settings*/ { tabManager: persistentSingleTabManager() },
    {
      cacheSizeBytes: CACHE_SIZE_UNLIMITED,
    }
  ),
});

// ----------
// Import the functions you need from the SDKs you need

// Add a new document in collection "cities"

export async function addCities() {
  await setDoc(doc(db, "cities", "Mamane"), {
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
  const washingtonRef = doc(db, "cities", "bA");

  // Set the "capital" field of the city 'DC'
  await updateDoc(washingtonRef, {
    capital: false,
  });
}
export async function deleteCities() {
  await deleteDoc(doc(db, "cities", "A"));
}

// Get a list of cities from your database
export async function getCities() {
  const citiesCol = collection(db, "cities");
  const citySnapshot = await getDocs(citiesCol, {
    includeMetadataChanges: true,
  });
  // ----
  citySnapshot.docChanges().forEach((change) => {
    if (change.type === "added") {
      console.log("New city: ", change.doc.data());
    }
  });

  // ----
  const cityList = citySnapshot.docs.map((doc) => {
    return doc.data();
  });
  const source = citySnapshot.metadata.fromCache ? "local cache" : "server";
  console.log("Data came from " + source);
  // console.log(cityList);
  return cityList;
}

export async function addDocument(collection, doc) {
  const docRef = doc(db, collection, doc.uuid);
  await setDoc(docRef, doc);
}

export async function updateDocument(document, doc) {
  const docRef = doc(db, document, doc.uuid);

  await updateDoc(docRef, doc);
}

export async function getDocuments(collection) {
  const documentCol = collection(db, collection);
  const documentSnapshot = await getDocs(documentCol);
  const documentList = documentSnapshot.docs.map((doc) => {
    return doc.data();
  });

  return documentList;
}
