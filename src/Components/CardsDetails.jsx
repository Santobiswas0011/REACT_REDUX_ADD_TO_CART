import React from 'react';
import Table from 'react-bootstrap/Table';
import { useNavigate, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import './style.css';
import { useEffect } from 'react';
import { useState } from 'react';
import { DLT ,ADD, REMOVE } from '../redux/actions/action';

const CardsDetails = () => {

  const [data, setData] = useState([]);
  //  console.log(data);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const getData = useSelector((state) => state.cartReducer.carts);

  const { id } = useParams();

  const compare = () => {
    let compareData = getData.filter((e) => {
      return e.id == id
    });
    setData(compareData);
  }

  useEffect(() => {
    compare();
  }, [id]);

  // add data
  const send = (element) => {
    dispatch(ADD(element))
  }
  // remove data
  const remove=(item)=>{
     dispatch(REMOVE(item));
  }

  const deleteDate = (id) => {
    dispatch(DLT(id));
    navigate('/')
  };

  return (
    <>
      <div className="container">
        <h2 className='text-center mt-2'>
          Item Details Page
        </h2>
        <section className='container mt-3'>
          <div className="iteamsdetails">
            {
              data && data.map((ele) => {
                return (
                  <>
                    <div className="items_img">
                      <img src={ele.imgdata} alt="" />
                    </div>
                    <div className="details">
                      <Table>
                        <tr>
                          <td>
                            <p><strong>Restaurant</strong> : {ele.rname}</p>
                            <p><strong>Price</strong> : ₹  {ele.price}</p>
                            <p><strong>Dishes</strong> : {ele.address}</p>
                            <p><strong>Total</strong> : ₹  {ele.price * ele.qnty}</p>
                            <div style={{ width: 100, cursor: 'pointer', background: '#ddd', color: '#111' }} className='mt-5 d-flex justify-content-between align-items-center'>
                              <span style={{ fontSize: 24 }} onClick={ele.qnty <=0 ? deleteDate(ele) :  ()=>remove(ele)}>-</span>
                              <span style={{ fontSize: 22 }}>{ele.qnty}</span>
                              <span style={{ fontSize: 24 }} onClick={()=>send(ele)}>+</span>
                            </div>
                          </td>
                          <td>
                            <p><strong>Rating : </strong> <span style={{ background: "green", color: "#fff", padding: "2px 5px", borderRadius: "5px" }}>{ele.rating}</span></p>
                            <p><strong>Order Review :</strong> <span > {ele.somedata}	</span></p>
                            <p><strong>Remove :</strong> <span ><i onClick={() => deleteDate(ele.id)} style={{ color: "red", fontSize: 20, cursor: "pointer" }} className='fas fa-trash'></i></span></p>
                          </td>
                        </tr>
                      </Table>
                    </div>
                  </>
                )
              })
            }
          </div>
        </section>
      </div>
    </>
  )
}

export default CardsDetails;
