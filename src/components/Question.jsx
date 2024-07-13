import React from 'react';
import styled from 'styled-components';
import { questions } from '../data/questions';

const QuestionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  margin: 48px;
  border: solid black 2px;
  padding: 12px;
  height: fit-content;
`;

const OptionContainer = styled.div`
  display: flex;
  align-items: center;
  margin: 5px 0;
`;

const StyledRadio = styled.input`
  margin-right: 10px;
  accent-color: #4caf50; /* You can customize this color */
  cursor: pointer;
  width: 20px;
  height: 20px;

  &:checked {
    border: 2px solid #4caf50;
  }
`;

export const Question = ({
  player,
  questionIndex,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <QuestionContainer>
      <h1>{player}</h1>
      <h2>{questions[questionIndex].question}</h2>

      {questions[questionIndex].options.map((option, index) => (
        <OptionContainer key={index}>
          <StyledRadio
            type="radio"
            name={`option-${player}`}
            checked={selectedOption === index}
            onChange={() => setSelectedOption(index)}
          />
          {option}
        </OptionContainer>
      ))}
    </QuestionContainer>
  );
};
