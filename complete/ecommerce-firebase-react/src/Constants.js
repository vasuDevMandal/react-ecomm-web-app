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

const itemCategories = ["electronics", "jewelery"];

const logoUrl =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFN6By6MTnRck1md5Ib6lGCRlhqhu5X8eWMA&usqp=CAU";

export {
  firebaseConfig,
  userJson,
  cartItemJson,
  userCollection,
  logoUrl,
  itemCategories,
};
