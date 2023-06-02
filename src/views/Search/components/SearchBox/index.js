import React, { useState } from 'react';
import "./style.css";

export default function SearchBox( {onSearch, onClose} ){
    const [searchText, setSearchText]= useState("");
    const handleSearchClick=() =>{
        onClose();
        setSearchText(""); //limpie el texto
    }
return(

    <div className="search-box" >
        <h2 className="search-box-title">Buscador de personal</h2>
        <div className="search-box-buttons">
            <label> 
                <input 
                value={searchText} 
                onChange={ (  {target:{value}}  )=>setSearchText(value) }
                className="search-box-input"
                /> 
            </label>
            <button onClick={ ()=> onSearch(searchText) }>Buscar</button>
            <button onClick={ handleSearchClick }>Cerrar</button>
        </div>

    </div>

);
}