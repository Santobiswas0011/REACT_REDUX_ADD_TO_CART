import React from 'react';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import Cardsdata from './CardsData';
import './style.css';
import {useDispatch} from 'react-redux';
import { ADD } from '../redux/actions/action';

const Cards = () => {
   const [data, setData] = useState(Cardsdata); 

      const dispatch=useDispatch();
      const send=(element)=>{
          dispatch(ADD(element))
      }
   return (
      <div className='container mt-3'>
         <h2 className='text-center'>Add to cart Projects</h2>
         <div className='row d-flex justify-content-center align-center'>
            {
               data && data.map((element, index) => {
                   const{id,rname,imgdata,address,delimg,somedata,price,rating}=element;
                  return (
                     <>
                        <Card key={id} className="mx-2 mt-4 card_style" style={{ width: '18rem',border:'none' }}>
                           <Card.Img variant="top" src={imgdata} className='mt-3' style={{height:'16rem'}} />
                           <Card.Body>
                              <Card.Title>{rname}</Card.Title>
                              <Card.Text>
                                Price : ₹ {price} 
                              </Card.Text>
                              <div className="button_div d-flex justify-content-center">
                              <Button onClick={()=>send(element)} className='col-12' variant="primary">Add to Cart</Button>
                              </div>
                           </Card.Body>
                        </Card>
                     </>
                  )
               })
            }
         </div>
      </div>
   )
}

export default Cards;
