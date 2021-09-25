import React from 'react';
import './Developers.css'

const Developers = (props) => {
         console.log(props.developer)
         const {name, sellery, img, experienceYear, achievement, country} = props.developer || {};
         return (
    <div className="col-md-4 mt-4 mb-3">
         <div className="card h-100">
         <img className="card-img" src={img} alt="..."/>
         <div className="card-body">
         <h5 className="card-title text-center"> {name} </h5>
         <h6> Achievement : <span className="dev-info">{achievement}</span> </h6>
         <h6> Experience Year : <span className="dev-info">{experienceYear}</span> </h6>
         <h6> Country : <span className="dev-info">{country}</span> </h6>
         <h6> Sellery : <span className="dev-info">{sellery}</span> </h6>
         <div className="text-center"><button className="btn btn-primary mt-3 add-btn">Add To Cart</button></div>
        </div>
      </div>
    </div>
         );
};

export default Developers;