import React from "react";
import {
    Card, CardHeader, CardText, CardBody,
    CardTitle, CardSubtitle, Badge, Col, Row
  } from 'reactstrap';
  import styled from "styled-components";


  const SpaceFlex = styled.div`
  width: 200px;
  max-height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10%;
`;


const SpaceCard = (props) => {
    console.log(props);
  return (
    <SpaceFlex>
    <Card body inverse color="info">
      <h5 Heading><Badge color="secondary" pill>Name: {props.name}</Badge></h5>
      <CardText>Birth Year: {props.birth}</CardText>
      <CardText>Height: {props.height}</CardText>
      <CardText>Mass: {props.weight}</CardText>
    </Card>
    </SpaceFlex>
  );
};

export default SpaceCard;

