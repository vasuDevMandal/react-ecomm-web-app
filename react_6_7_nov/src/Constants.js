const firebaseConfig = {
  apiKey: "AIzaSyC19ug2_YVcSIx2AOFnh_aPS6a52i51S8k",
  authDomain: "react-ecomm-b67a7.firebaseapp.com",
  projectId: "react-ecomm-b67a7",
  storageBucket: "react-ecomm-b67a7.appspot.com",
  messagingSenderId: "13409015211",
  appId: "1:13409015211:web:87b01938c24bb8a971eeee",
  measurementId: "G-W2040K0TMM",
};

const userJson = {
  cartTotal: 0,
  userEmail: "",
  userId: "",
  cartItems: [],
};

const cartItemJson = {
  itemcategory: "",
  itemDescription: "",
  itemId: "",
  itemPrice: 0,
  itemRating: 0,
  itemImage: "",
  itemTitle: "",
  itemCount: 1,
};

const userCollection = "users";

export { firebaseConfig, userJson, cartItemJson, userCollection };
