import './App.css';

import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import * as React from 'react';
import { Dashbord } from './components/Dashbord';
import { Navbar } from './components/Navbar';
import { Cards } from './components/Cards';
const data = [
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Fansy Product",
    Rating: "",
    Rate: "$40.00",
    Rate2: "$80.00",
    Button: "View Options"
  },
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Special Item",
    Rating: "⭐⭐⭐⭐⭐⭐",
    Rate: "$50.00",
    Rate2: "$25.00",
    Button: "Add to card"
  },
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Sale Item",
    Rating: "",
    Rate: "$40.00",
    Rate2: "$80.00",
    Button: "Add to card "
  },
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Popular Item",
    Rating: "⭐⭐⭐⭐",
    Rate: "$40.00",
    Button: "Add to Card "
  },
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Sale Item",
    Rating: "",
    Rate: "$50.00",
    Rate2: "$25.00",
    Button: "Add to Card "
  },
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Fansy Product",
    Rating: "",
    Rate: "$120.00",
    Rate2: "$280.00",
    Button: "View Options"
  },
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Special Item",
    Rating: "",
    Rate: "$20.00",
    Rate2: "$18.00",
    Button: "Add to Cart"
  },
  {
    Pic: "https://www.calliaweb.co.uk/wp-content/uploads/2015/10/450x300.jpg",
    Name: "Popular Item",
    Rating: "⭐⭐⭐⭐⭐",
    Rate: " $40.00",
    Button: "Add to cart"
  },
]

function App() {
  const [count, setCount] = useState(0)
 
  return (
<div>
<Navbar count={count}/>
<Dashbord />
<div className='cards-container'>
   {data.map((prod,id)=>(<Cards
    D = {prod} 
    id={id}
     />))}
    </div>
   
   
    </div>
  );
}

export default App;


