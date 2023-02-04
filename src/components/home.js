import React from "react";
import Products from './products';
import Header from './header';
import Navigation from './navigation';
import axios from "axios";
import Loading from "../img/loading.gif";

const Home = ({product, setProduct, Ary}) => {
 const[input, setInput] = React.useState("");

const Filtered = product.filter((filt) => filt.category.toUpperCase().includes(input.toUpperCase())); 

 const counts = {
   display: 'flex',
   justifyContent: 'center',
   alignItems: 'center',
   width: '20px',
   height: '20px',
   borderRadius: '10px',
   position: 'absolute',
   color: 'white',
   top: '2px',
}

let url = "https://dummyjson.com/products?limit=100"

const fetchData = async() => {
  try {
       const response = await axios(url)
        const reslt = response.data.products;
        setProduct(reslt);
      } 
      catch(error)  {
       console.log(error);
  }
}

    return (
        <section className="App">
        <header className="header">
            <Header counts= {counts} input = {input} setInput= {setInput}/>
        </header>
      <div>
      <nav className='contain'>
        <Navigation Ary= {Ary} />
      </nav>
      {product.length < 1 && <div className = "load">
      <img  src={Loading} alt="load gif" width="100px" height = "100px" />
      </div> }
      <main className="App-header">
        <div className='cards'>
        {Filtered.length < 1 && <div>
          <p>No results found for your search.</p>
        </div>}
        <Products fetchData={fetchData} pro = {Filtered} setProduct= {setProduct} />
       </div>
      </main> 
      </div>
    </section>
    )
}

export default Home;