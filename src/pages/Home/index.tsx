import React, { useRef } from 'react';

import { History } from 'history';
import { Container } from './styles';

import { Header, Paper, TopBar, RankingList, Button } from '~/components';

interface Props {
  history: History;
}

const App: React.FC<Props> = ({ history }) => {
  const paperRef = useRef<HTMLDivElement>(null);
  const goToRanking = () =>
    paperRef.current?.scrollIntoView({ behavior: 'smooth' });
  return (
    <Container>
      <Header>
        <div>
          <h1>Stars Deck</h1>
          <span>Progress & Community Engagement tracker</span>
        </div>
        <Button className="mobile" onClick={goToRanking}>
          See Rankning
        </Button>
      </Header>
      <Paper fowardRef={paperRef}>
        <TopBar />
        <RankingList history={history} />
      </Paper>
    </Container>
  );
};

export default App;
