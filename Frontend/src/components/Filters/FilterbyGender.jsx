import '../../scss/App.scss';
import React from "react";
import PropTypes from 'prop-types';

function FilterByGender({ handleFilterGender }) {
    
    const handleInpuGender = (event) => {
      handleFilterGender(event.currentTarget.value);
    };
  
    return (
        <div className="col2 mt-1" >
          <label htmlFor="gender">Genero:
            <select name="gender" id="gender" onInput={handleInpuGender}>
                <option value="Todos">Todos</option>
                <option value="Hembra">Hembra</option>
                <option value="Macho">Macho</option>
            </select>
          </label>
        </div>
    );
  }

  FilterByGender.propTypes = {
    handleFilterGender: PropTypes.func,
    handleInpuGender: PropTypes.func,
  }

export default FilterByGender;