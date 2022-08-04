import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Table from 'react-bootstrap/Table';
import Navbar from 'react-bootstrap/Navbar';
import Badge from '@mui/material/Badge';
import { NavLink } from 'react-router-dom';
import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';
import { useSelector ,useDispatch } from 'react-redux';
import { DLT } from '../redux/actions/action';
import { useEffect } from 'react';

const Header = () => {

   const[price,setPrice]=useState(0);
   // console.log(price);

   const getData = useSelector((state) => state.cartReducer.carts);

   const dispatch=useDispatch();

   const [anchorEl, setAnchorEl] = useState(null);
   const open = Boolean(anchorEl);

   const handleClick = (e) => {
      setAnchorEl(e.currentTarget)
   };

   const dlt=(id)=>{
      dispatch(DLT(id))
   }

   const handleClose = () => {
      setAnchorEl(null);
   };

   const total=()=>{
       let price=0;
       getData.map((ele,k)=>{
            price=ele.price * ele.qnty + price
       });
       setPrice(price);
   }

    useEffect(()=>{
      total();
    },[total]);

   return (
      <Navbar bg="dark" variant="dark" style={{ height: '60px' }}>
         <Container>
            <NavLink to="/cart" className='text-decoration-none text-light mx-3'>Add to cart</NavLink>
            <Nav className="me-auto">
               <NavLink to="/" className='text-decoration-none text-light'>Home</NavLink>
            </Nav>
            <Badge badgeContent={getData.length} color="primary"
               id="basic-button"
               aria-controls={open ? 'basic-menu' : undefined}
               aria-haspopup="true"
               aria-expanded={open ? 'true' : undefined}
               onClick={handleClick}
            >
               <i class="fa-solid fa-cart-shopping text-light" style={{ fontSize: '25px', cursor: 'pointer' }}></i>
            </Badge>
         </Container>
         <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
               'aria-labelledby': 'basic-button',
            }}
         >
            {
               getData.length ?
                  <div className='card_details' style={{ width: "24rem", padding: 10 }}>
                     <Table>
                        <thead>
                           <tr>
                              <th>Photo</th>
                              <th>Restaurant Name</th>
                           </tr>
                        </thead>
                        <tbody>
                           {
                              getData.map((e) => {
                                 return (
                                    <>
                                       <tr>
                                          <td>
                                             <NavLink to={`/cart/${e.id}`}>
                                                <img  onClick={handleClose} style={{ width: "5rem", height: "5rem" }} src={e.imgdata} alt="" />
                                             </NavLink>
                                          </td>
                                          <td>
                                             <p>{e.rname}</p>
                                             <p>Price : ₹ {e.price}</p>
                                             <p>Quantity :  {e.qnty}</p>
                                             <p style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}>
                                                <i onClick={()=>dlt(e.id)} className='fas fa-trash smalltrash'></i>
                                             </p>
                                          </td>
                                          <td className='mt-5' style={{ color: 'red', fontSize: 20, cursor: 'pointer' }}>
                                             <i onClick={()=>dlt(e.id)} className='fas fa-trash largetrash'></i>
                                          </td>
                                       </tr>
                                    </>

                                 )
                              })
                           }
                           <p className='text-center' style={{ marginTop: 5 }}>Total : ₹ {price}</p>
                        </tbody>
                     </Table>
                  </div> : <div className='card_details'>
                     <i className='fas fa-close smallslose'
                        onClick={handleClose}
                        style={{ marginLeft: '10px' }}></i>
                     <p style={{ padding: '5px', fontSize: '22px' }}> Your Cart is Empty</p>
                  </div>
            }

         </Menu>
      </Navbar>
   )
}

export default Header;
