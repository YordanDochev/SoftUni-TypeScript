import { initializeApp } from "firebase/app";
import { getFirestore, doc, setDoc } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from "firebase/storage";

import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "ee-calculator-32d51.firebaseapp.com",
  projectId: "ee-calculator-32d51",
  storageBucket: "ee-calculator-32d51.appspot.com",
  messagingSenderId: "99647338630",
  appId: "1:99647338630:web:c6984739083513d8293907",
  measurementId: "G-HWFDDT0VHB",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

const firebaseTable = {
  add: (table, tableId) => {
    const tableRef = doc(db, "tables", tableId);
    setDoc(tableRef, table);
  },
};

const firebaseAuth = {
  register: (email, password) =>
    createUserWithEmailAndPassword(auth, email, password),
  login: (email, password) => signInWithEmailAndPassword(auth, email, password),
  logout: () => signOut(auth),
  onAuthStateChanged: (callback) => onAuthStateChanged(auth, callback),
  currentUser: () => auth.currentUser,
};

const storage = getStorage(app);
// const imageStorageRef = ref(storage, "images");
const spaceRef = ref(storage, "images/space.jpg");

const imageFile = {
  upload: () => {
    uploadBytes(spaceRef, file).then((snapshot) => {
      console.log("Uploaded a blob or file!");
    });
  },
  getUrl: async () => {
    const result = await getDownloadURL(spaceRef)
      .then((url) => {
        console.log(url);
        return url;
      })
      .catch((error) => {
        // A full list of error codes is available at
        // https://firebase.google.com/docs/storage/web/handle-errors
        switch (error.code) {
          case "storage/object-not-found":
            // File doesn't exist
            console.log("File doesn't exist");
            break;
          case "storage/unauthorized":
            // User doesn't have permission to access the object
            console.log("User doesn't have permission to access the object");
            break;
          case "storage/canceled":
            // User canceled the upload
            console.log("User canceled the upload");
            break;

          case "storage/unknown":
            // Unknown error occurred, inspect the server response
            console.log("Unknown error occurred, inspect the server response");
            break;

          default:
            console.log("Unknown error occurred, inspect the server response");
            break;
        }
      });
    return result;
  },
};

export { firebaseAuth, firebaseTable, db, imageFile, spaceRef };
