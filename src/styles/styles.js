import styled from 'styled-components';

// CHASEBOARD
export const Board = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin: 20px 0;
  align-items: center;
`;

export const Cell = styled.div`
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

export const GameBoard = styled.div`
  background: linear-gradient(145deg, #1e1e1e, #383838);
  padding: 40px;
  border-radius: 10px;
  perspective: 1000px;
`;

export const Player = styled.span`
  padding: 5px;
  border-radius: 50%;
  position: absolute;
  font-size: xx-large;
`;

export const Chaser = styled.img`
  padding: 5px;
  position: absolute;
  height: 80px;
  width: 200px;
`;

// GAME

export const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

export const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: larger;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

// QUESTION

export const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 48px;
  border: solid black 2px;
  padding: 12px;
  height: fit-content;
`;

export const Heading = styled.h1`
  margin: 0;
`;

export const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

export const StyledRadio = styled.input`
  margin-right: 10px;
  accent-color: #4caf50; /* You can customize this color */
  cursor: pointer;
  width: 20px;
  height: 20px;

  &:checked {
    border: 2px solid #4caf50;
  }
`;
