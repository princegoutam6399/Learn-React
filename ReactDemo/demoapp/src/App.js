import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'
import { Col, Container, Row } from 'react-bootstrap';
import { data } from './data';
import { useState } from 'react';
import EventHandle from './Event';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faAddressCard, faHeart, faStar } from '@fortawesome/free-regular-svg-icons';
// import { faPerson, faWalking } from '@fortawesome/free-solid-svg-icons';
// import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function Adddata(a, b) {
  console.log(a + b);
}


function Application() {

  let template = '';
  let [pshow, pset] = useState(true);  //Hooks
  if (pshow) {
    template = <><h1>You Can See This Post</h1><button className='btn btn-primary' onClick={()=>pset(false)}>Hide</button> </>
  } else {
    template = <><button className='btn btn-primary' onClick={()=>pset(true)}>Show</button></>
  }

  var [a, setCount] = useState(10);
  function button() {
    setCount(a + 1);
    console.log(a);
  }
  return (
    <div>
      {template}
      <button className='btn btn-primary m-5' onClick={() => Adddata(10, 20)}>Click Me!</button>

      <EventHandle />
      Value : {a} <button onClick={button} className='btn btn-primary'>Click Here</button>
      <Container>
        <Row>
          {data.map((v, i) => {
            return (
              <Abc data={v} key={i} />
            )
          })}
        </Row>
      </Container>
    </div>
  );
}
export default Application;

function Abc(data) {
  return (
    <div>
      <Col className="card card-body mb-4 bg-info" lg="3" md="6">
        {/* <FontAwesomeIcon icon={faHeart} /> */}
        {/* <FontAwesomeIcon icon={faStar} /> */}
        {/* <FontAwesomeIcon icon={faWhatsapp} /> */}
        <h3>{data.data.name}</h3>
        <p>{data.data.year}</p>
        <p>{data.data.color}</p>
        <p>{data.data.pantone_value}</p>
      </Col>
    </div>
  )
};

