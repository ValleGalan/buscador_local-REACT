import SearchResultsItem from "./SearchResultsItem";
import "./style.css"
export default function SearcResults({results, isSearching}) {
    return(
        <div className="list-data">
            <h3>Listado de resultados</h3>
            {results?.length || isSearching && <p>No hay resultados</p>}
            {results?.map( (value)=>{
                return(
                   <SearchResultsItem 
                   key={value.id}
                   {...value}
                   >
                   </SearchResultsItem>
                );
            })}
        </div>
    );
}

/*
 <SearchResultsItem  key={value.id}
    name={value.name}
    email={value.email}
     phone={value.phone}
 >
 </SearchResultsItem>
*/