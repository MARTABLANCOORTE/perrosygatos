import "../scss/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Pages/footer.jsx";
import Header from "./Pages/header.jsx";
import Landing from "./Pages/Landing.jsx";
import Filters from "./Filters/Filters.jsx";

function App() {

  // 5. Html en el return

  return (
    <div className="page">
      <main>
        <Routes>
          <Route
            path="/" 
            element={
              <>
                <Landing/>
              </>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
