import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase";

const handleLogin = async () => {
  try {
    const userCred = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    console.log("Logged in user:", userCred.user.email);
  } catch (error) {
    console.error(error.message);
  }
};
