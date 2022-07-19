import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import { Ary } from "./components/data";
import Home from './components/home';
import Mobile from './Navigate/mobile';

const App = () => {
const[product, setProduct] = React.useState([]);

  return (
     <Routes>
   <Route path='/protracked-project' element = {<Home Ary={Ary} product= {product} setProduct= {setProduct}/>} />
   { Ary.map((categ, index) => {
  return <Route key={index} path= {`protracked-project/${categ.path}`} element = {<Mobile categ={categ} />} />
})
   }
     </Routes>
  );
}

export default App;
