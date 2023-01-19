import React from "react";
import Products from './products';
import Header from './header';
import Navigation from './navigation';
import axios from "axios";

const Home = ({product, setProduct, Ary}) => {
 const[input, setInput] = React.useState("");
const[count, setCount] = React.useState(null);
const[backg, setBackg] = React.useState(null);

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
   backgroundColor: backg
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

  const Carting = () => {
      setCount(count + 1);
     setBackg('blue')
  }

    return (
        <section className="App">
        <header className="header">
            <Header count= {count} counts= {counts} input = {input} setInput= {setInput}/>
        </header>
      <div>
      <nav className='contain'>
        <Navigation Ary= {Ary} />
      </nav>
      
      <main className="App-header">
        <div className='cards'>
        <Products count = {count} fetchData={fetchData} Carting = {Carting} pro = {Filtered} setProduct= {setProduct} />
       </div>
      </main>
      </div>
    </section>
    )
}

export default Home;