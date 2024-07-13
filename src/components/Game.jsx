import React, { useState } from 'react';
import { ChaseBoard } from './ChaseBoard';
import { Question } from './Question';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
`;

export const Game = () => {
  const [playerPosition, setPlayerPosition] = useState(2);
  const [chaserPosition, setChaserPosition] = useState(0);

  return (
    <Container>
      <Question
        player="Player"
        playerPosition={playerPosition}
        chaserPosition={chaserPosition}
        setPlayerPosition={setPlayerPosition}
        setChaserPosition={setChaserPosition}
      />
      <ChaseBoard
        playerPosition={playerPosition}
        chaserPosition={chaserPosition}
      />
      <Question
        player="Chaser"
        playerPosition={playerPosition}
        chaserPosition={chaserPosition}
        setPlayerPosition={setPlayerPosition}
        setChaserPosition={setChaserPosition}
      />
    </Container>
  );
};
