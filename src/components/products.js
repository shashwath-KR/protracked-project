import React, {useEffect} from 'react';
import axios from 'axios';
import './products.css';
import {FaStarHalfAlt} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../redux/action';


const Products = ({setProduct, pro, setLoad, fetchData}) => {

  const{AddProducts, RemoveProducts} = cartSlice.actions;
  const Dispatch = useDispatch();
  const{myProductIds} = useSelector(state => state.mycart)

  useEffect(() => {
   fetchData();
  }, [])

    return (
          pro.map((res) => {
           const{title, description, price, discountPercentage, rating,
           thumbnail} = res;
           return (
             <div className='card' key={res.id}>
             <img className='imgs' src={thumbnail} alt='product' width='370px' height='290px' />
               <h3 className='title'>{title}</h3>
               <p className='discrp'>{description}</p>
               <div className='pricing'>
                 <h4>From ₹{price}</h4>
               <h5>{discountPercentage}<span>%off</span></h5>
               </div>
         <h5 className='rating'><FaStarHalfAlt style={{color:'orange'}} />{rating}</h5>
   {!myProductIds.includes(res.id) && <button onClick={() => Dispatch(AddProducts(res.id))} 
   className='cart'><BsCart4 />Add to cart</button> }

    { myProductIds.includes(res.id) && <button onClick={() => Dispatch(RemoveProducts(res.id))} 
    className='cart'><BsCart4 />Remove from cart</button> }
    </div>
           )
         })
    )
}

export default Products;