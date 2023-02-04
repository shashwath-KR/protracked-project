import React from 'react';
import {FaStarHalfAlt} from 'react-icons/fa';
import {BsCart4} from 'react-icons/bs';
import { useDispatch, useSelector } from 'react-redux';
import cartSlice from '../redux/action';
import "./cart.css";

const Cart = ({product}) => {
     
    const{RemoveProducts, ClearAll} = cartSlice.actions;
    const Dispatch = useDispatch();
    const{myProductIds} = useSelector(state => state.mycart);

    const cartData = product.filter(res => myProductIds.includes(res.id));


    return (
        <div>
        {
          cartData.length > 0  && 
          <div className = 'cartflex'>
          <div className='main'>{
            cartData.map((res) => {
           const{title, description, price, discountPercentage, rating,
           thumbnail} = res;
           return (
             <div className='mycard' key={res.id}>
             <img className='imgs' src={thumbnail} alt='product' width='370px' height='290px' />
               <h3 className='title'>{title}</h3>
               <p className='discrp'>{description}</p>
               <div className='pricing'>
                 <h4>From ₹{price}</h4>
               <h5>{discountPercentage}<span>%off</span></h5>
               </div>
         <h5 className='rating'><FaStarHalfAlt style={{color:'orange'}} />{rating}</h5>
    { myProductIds.includes(res.id) && <button onClick={() => Dispatch(RemoveProducts(res.id))} 
    className='mycart'><BsCart4 />Remove from cart</button> }
    </div>
           )
         }) 
          }</div>
           <div className='check'>
            <button className='clearAll' onClick={(res) => Dispatch(ClearAll(res.id))}>Checkout</button>
            </div>
         </div>
        }

        { cartData < 1  &&
        <div className='cartEmpty'>
            <h1 className='h1'>Your Cart is Empty ...</h1>
        </div> }
        </div>
    )
}


export default Cart;