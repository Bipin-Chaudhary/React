import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetails extends Component {
  state = {};

  renderDish(dish) {
    if (dish == null) {
      return <div></div>;
    } else {
      return (
        <Card>
          <CardImg width="100%" src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    }
  }

  renderComment(comments) {
    if (comments == null) {
      return <div></div>;
    } else {
      const com = comments.map((item) => {
        return (
          <li>
            <p>{item.comment}</p>
            <p>
              --{item.author},&nbsp;{item.date}
            </p>
          </li>
        );
      });
      return <ul className="list-unstyled">{com}</ul>;
    }
  }

  render() {
    if (this.props.dish == null) {
      return <div></div>;
    }

    const cmt = this.renderComment(this.props.dish.comments);
    return (
      <React.Fragment>
        <div className="col-12 col-md-5 m-1">
          {this.renderDish(this.props.dish)}
        </div>
        <div className="col-12 col-md-5 m-1">{cmt}</div>
      </React.Fragment>
    );
  }
}

export default DishDetails;
