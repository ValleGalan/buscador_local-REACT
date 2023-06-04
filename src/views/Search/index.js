import { useState } from 'react';
import SearchBox from "./components/SearchBox";
import "./style.css";
import data from "../../data/users.json"
import SearcResults from './components/SearchResults';

export default function Search(){

    const [isAltTop,setIsAltTop] = useState(false);
    const [results,setResults] = useState([]);

    const handleCloseSearch=()=>{
        setIsAltTop(!isAltTop);
        setResults([]);
    };
    const handleSearchClick=(searchText)=>{
       setIsAltTop(true);
        if(data?.length){ //si existe
            const searchTextMinuscula = searchText.toLowerCase();
            const filterData= data.filter( (value)=>(
                value.name.toLowerCase().includes(searchTextMinuscula) ||
                value.email.toLowerCase().includes(searchTextMinuscula) ||
                value.phone.toLowerCase().includes(searchTextMinuscula) ||
                value.username.toLowerCase().includes(searchTextMinuscula)
            ));
            setResults(filterData);
        }
    };
   // console.log(results);
    /*
    const handleSearchClick= ()=>{    setIsAltTop(!isAltTop);  };
    const handleSearchCloseClick = () =>{  setIsAltTop(!isAltTop); };
    */

    return(
        <div className={ `search ${isAltTop? "search--top": "search--center"} ` }>
        <SearchBox
         onSearch={handleSearchClick} 
         onClose={handleCloseSearch}
         isSearching={isAltTop}
         ></SearchBox>
         <di className="box-list">
         <SearcResults results={results} isSearching={isAltTop}></SearcResults>  

         </di>
        </div>
    );
}