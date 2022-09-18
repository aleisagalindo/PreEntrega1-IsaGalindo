import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons';
const SearchFilter = () => {
  return (
    <>
      <div>
        <h1 className="search-title">Search</h1>
      </div>
      <div className="container-busqueda-filtrado">
        <form className="d-flex me-5 ms-5">
          <input
            className="form-control me-2"
            type="search"
            placeholder="Buscar Producto"
            aria-label="Search"
          />
          <button
            className="btn btn-outline-success ms-4 boton-buscar"
            type="submit"
          >
            <FontAwesomeIcon icon={faMagnifyingGlass} />
          </button>
        </form>
      </div>
    </>
  );
};

export default SearchFilter;
