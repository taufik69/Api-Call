import React, {useEffect, useState}from 'react'
import axios from 'axios';
import { ListItem } from '@mui/material';

const Data = () => {

    const [dataset , setdataset] = useState([]);

    useEffect(()=> {
        const taufikdata  = async()=> {
          const data = await axios.get('http://localhost:8000/');
          setdataset(data.data);
      
        }
        taufikdata();
      },[])



      console.log('data',dataset);
  return (
  
    <div className='maindiv'>
        {dataset.map((item)=> (

            <div className="childitem">
                <h3>{item.id}</h3>
                <h3>{item.name}</h3>
                <h3>{item.district}</h3>
                <h3>{item.University }</h3>
            </div>

        ))}
            

         

           
       
     
     </div>
    
  )
}

export default Data