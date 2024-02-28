import React from 'react';
import './Home.css';
import logo from './images/logo.png'
import trophee from './images/trophee.png'
import corporate from './images/corporate.png'
import pumps from './images/pumps.png'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Footer from './Footer';

function HomePage() {
  cd
  return (
    <div className="homepage">
        <div className="logo-container">
        <img src={logo} alt="logo" />
    </div>
      <div>
      <Container>
      <Row>
        <Col sm={3}>
        <img src={trophee} alt="trophee image" id="trophee"/>
        </Col>
        <Col sm={9}>
            <h6 style={{ fontFamily: 'Times New Roman' }}><b> C.R.I. PUMPS WINS THE NATIONAL ENERGY CONSERVATION AWARD 2018 for the 4th time.
</b></h6>
        <ul  style={{ fontFamily: 'Times New Roman', marginLeft: '100px', textAlign: 'left'}}>
       <li> <h6>C.R.I.'s energy efficient products are well recognized by various Government Institutions, as trustworthy products for various projects across the globe to save energy.</h6></li>
       <li><h6>C.R.I. is the highest contributor in the country for the projects of EESL (Energy Efficiency Services Limited) to replace the old inefficient pumps with 5 Star rated energy efficient smart pumps with IoT enabled control panel.</h6> </li>
       </ul>
       <img src={corporate} alt="corporate" id="corporate" className="img-fluid"/>
       <br></br>
       <h7 style={{ fontFamily: 'Times New Roman',marginLeft: '100px', textAlign: 'left' }}>Government of India has awarded the <b>"National Energy Conservation Award 2018"</b>. Mr. G. Selvaraj, Joint Managing Director of C.R.I. Group received the award from Smt. Sumitra Mahajan, Speaker of Lok Sabha & Shri. Raj Kumar Singh, Honorable Minister of State.
	</h7>
        </Col>
      </Row>
      </Container>
      </div>
      <div>
        <br/>
        <br/> <h7 style={{ fontFamily: 'Times New Roman'}}>INSTALLED OVER 10 LAKHS STAR RATED PUMPSETS ACROSS THE COUNTRY RESULTING IN A CUMULATIVE SAVING OF MORE THAN 9,000 MILLION UNITS OF POWER FOR THE NATION. 
</h7>
<br/>
<img src={pumps} alt="pumps image" id="pumps" className="img-fluid"/>
<br/>
<h7 style={{ fontFamily: 'Times New Roman'}}>Valves - Pumps - Pipes - IoT Drives & Controllers - Wires & Cables - Solar Systems - Motors </h7>
<hr id='hrline'/>
      </div>
      
      <h7 style={{ fontFamily: 'Times New Roman'}}><b>C.R.I. FLUID SYSTEMS PRODUCTS CATER TO DIVERSE SEGMENTS</b></h7>
      <h7 style={{ fontFamily: 'Times New Roman'}}>CHEMICALS & PROCESS<span style={{ color: 'red' }}>|</span> POWER <span style={{ color: 'red' }}>|</span>WATER & WASTE WATER <span style={{ color: 'red' }}>|</span>OILS & GAS<span style={{ color: 'red' }}>|</span> PHARMA SUGARS & DISTILLERIES<span style={{ color: 'red' }}>|</span> PAPER & PULP <span style={{ color: 'red' }}>|</span>MARINE & DEFENCE<span style={{ color: 'red' }}>|</span> METAL & MINING <span style={{ color: 'red' }}>|</span>FOOD & BEVERAGE<span style={{ color: 'red' }}>|</span> PETROCHEMICAL & REFINERIES<span style={{ color: 'red' }}>|</span> SOLAR<span style={{ color: 'red' }}>|</span> BUILDING <span style={{ color: 'red' }}>|</span>HVAC <span style={{ color: 'red' }}>|</span>FIRE FIGHTING <span style={{ color: 'red' }}>|</span>AGRICULTURE & RESIDENTIAL</h7>
      <br/>
      <br/>
      <Footer />
    </div>
    
  );
}

export default HomePage;
