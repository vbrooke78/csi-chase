import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { questions } from '../data/questions';
import styled from 'styled-components';

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Question = ({
  player,
  playerPosition,
  chaserPosition,
  setPlayerPosition,
  setChaserPosition,
}) => {
  console.log(player);
  const [selectedOption, setSelectedOption] = useState(null);
  const [questionIndex, setQuestionIndex] = useState(0);

  const navigate = useNavigate();

  const handleSubmit = () => {
    if (selectedOption !== null) {
      setQuestionIndex(questionIndex + 1);
      if (selectedOption === questions[questionIndex].answer) {
        if (player === 'Player') {
          playerPosition < 7
            ? setPlayerPosition(playerPosition + 1)
            : navigate('/result');
        } else {
          chaserPosition < playerPosition
            ? setChaserPosition(chaserPosition + 1)
            : navigate('/result');
        }
      }
      console.log('selectedOption', selectedOption);
    }
  };

  return (
    <QuestionContainer>
      <h1>{player}</h1>
      <h2>{questions[questionIndex].question}</h2>

      {questions[questionIndex].options.map((option, index) => (
        <div key={index}>
          <input
            type="radio"
            name="option"
            onChange={() => setSelectedOption(index)}
          />
          {option}
        </div>
      ))}
      <button onClick={handleSubmit}>Submit</button>
    </QuestionContainer>
  );
};
