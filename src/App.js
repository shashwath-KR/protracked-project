import React from 'react';
import './App.css';
import {Routes, Route} from 'react-router-dom';
import Home from './components/home';
import Mobile from './Navigate/mobile';
import Laptop from './Navigate/laptop';
import Skincare from './Navigate/skincare';
import Grocery from './Navigate/grocery';
import Fragrance from './Navigate/fragrance';
import { Ary } from "./components/data";
import Womensshoes from './Navigate/womensshoes';
import Tshirts from './Navigate/tshirts';
import Furniture from './Navigate/furniture';
import Tops from './Navigate/womensfashion';
import Decoration from './Navigate/decoration';
import Womenwatches from './Navigate/womenswatches';
import Womensbags from './Navigate/womensbags';
import Menwatches from './Navigate/menswatches';
import Mensshoes from './Navigate/mensshoes';
import Jewellery from './Navigate/jewellery';
import Automotive from './Navigate/automotive';
import Sunglass from './Navigate/sunglass';
import Motorcycle from './Navigate/motorcycle';
import Lighting from './Navigate/lighting';

const App = () => {
const[product, setProduct] = React.useState([]);

  return (
     <Routes>
   <Route path='/protracked-project' element = {<Home Ary= {Ary} product= {product} setProduct= {setProduct}/>} />
   <Route path= '/smartphones' element = {<Mobile />} />
   <Route path= '/laptops' element = {<Laptop />} />
   <Route path= '/skincare' element = {<Skincare />} />
   <Route path= '/grocery' element = {<Grocery />} />
   <Route path= '/fragrance' element = {<Fragrance />} />
   <Route path= '/furniture' element = {<Furniture />} />
   <Route path= '/decoration' element = {<Decoration />} />
   <Route path= '/tshirts' element = {<Tshirts />} />
   <Route path= '/womens-shoes' element = {<Womensshoes />} />
   <Route path= '/womens-watches' element = {<Womenwatches />} />
   <Route path= '/womens-bags' element = {<Womensbags />} />
   <Route path= '/mens-watches' element = {<Menwatches />} />
   <Route path= '/womens-dresses' element = {<Tops />} />
   <Route path= '/mens-shoes' element = {<Mensshoes />} />
   <Route path= '/jewellery' element = {<Jewellery />} />
   <Route path= '/automotive' element = {<Automotive />} />
   <Route path= '/sunglass' element = {<Sunglass />} />
   <Route path= '/motorcycle' element = {<Motorcycle />} />
   <Route path= '/lighting' element = {<Lighting />} />
     </Routes>
  );
}

export default App;
