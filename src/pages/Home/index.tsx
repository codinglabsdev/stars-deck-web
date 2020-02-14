import React from 'react';

import { History } from 'history';
import { Container } from './styles';

import { Header, Paper, TopBar, RankingList } from '~/components';

interface Props {
  history: History;
}

const App: React.FC<Props> = ({ history }) => {
  return (
    <Container>
      <Header>
        <div>
          {' '}
          <h1>Stars Deck</h1>
          <span>Progress & Community Engagement tracker</span>
        </div>
      </Header>
      <Paper>
        <TopBar />
        <RankingList history={history} />
      </Paper>
    </Container>
  );
};

export default App;
