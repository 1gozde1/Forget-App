import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyA_l9dWnQOa76GEjaJ94kx78YFPz3pFx_Y",
  authDomain: "forget-app-f39d8.firebaseapp.com",
  projectId: "forget-app-f39d8",
  storageBucket: "forget-app-f39d8.appspot.com",
  messagingSenderId: "604654354085",
  appId: "1:604654354085:web:48008317772741866a974c",
  measurementId: "G-84YYYLKK25",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const analytics = getAnalytics(app);

export { auth, analytics };
export default app;
