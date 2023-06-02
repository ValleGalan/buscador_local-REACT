import "./style.css"
export default function SearcResults({results, isSearching}) {
    return(
        <div className="list-data">
            <h3>Listado de resultados</h3>
            {results?.length && isSearching && <p>No hay resultados</p>}
            {results?.map( (value)=>{
                return(
                    <div key={value.id}>
                        <p className="list-data-item">{value.name}</p>
                        <p className="list-data-item">{value.email}</p>
                        <p className="list-data-item">{value.phone}</p>
                    </div>
                );
            })}
        </div>
    );
}