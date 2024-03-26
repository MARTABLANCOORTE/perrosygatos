import '../../scss/App.scss';
import React from "react";
import PropTypes from 'prop-types';
import FilterbySize from './FilterBySize';
import FilterbyAge from './FilterbyAge';
import FilterbyGender from './FilterbyGender';
import FilterbyProvincia from './FilterbyProvincia';
import FilterbyRaza from './FilterbyRaza';
import FilterbySpecie from './FilterbySpecie';
import bin from '../../images/bin.png';


function Filters({handleFilterProvincia, handleFilterSpecie, handleFilterGender, handleFilterAge, handleFilterSize, handleFilterRaza, handleResetFilters}) {
    return (
      <form>
        <h2>Filtros:</h2>
        <fieldset className="filters">
            <FilterbyProvincia handleFilterProvincia={handleFilterProvincia}/>
            <FilterbySpecie handleFilterSpecie={handleFilterSpecie}/>
            <FilterbyGender handleFilterGender={handleFilterGender}/>
            <FilterbyAge handleFilterAge={handleFilterAge}/>
            <FilterbySize handleFilterSize={handleFilterSize}/>
            <FilterbyRaza handleFilterRaza={handleFilterRaza}/>
            {/* <button className="Button" onClick={handleResetFilters}>Reset
              <img className="bin"src={bin} alt="Reset bin" style={{ width: '20px', height: '20px' }} />
            </button> */}
        </fieldset>
      </form>
    );
  }

Filters.propTypes = {
  handleFilterProvincia: PropTypes.func,
  handleFilterSpecie: PropTypes.func,
  handleFilterGender: PropTypes.func,
  handleFilterAge: PropTypes.func,
  handleFilterSize: PropTypes.func,
  handleFilterRaza: PropTypes.func,
}

export default Filters;