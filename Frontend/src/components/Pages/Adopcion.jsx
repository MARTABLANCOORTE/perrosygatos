import "../../scss/App.scss";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Pages/header.jsx";
import Filters from "../Filters/Filters.jsx";
import Footer from "../Pages/footer.jsx";

function Adopcion() {

  // 5. Html en el return

  return (
    <div className="page">
        <Header/>
      <main>
        <Routes>
          <Route
            path="/Adopcion"
            element={
              <div >
                <div className = "filters"> 
                  <Filters
                    handleFilterProvincia={handleFilterProvincia}
                    handleFilterSpecie={handleFilterSpecie}
                    handleFilterGender={handleFilterGender}
                    FilterbyAge handleFilterAge={handleFilterAge}
                    handleFilterSize={handleFilterSize}
                    handleFilterRaza={handleFilterRaza}
                  />
                </div>
                <div className = "List">
                  {/* <CharacterList/> */}
                </div>
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default Adopcion;