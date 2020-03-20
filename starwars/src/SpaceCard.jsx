import React from "react";
import {
    Card, CardHeader, CardText, CardBody,
    CardTitle, CardSubtitle, Badge, Col
  } from 'reactstrap';
  


const SpaceCard = (props) => {
    console.log(props);
  return (

    <Card>
      <CardHeader>Name: {props.name}</CardHeader>
      <CardText>Birth Year: {props.birth}</CardText>
      <CardText>Height: {props.height}</CardText>
      <CardText>Mass: {props.weight}</CardText>
    </Card>
  );
};

export default SpaceCard;
