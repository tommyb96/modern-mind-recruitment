import React, { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  flex-wrap: nowrap;
  overflow-x: auto;
  scroll-behavior: smooth;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 300px;
  width: 300px;
  margin: 20px;
  background-color: #f8f8f8;
  border-radius: 10px;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
`;

const Title = styled.h2`
  margin-top: 0;
  margin-bottom: 10px;
  font-size: 24px;
`;

const Button = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background-color: #fff;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.3s ease;
  font-size: 24px;
  padding: 10px;
  border-radius: 50%;
  box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);

  &:hover {
    background-color: #f8f8f8;
  }

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  &:first-of-type {
    left: 20px;
  }

  &:last-of-type {
    right: 20px;
  }
`;

const SlideShow = ({ card }) => {
  const [cards, setCards] = useState([
    { title: "Schwerpunkt 1", description: "Beschreibung des Schwerpunkts 1" },
    { title: "Schwerpunkt 2", description: "Beschreibung des Schwerpunkts 2" },
    { title: "Schwerpunkt 3", description: "Beschreibung des Schwerpunkts 3" },
    { title: "Schwerpunkt 4", description: "Beschreibung des Schwerpunkts 4" },
    { title: "Schwerpunkt 5", description: "Beschreibung des Schwerpunkts 5" },
  ]);

  const handleNextCard = () => {
    setCards((prevCards) => [...prevCards.slice(1), prevCards[0]]);
  };

  const handlePrevCard = () => {
    setCards((prevCards) => [
      prevCards[prevCards.length - 1],
      ...prevCards.slice(0, prevCards.length - 1),
    ]);
  };

  const renderCards = () => {
    return card.map((card, index) => (
      <>
        <Card key={index}>
          <Title>{card.title}</Title>
          <p>{card.description}</p>
        </Card>
      </>
    ));
  };

  return (
    <>
      <Wrapper cards={cards} onNext={handleNextCard} onPrev={handlePrevCard}>
        {renderCards()}
      </Wrapper>
      <Button onClick={handleNextCard}>Nächste Karte</Button>
      <Button onClick={handlePrevCard}>Vorherige Karte</Button>
    </>
  );
};

export default SlideShow;
