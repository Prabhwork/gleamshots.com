import { Routes, Route } from "react-router-dom";
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useEffect, useState } from "react";
import Home from "./components/Home";
import Loader from "./components/Loader"; // Custom loader
 // Custom cursor
import Cursor from "./components/Cursor";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Loader visible for minimum 5 seconds
    const timer = setTimeout(() => {
      setLoading(false);
    }, 5000); // 5000ms = 5 seconds

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <Cursor />
      {loading ? (
        <Loader />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      )}
    </>
  );
}

export default App;
