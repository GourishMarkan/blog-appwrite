import { useState, UseEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";

function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      userData
        ? dispatch(login())
        : dispatch(logout)
            .catch((e) => {
              console.log("error is ::", e);
            })
            .finally(() => setLoading(false));
    });
  }, [loading]);
  return (
    <>
      <h1>blog with appwrite</h1>
    </>
  );
}

export default App;
