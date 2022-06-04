import React from "react";
import Products from './products';
import Header from './header';
import Navigation from './navigation';

const Home = ({product, setProduct, Ary}) => {
 const[input, setInput] = React.useState("");
const[count, setCount] = React.useState(null);

const Filtered = product.filter((filt) => filt.category.toUpperCase().includes(input.toUpperCase())); 


  const Carting = () => {
     setCount(count + 1)
  }

    return (
        <div className="App"> 
      <header className='header'>
        <Header count= {count} input = {input} setInput= {setInput}/>
      </header>
      <div>
      <nav className='contain'>
        <Navigation Ary= {Ary} />
      </nav>
      <h1 className="f1">Shop by all..</h1>
      <main className="App-header">
        <div className='cards'>
        <Products Carting = {Carting} pro = {Filtered} setProduct= {setProduct} />
       </div>
      </main>
      </div>
    </div>
    )
}

export default Home;