import '../../scss/App.scss';
import React from "react";
import PropTypes from 'prop-types';

function FilterByAge({ handleFilterAge }) {
    
    const handleInputAge = (event) => {
      handleFilterAge(event.currentTarget.value);
    };
  
    return (
        <div className="col2 mt-1" >
          <label htmlFor="age">Edad:
            <select name="age" id="age" onInput={handleInputAge}>
                <option value="Todos">Todos</option>
                <option value="Cachorro">Cachorro</option>
                <option value="Adulto">Adulto</option>
                <option value="Senior">Senior</option>
            </select>
          </label>
        </div>
    );
  }

  FilterByAge.propTypes = {
    handleFilterAge: PropTypes.func,
  }

export default FilterByAge;