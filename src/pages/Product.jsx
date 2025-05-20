import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import useFetch from '../customHook/useFetch';
import { MdShoppingCartCheckout } from "react-icons/md";


const Product = () => {
  let {products} = useFetch("http://localhost:4000/product")

  
  return (
    <div className='bgcard'>
      <section className='products'>
        
  {        products.map( (products) =>(
          
            <Card   className='product' key={products.id}>
            <Card.Img variant="top" src={products.image} className='cardimg'  />
            <Card.Body>
              <Card.Title style={{fontSize:"10px"}}>{products.title}</Card.Title>
              <Card.Text>
               {products.rate}
              </Card.Text>
              <Card.Footer className='cardfooter'>
              <Button variant="outline-primary"  className='btn1' type='button'><MdShoppingCartCheckout /> </Button>
               
               <Button variant='outline-secondary' style={{marginTop:"10px"}} >  Details  </Button>
              </Card.Footer>
            </Card.Body>
          </Card> 
          
          
))}
        
      </section>
    </div>
  )
}

export default Product