import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import NavDropdown from 'react-bootstrap/NavDropdown';
import * as React from 'react';
import Badge from '@mui/material/Badge';

export function Navbar({ count }) {

  return (
    <div>
      <AppBar position="static">

        <Toolbar disableGutters>
          <h2>Start Bootstrap</h2>
          <Button color='inherit'>Home</Button>
          <Button color='inherit'>About</Button>


          <NavDropdown title="Shop" id="nav-dropdown">
            <NavDropdown.Item eventKey="4.1">All Products</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item eventKey="4.2">Popular Items</NavDropdown.Item>
            <NavDropdown.Item eventKey="4.3">New Arrivals</NavDropdown.Item>
          </NavDropdown>




          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>

          </Typography>
          <Button color="inherit" variant="outlined"><ShoppingCartIcon />Card<p><Badge badgeContent={count} color="error"></Badge></p></Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}
