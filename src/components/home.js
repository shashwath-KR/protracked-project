import React from "react";
import Products from './products';
import Header from './header';
import Loading from './loading';
import Navigation from './navigation';

const Home = ({product, setProduct, Ary}) => {
 const[input, setInput] = React.useState("");
 const[load, setLoad] = React.useState(false);
const[count, setCount] = React.useState(null);

const Filtered = product.filter((filt) => filt.category.toUpperCase().includes(input.toUpperCase())); 

if(load) {
  return (
    <div className='load'>
       <Loading />
    </div>
  )
}


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
        <Products setLoad={setLoad} Carting = {Carting} pro = {Filtered} setProduct= {setProduct} />
       </div>
      </main>
      </div>
    </div>
    )
}

export default Home;