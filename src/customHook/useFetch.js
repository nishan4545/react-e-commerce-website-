import { useState, useEffect } from 'react';
import axios from 'axios';



function useFetch(url) {
  const [products, setproducts] = useState([]);
  const [error, seterror] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(()=>{
    let fetchApi = async () =>{
      try{
        let responce = await axios.get(url)
         setproducts(responce.data);
      }
      catch(error){
           seterror(error.message)
      }
      finally{
        setloading(false)
      }
    };
    fetchApi()
  })
  return {products,error,loading , setproducts}
}

export default useFetch;