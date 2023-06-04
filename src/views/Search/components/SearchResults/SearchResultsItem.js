export default function SearchResultsItem( {name,email,phone}){
    return(
        <div className="list-data-item"v>
         <p >{name}</p>
         <p>{email}</p>
         <p>{phone}</p>
        </div>
    );
}