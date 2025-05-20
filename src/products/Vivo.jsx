import React from 'react'
import NavBars from '../navbar/NavBars'
import useFetch from '../customHook/useFetch'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { MdShoppingCartCheckout } from "react-icons/md";

const Vivo = () => {
   let {products} = useFetch("http://localhost:4000/product")
  let filteredproduct = products.filter( product => product.category === "vivo")
  return (
   <div>

  <div className='stablenav'>
    <NavBars/>
  </div>
   
    <div className='bgcard'>

    <section className='products'>
      
{        filteredproduct.map( (products) =>(
        
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
  </div>
  )
}

export default Vivo