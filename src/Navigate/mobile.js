import React, {useEffect, useState} from "react";
import axios from "axios";
import './navigate.css';
import {FaStarHalfAlt, FaAngleLeft, FaAngleRight} from 'react-icons/fa';

const Mobile = ({categ}) => {
    const[item, setItem] = useState([]);
    const[slide, setSlide] = useState(0);

    useEffect(() => {
        const getItems = async () => {
            const result = await axios.get('https://dummyjson.com/products?limit=100');

            const allItems = result.data.products;
        const filtItems = allItems.filter(lis => lis.category === categ.path)
        setItem(filtItems); 
        }  
        getItems()
    }, [])

    return ( 
      <main className="container">
      <h1 className="head">{categ.category}</h1>
        <div className="content">{
            item.map((get) => {
           const{title, description, price, discountPercentage, rating, stock
           , brand, category, images} = get;

           const onSlide = (num) => {
      if(num > images.length - 1) {
        return 0;
      }
      if(num < 0) {
        return images.length - 1;
      }
      return num;
    }

    const Clicks = (slide) => {
      setSlide(onSlide(slide))
    }

           return (
             <div key={get.id} className='box'>
             <div className="slide">
             <button onClick={() => Clicks(slide - 1)}><FaAngleLeft /></button>
             <div className="images1">
                 <img className='images'  src={images[slide]} 
                   alt= 'products' />
             </div>
                   <button onClick={() => Clicks(slide + 1)}><FaAngleRight /></button>
             </div> 
               <h3 className="title1">{title}</h3>
               <p className="discrp1">{description}</p>
               <div className="pricing1">
               <h3>Price: ₹{price}</h3>
               <h5>{discountPercentage}% discount</h5>
               </div>
               <h4 className="rating1">Rating:<FaStarHalfAlt 
               style={{color:'orange', marginLeft: '5px'}} />{rating}</h4>
               <div style={{display:'flex', justifyContent: 'center'}}>
                    <button className='cart1'>BUY</button>
               </div>
               <div className="bottom">
                   <h3>Stock: {stock} left <i style={{color:'red', marginLeft:'15px',fontWeight:'400'}}>Hurry...</i></h3>
                 <h2>Brand name: {brand}</h2>
                 <h4>Category: {category}</h4>
               </div>
               </div>
              )
            })
            }</div>
        </main>
    )
}


export default Mobile;
