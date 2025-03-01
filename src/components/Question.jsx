import React from 'react';
import { questions } from '../data/questions';
import {
  Heading,
  OptionContainer,
  QuestionContainer,
  StyledRadio,
} from '../styles/styles';

export const Question = ({
  player,
  questionIndex,
  selectedOption,
  setSelectedOption,
}) => {
  return (
    <QuestionContainer>
      <Heading>{player}</Heading>
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
