import React from 'react';
import image from '../images/image.png';
import { Board, Cell, Chaser, GameBoard, Player } from '../styles/styles';

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
