import './App.css';
// import Header from './Header';
import Footer from './footer';
import Navbar from './navbar';
import {Card, Col, Container, Row } from 'react-bootstrap';
function App() {


  // let name = 'Aman Kumar';
  // let obj = {
  //   "name":"Aman",
  //   "branch":"EE"
  // }
  // var b={
  //   name:"Amit",
  //   class:11,
  //   course:"Math"
  // }

  // var arr = [4,23,34,53,24];


  // var c = [56.64,89,33,73,88];
  // var d = [];
  // var m = 0;
  // for (let i=0;i<c.length;i++){
  //   if(c[i]%2==0){
  //     d[m]=c[i];
  //     m=m+1;
  //   }
  // }


  // var abc = {
  //   email: 'abc@gmail.com',
  //   phone: '87268725368273'
  // };
  return (
    <div className='App'>
      {/* <Header obj={abc} /> */}
      <Navbar/>
      {/* <Navbar expand="lg" className="bg-warning">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}


      <h1 className='text-success py-2'>Hello India</h1>
      <h2 className='text-warning'>Hyy</h2>


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

      {/* <Container className=''>

        <Card className="text-center bg-info text-white">
          <Card.Header>Featured</Card.Header>
          <Card.Body>
            <Card.Title>Special title treatment</Card.Title>
            <Card.Text>
              With supporting text below as a natural lead-in to additional content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
      </Container> */}

      {/* {/* <Header/> */}
      {/* <Header2/>} */}
      {/* <h1>Hello India</h1>
    <p>{name}</p>
    <h1>{obj.name}</h1>
    <h1>Your name is {b.name} Or Your Class Is {b.class} and course {b.course}</h1> */}
      {/* {arr.map((m)=>{
        return(
          <div>
            {m}
          </div>
        );
      })}   */}
      {/* {d.map((m)=>{
      return(
        <div>
          <h4>{m}</h4>
        </div>
      );
    })} */}
      {/* <Abc/>
    <Footer/> */}
    </div>
  );
}
<Footer />

export default App;


