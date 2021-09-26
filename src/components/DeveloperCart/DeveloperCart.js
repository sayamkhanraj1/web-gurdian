import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faUser, faDollarSign } from '@fortawesome/free-solid-svg-icons'
import './DeveloperCart.css'

const DeveloperCart = (props) => {
         const {developerCart} = props || {};
         const userIcon = <FontAwesomeIcon icon={faUser} />
         const totalIcon = <FontAwesomeIcon icon={faDollarSign} />

         // Total calculation 
         const totalCost = (previousValue, currectValue) => previousValue + currectValue.salary;
         const total = developerCart.reduce(totalCost, 0)
         console.log(total)

         return (
                  <div>
                           <div className="cart-calculation">
                           <h4 className="text-center mb-4 fw-bold">Cart Summary</h4>
                           <h6 className="fw-bold mb-3">{userIcon} Devaloper Add: {developerCart.length}</h6>
                           <h6 className="fw-bold mb-4">{totalIcon} Total Cost: {total}</h6></div>
                           <h6 className="text-center mt-3">Selected Developer</h6>
                           <hr className="lineStyle"/>
                           <ul>
                                    {
                                    developerCart.map(cart => <div class="card mb-3 cart-style">
                                    <div class="row g-0">
                                      <div class="col-md-4 d-flex justify-content-center align-items-center">
                                        <img className="cart-img" src={cart.img} alt="..."/>
                                      </div>
                                      <div class="col-md-8">
                                        <div class="card-body">
                                          <p class="card-title text-center fw-bold">{cart.name}</p>
                                          <p class="card-title text-center fw-bold">{cart.achievement}</p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>)
                                    }
                           </ul>
                  </div>
         );
};

export default DeveloperCart;