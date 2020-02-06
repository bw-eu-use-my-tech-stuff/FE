import React, { useEffect, useState } from 'react';
import RentItemCard from './RentItemCard';
import axios from 'axios';

function ItemsForRent(){

  const [ dataFromAPI, setDataFromAPI ] = useState([]);

  useEffect(() => {
  axios.get('https://use-my-tech-stuff-eu.herokuapp.com/api/equipments')
    .then((response) => {
      console.log(response.data);
      setDataFromAPI(response.data);
    })
    .catch((error) => {
      console.log(error);
    });
  }, [])


    return(
        <div>
            {
              dataFromAPI.map((item, index) => {
                return <RentItemCard key={index} data={item} />;
            })
            }
        </div>
    )
}

export default ItemsForRent;