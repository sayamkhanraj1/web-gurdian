import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Developers.css'


const Developers = (props) => {
         const {name, salary, img, experienceYear, achievement, country} = props.developer || {};
         // react font awesome 
         const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
         return (
    <div className="col-md-4 mt-4 mb-3">
         <div className="card h-100 card-style">
         <img className="card-img" src={img} alt="..."/>
         <div className="card-body">
         <h5 className="card-title text-center fw-bold fs-4"> {name} </h5>
         <h6> Achievement : <span className="dev-info">{achievement}</span> </h6>
         <h6> Experience Year : <span className="dev-info">{experienceYear}</span> </h6>
         <h6> Country : <span className="dev-info">{country}</span> </h6>
         <h6> Salary : <span className="dev-info">{salary}</span> </h6>
         <div className="text-center"><button onClick={()=>props.handleAddDeveloper(props.developer)} className="btn btn-primary mt-3 add-btn">{cartIcon} Add To Cart</button></div>
        </div>
      </div>
    </div>
         );
};

export default Developers;