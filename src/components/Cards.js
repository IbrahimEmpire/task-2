import Button from '@mui/material/Button';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import * as React from 'react';

export function Cards({ D }) {
  const [show, setShow] = useState(true);

  function add() {
    setShow(!show);

  }
  function minus() {
    setShow(!show);

  }
  return (


    <Card className='card'>
      <Card.Img variant="top" src={D.Pic} />
      <Card.Body>
        <div>
          <Card.Title className='txt'><b>{D.Name}</b></Card.Title>
          <div> {D.Rating}</div>
        </div>
        <Card.Text className='txt1'>
          <span className='txth'>{D.Rate}</span> {D.Rate2}
        </Card.Text>

        {show ? <Button onClick={add} className='txt2' variant="outlined">{D.Button}</Button> : ""}
        {!show ? <Button onClick={minus} className='txt2' variant="outlined">Remove card</Button> : ""}
      </Card.Body>
    </Card>


  );
}
