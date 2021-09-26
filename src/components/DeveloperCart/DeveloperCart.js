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
                           <h4 className="text-center mb-4 fw-bold">Cart Summary</h4>
                           <h6 className="fw-bold mb-3">{userIcon} Devaloper Add: {developerCart.length}</h6>
                           <h6 className="fw-bold mb-4">{totalIcon} Total Cost: {total}</h6>
                           <h6 className="text-center mt-3">Selected Developer</h6>
                           <hr className="lineStyle"/>
                           <ul>
                                    {
                                    developerCart.map(cart => <li className="fw-bold">{cart.name}</li>)
                                    }
                           </ul>
                  </div>
         );
};

export default DeveloperCart;