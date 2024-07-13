import React, { useState } from 'react';
import { ChaseBoard } from './ChaseBoard';
import { Question } from './Question';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';

const BoardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;

const Button = styled.button`
  width: 150px;
  height: 40px;
  font-size: larger;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Game = () => {
  const [playerPosition, setPlayerPosition] = useState(2);
  const [chaserPosition, setChaserPosition] = useState(0);

  const [playerSelectedOption, setPlayerSelectedOption] = useState(null);
  const [chaserSelectedOption, setChaserSelectedOption] = useState(null);
  const [playerQuestionIndex, setPlayerQuestionIndex] = useState(0);
  const [chaserQuestionIndex, setChaserQuestionIndex] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = () => {
    // Handle Player's answer
    if (
      playerSelectedOption !== null &&
      playerSelectedOption === questions[playerQuestionIndex].answer
    ) {
      if (playerPosition < 7) {
        setPlayerPosition(playerPosition + 1);
      } else {
        navigate('/result');
      }
      setPlayerQuestionIndex(playerQuestionIndex + 1);
    }

    if (
      playerSelectedOption !== null &&
      playerSelectedOption !== questions[playerQuestionIndex].answer
    ) {
      setPlayerQuestionIndex(playerQuestionIndex + 1);
    }

    // Handle Chaser's answer
    if (
      chaserSelectedOption !== null &&
      chaserSelectedOption === questions[chaserQuestionIndex].answer
    ) {
      if (chaserPosition < playerPosition) {
        setChaserPosition(chaserPosition + 1);
      } else {
        navigate('/result');
      }
      setChaserQuestionIndex(chaserQuestionIndex + 1);
    }

    if (
      chaserSelectedOption !== null &&
      chaserSelectedOption !== questions[chaserQuestionIndex].answer
    ) {
      setChaserQuestionIndex(chaserQuestionIndex + 1);
    }

    // Reset selected options
    setPlayerSelectedOption(null);
    setChaserSelectedOption(null);
  };

  return (
    <Container>
      <BoardContainer>
        <Question
          player="Player"
          questionIndex={playerQuestionIndex}
          selectedOption={playerSelectedOption}
          setSelectedOption={setPlayerSelectedOption}
        />
        <ChaseBoard
          playerPosition={playerPosition}
          chaserPosition={chaserPosition}
        />
        <Question
          player="Chaser"
          questionIndex={chaserQuestionIndex}
          selectedOption={chaserSelectedOption}
          setSelectedOption={setChaserSelectedOption}
        />
      </BoardContainer>
      <Button onClick={handleSubmit}>Submit</Button>
    </Container>
  );
};
