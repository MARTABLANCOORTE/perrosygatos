import "../../scss/App.scss";
import React from "react";
import { useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../Pages/header.jsx";
import Filters from "../Filters/Filters.jsx";
import data from "../../assets/animales.json";
import audrey from "../../images/audrey.jpg"

function Adopcion() {
  // 5. Html en el return

  return (
    <div>
      <Header />
      <div>
        <div className="filters">
          <Filters
          // handleFilterProvincia={handleFilterProvincia}
          // handleFilterSpecie={handleFilterSpecie}
          // handleFilterGender={handleFilterGender}
          // FilterbyAge handleFilterAge={handleFilterAge}
          // handleFilterSize={handleFilterSize}
          // handleFilterRaza={handleFilterRaza}
          />
        </div>
      </div>
      <div className="List">
        {
            data.map((item, index) => (
              // <li key={index}>{item.nombre}{item.imagen || audrey}</li>
              <div className="card" key={index}>
                <img className="card__img" src={audrey} alt="audrey"/>
                <div className="card__text">
                  <h4><b>{item.nombre}</b></h4>
                  <p>{item.sexo}</p>
                </div>
            </div>
            ))
        }
      </div>
    </div>
  );
}

export default Adopcion;
