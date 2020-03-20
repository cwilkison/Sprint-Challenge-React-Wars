import React, { useState, useEffect } from "react";
import axios from "axios";
import SpaceCard from "./SpaceCard";
import { Container, Row } from 'reactstrap';



export default function CardPage() {
  const [character, setCharacter] = useState([]);
  useEffect(() => {
    axios
      .get("https://swapi.co/api/people/")
      .then(response => {
        console.log(response.data.results);
        setCharacter(response.data.results);
      })
      .catch(error => {
        console.log("no data", error);
      });
  }, []);
  return (
    <Container>
      <Row xs="4">
      {character.map(characters => {
        return (
          <SpaceCard
            name={characters.name}
            birth={characters.birth_year}
            height={characters.height}
            weight={characters.mass}
          />
        );
      })}
      </Row>
    </Container>
  );
}
