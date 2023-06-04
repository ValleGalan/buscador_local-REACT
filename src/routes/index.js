import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

import Error404 from '../views/404';
import Search from '../views/Search';

export default function Rutas(){
    return(
      <Router>
        <Routes>
          <Route path="/" element={<Search />} > </Route>
          <Route  element={<Error404 />}>   </Route>
        </Routes>
      </Router>
    );
}