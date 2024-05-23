import './App.css';
import { Card, Col, Container, Row } from 'react-bootstrap';
import Footer from './footer';
import Header2 from './navbar';
import { data } from './data';
import { useState } from 'react';

function Calculate(){
  var [a,setCount]=useState(10);
  function button(){
    setCount (a+1);
    console.log(a);
  }

  return (
    <div className=''>

      <Header2 name='React Application' />
      <Container className='d-flex justify-content-center'>
      <h2 className='text-warning '>Hyy </h2> 
      <h1 className='text-success mb-5'>India</h1>
      </Container>
      value:{a} <button onClick={button} className='btn btn-primary'>Click Me</button>


      <Container fluid className='py-5'>
        <Container>
          <Row className='ms-auto mt-2'>
            <Col lg="3" md='6'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/364086/pexels-photo-364086.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
            <Col lg="3" md='6'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/1073078/pexels-photo-1073078.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
            <Col lg="3" md='6'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/56890/fir-tannenzweig-pine-cones-needles-56890.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>
            <Col lg="3" md='6'>
              <Card>
                <Card.Img variant="top" src="https://images.pexels.com/photos/3408744/pexels-photo-3408744.jpeg?auto=compress&cs=tinysrgb&w=600" />
                <Card.Body>This is some text within a card body.</Card.Body>
              </Card>
            </Col>

          </Row>
        </Container>
      </Container>

      <Container>
        <Row>
          {data.map((v, i) => {
            return (
              <Xyz data={v} key={i} />
            )
          })}
        </Row>
      </Container>


      <Footer />

    </div>
  );
}

export default Calculate;

function Xyz(data) {
  return (
    <div>
      <Col className='bg-success card card-body mb-3' lg='3' md='6' >
          <h3>{data.data.name}</h3>
          <p>{data.data.year}</p>
          <p>{data.data.color}</p>
          <p>{data.data.pantone_value}</p>
      </Col>
    </div>
  )
}



