import { auth } from "../../service/firebase";
import {
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
} from "firebase/auth";
import { removeCookie, setCookie } from "@/lib/cookie";
import { addCountUsers } from "@/lib/data";

// Create a provider instance
const provider = new GoogleAuthProvider();
export const handleGoogleSignIn = async () => {
  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    setCookie("user", JSON.stringify(user), { expires: 1 });
    addCountUsers(JSON.stringify(user));
    window.location.reload();
  } catch (error) {
    console.error("Error signing in:", error);
  }
};
export const handleSignOut = async () => {
  try {
    await signOut(auth);
    removeCookie("user");
    console.log("Successfully signed out");
    window.location.reload();
  } catch (error) {
    console.error("Error signing out:", error);
  }
};
