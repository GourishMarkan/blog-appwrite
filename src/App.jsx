import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import authService from "./appwrite/auth";
import "./App.css";
import { login, logout } from "./store/authSlice";
import { Header, Footer } from "./components";
import { Outlet } from "react-router-dom";
function App() {
  const [loading, setLoading] = useState(true);
  const dispatch = useDispatch();
  useEffect(() => {
    authService.getCurrentUser().then((userData) => {
      userData
        ? dispatch(login({ userData }))
        : dispatch(logout)
            .catch((e) => {
              console.log("error is ::", e);
            })
            .finally(() => setLoading(false));
    });
  }, []);
  return !loading ? (
    <div className="min-h-screen flex flex-wrap content-between bg-gray-400">
      <div className="w-full block">
        <Header />
        <main>TODO: {/* outlet */}</main>
        <Footer />
      </div>
    </div>
  ) : null;
}

export default App;
