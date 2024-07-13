import React from 'react';
import styled from 'styled-components';
import image from '../images/image.png';

const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  align-items: center;
`;

const Cell = styled.div`
  width: 400px;
  height: 70px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid #000;
  position: relative;
  background-color: ${({ isPlayer, isChaser }) => {
    if (isPlayer) return 'blue';
    if (isChaser) return 'red';
    return 'lightblue';
  }};
  color: ${({ isPlayer }) => (isPlayer ? 'white' : 'black')};
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transform: ${({ index }) => `translateY(${index * 5}px) rotateX(-5deg)`};
  z-index: ${({ index }) => 10 - index}; /* Adjust z-index for stacking order */
`;

const GameBoard = styled.div`
  background: linear-gradient(145deg, #1e1e1e, #383838);
  padding: 40px;
  border-radius: 10px;
  perspective: 1000px;
`;

const Player = styled.span`
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  font-size: xx-large;
`;

const Chaser = styled.img`
  padding: 5px;
  position: absolute;
  height: 80px;
  width: 200px;
`;

export const ChaseBoard = ({ playerPosition, chaserPosition }) => {
  const cells = Array.from({ length: 8 }, (_, index) => (
    <Cell
      key={index}
      isPlayer={index === playerPosition}
      isChaser={index === chaserPosition}
    >
      {index === playerPosition && <Player>£10,000</Player>}
      {index === chaserPosition && <Chaser src={image} alt="Chaser" />}
    </Cell>
  ));

  return (
    <Board>
      <h1>The Chase</h1>
      <GameBoard>{cells}</GameBoard>
    </Board>
  );
};
