
import React from 'react';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardFooter,
  MDBTooltip,
  MDBCarousel,
  MDBCarouselInner,
  MDBCarouselItem,
  MDBBtn,
  MDBCardGroup,
} from 'mdbreact';

import { MDBIcon, MDBView, MDBMask } from "mdbreact";
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';


const CardExample = () => {
  return (
    <div className='text-left my-5'>
      <h2 className='h1-responsive font-weight-bold text-left mx-auto my-0'>Brand's Category</h2>
      <h5 className='grey-text text-left w-responsive mx-auto mb-0'>
        Find the best brand to work for!
      </h5>
      <Link to="/search"> <Button variant="link">See more</Button></Link>

      <MDBCardGroup>
        <MDBCard>
          <MDBCardImage src="https://images.unsplash.com/photo-1568377210220-151e1d7f42c7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Prada</MDBCardTitle>
            <MDBBtn color="primary" size="md">
              read more
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage src="https://images.unsplash.com/photo-1524802020103-aa46eaffcaa2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Fanta</MDBCardTitle>
            {/* <MDBCardText>
              Some quick example text to build on the card title and make up
              the bulk of the card's content.
          </MDBCardText> */}
            <MDBBtn color="primary" size="md">
              read more
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage src="https://images.unsplash.com/photo-1482484101293-bf4d4a131897?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1660&q=80" alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Gucci</MDBCardTitle>
          
            <MDBBtn color="primary" size="md">
              read more
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>

        <MDBCard>
          <MDBCardImage src="https://images.unsplash.com/photo-1580137009935-79e9440005f2?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=2807&q=80" alt="MDBCard image cap" top hover
            overlay="white-slight" />
          <MDBCardBody>
            <MDBCardTitle tag="h5">Micheal Kors</MDBCardTitle>
          
            <MDBBtn color="primary" size="md">
              read more
          </MDBBtn>
          </MDBCardBody>
        </MDBCard>
      </MDBCardGroup>
    </div>
  );
}

export default CardExample;