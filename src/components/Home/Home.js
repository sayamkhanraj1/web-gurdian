import React, { useEffect, useState } from 'react';
import DeveloperCart from '../DeveloperCart/DeveloperCart';
import Developers from '../Developers/Developers';

const Home = () => {
         const [developers, setDevelopers] = useState([]);

         useEffect(()=>{
                  fetch('/developers.JSON')
                  .then(res => res.json())
                  .then(data => setDevelopers(data))
         },[]);
         return (
                  <div className="container">
                           <div className="row">
                                    <div className="col-md-9">
                                    <div className="row">
                                    {
                                    developers.map(developer => <Developers
                                    key ={developer.key}
                                    developer={developer}
                                    ></Developers>)
                                    }
                                    </div>
                                    </div>

                                    <div className="col-md-3">
                                    <DeveloperCart></DeveloperCart>
                                    </div>

                           </div>
                  </div>
         );
};

export default Home;