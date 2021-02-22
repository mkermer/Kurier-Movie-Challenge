import React from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../../actions/app.actions';
import { Card, Button } from "react-bootstrap";
import mock from "../MovieDetailPage/milla-meets-moses-plakat.jpg";



function Moviecard() {

  return (
    <div className="container">
      <div className="grid-container">
          <Card className="movieCardBox" style={{ width: "10rem" }}>
            <Card.Img variant="top" src={mock} />
            <Card.Body>
              <Card.Title className="movieCardTitle">
                Milla Meets Moses
              </Card.Title>

              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star checked"></span>
              <span class="fa fa-star"></span>
              <span class="fa fa-star"></span>

              <Card.Text className="movieCardDescription">
                Ein Herumtreiber und Gelegenheitsdealer gibt einem sehr kranken
                Teenagermädchen Halt
              </Card.Text>
              <Button variant="primary">Watch Trailer</Button>
            </Card.Body>
          </Card>
          

      </div>
    </div>
  );
}

const mapStateToProps = (state) => ({ applicationState: state });
const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(actions, dispatch),
});
export default connect(mapStateToProps, mapDispatchToProps)(Moviecard);

