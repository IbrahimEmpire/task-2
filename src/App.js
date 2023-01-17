import './App.css';
// import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
//  import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useState } from 'react';
import * as React from 'react';
import Rating from '@mui/material/Rating';
import Stack from '@mui/material/Stack';
import Badge from '@mui/material/Badge';


function App() {
  const [add, setAdd] = useState(0)
  return (
<div>
<AppBar position="static">
     
        <Toolbar disableGutters>
          <h2>Start Bootstrap</h2>
          <Button color='inherit' >Home</Button>
          <Button color='inherit' >About</Button>


           <NavDropdown title="Shop" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">All Products</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.2">Popular Items</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">New Arrivals</NavDropdown.Item>       
      </NavDropdown>




          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
           
          </Typography>
          <Button color="inherit" variant="outlined"><ShoppingCartIcon/>Card<p><Badge badgeContent={add} color="error" ></Badge></p></Button>
          </Toolbar>
          </AppBar>

          <div className='style'>
            <div className='letters'>
            <h1>Shop in style</h1>
            <h3>With this shop hompage template</h3>
          </div>
          </div>
          <div className='cards'>
            {/* card 1 */}
          <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Fancy Product</b></Card.Title>
        </div>
        <Card.Text className='txt1'>
         $40.00 - $80.00
        </Card.Text>
        
        <Button  className='txt2' variant="outlined">View Options </Button>
       
      </Card.Body>
    </Card>
    </div>
     {/* card 2 */}
    <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Special Item</b></Card.Title>
        <div> <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={5} />
      
    </Stack></div>
        </div>
        <Card.Text className='txt1'>
         <span className='txth'>$20.00</span> $18.00
        </Card.Text>

        <Button onClick={()=>{setAdd(add+1)}} className='txt2' variant="outlined">Add to card </Button>
      </Card.Body>
    </Card>
    </div> 
     {/* card 3 */}
    <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Sale Item</b></Card.Title>
        </div>
        <Card.Text className='txt1'>
        <span className='txth'>$50.00</span> $25.00
        </Card.Text>

        <Button onClick={()=>{setAdd(add+1)}} className='txt2' variant="outlined">Add to card </Button>
      </Card.Body>
    </Card>
    </div>
     {/* card 4 */}
    <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Popular Item</b></Card.Title>
        </div>
        <div> <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={5} />
      
    </Stack></div>
        <Card.Text className='txt1'>
         $40.00
        </Card.Text>

        <Button onClick={()=>{setAdd(add+1)}} className='txt2' variant="outlined">Add to Card </Button>
      </Card.Body>
    </Card>
    </div>
     {/* card 5 */}
    <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Sale Item</b></Card.Title>
        </div>
        <Card.Text className='txt1'>
        <span className='txth'>$50.00</span> $25.00
        </Card.Text>

        <Button onClick={()=>{setAdd(add+1)}} className='txt2' variant="outlined">Add to cart </Button>
      </Card.Body>
    </Card>
    </div>
     {/* card 6 */}
    <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Fancy Product</b></Card.Title>
        </div>
        <Card.Text className='txt1'>
         $120.00 - $280.00
        </Card.Text>

        <Button onClick={()=>{setAdd(add+1)}} className='txt2' variant="outlined">View Options </Button>
      </Card.Body>
    </Card>
    </div>
     {/* card 7 */}
    <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Special Item</b></Card.Title>
        </div>
        <div> <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={5} />
      
    </Stack></div>
        <Card.Text className='txt1'>
        <span className='txth'>$20.00</span> $18.00
        </Card.Text>

        <Button  className='txt2' variant="outlined">Add to Cart </Button>
      </Card.Body>
    </Card>
    </div>
     {/* card 8 */}
    <div className='card'>
    <Card >
      <Card.Img variant="top" src="https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg" />
      <Card.Body>
        <div >
        <Card.Title className='txt'><b>Popular Item</b></Card.Title>
        </div>
        <div> <Stack spacing={1}>
      <Rating name="half-rating" defaultValue={5} />
      
    </Stack></div>
        <Card.Text className='txt1'>
         $40.00
        </Card.Text>

        <Button onClick={()=>{setAdd(add+1)}} className='txt2' variant="outlined">Add to cart </Button>
      </Card.Body>
    </Card>
    </div>
   
   
   
   
   
    </div>
   
   
    </div>
  );
}

export default App;

