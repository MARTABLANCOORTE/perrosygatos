import "../../scss/App.scss";
import PropTypes from "prop-types";

function FilterBySpecie({ handleFilterSpecie }) {
  const handleInputSpecie = (event) => {
    handleFilterSpecie(event.currentTarget.value);
  };

  return (
    <div className="col2 mt-1">
      <fieldset className="filters__child">
        Status:
        <label htmlFor="specie">
          <select
            name="specie"
            id="specie"
            onInput={handleInputSpecie}
          >
            <option value="Todos">Todos</option>
            <option value="Perro">Perro</option>
            <option value="Gato">Gato</option>
          </select>
        </label>
      </fieldset>
    </div>
  );
}

FilterBySpecie.propTypes = {
  handleFilterRaza: PropTypes.func,
  handleInputRaza: PropTypes.func,
};

export default FilterBySpecie;