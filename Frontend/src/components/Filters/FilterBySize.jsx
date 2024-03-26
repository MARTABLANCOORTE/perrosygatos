import '../../scss/App.scss';
import React from "react";
import PropTypes from 'prop-types';

function FilterBySize({ handleFilterSize }) {
    
    const handleInpuSize = (event) => {
      handleFilterSize(event.currentTarget.value);
    };
  
    return (
        <div className="col2 mt-1" >
          <label htmlFor="seize">Tamaño:
            <select name="seize" id="seize" onInput={handleInpuSize}>
                <option value="Todos">Todos</option>
                <option value="Pequeño">Pequeño</option>
                <option value="Mediano">Mediano</option>
                <option value="Grande">Grande</option>
            </select>
          </label>
        </div>
    );
  }

  FilterBySize.propTypes = {
    handleInpuSize: PropTypes.func,
    handleFilterSize: PropTypes.func,
  }

export default FilterBySize;