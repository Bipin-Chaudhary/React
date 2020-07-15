import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardImgOverlay,
  CardText,
  CardBody,
  CardTitle,
} from "reactstrap";

class DishDetail extends Component {
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
              --{item.author},&nbsp;
              {new Intl.DateTimeFormat("en-US", {
                year: "numeric",
                month: "short",
                day: "2-digit",
              }).format(new Date(Date.parse(item.date)))}
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
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5 m-1">
            {this.renderDish(this.props.dish)}
          </div>
          <div className="col-12 col-md-5 m-1">
            <h4>Comments</h4>
            {cmt}
          </div>
        </div>
      </div>
    );
  }
}

export default DishDetail;
