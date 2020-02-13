import React from 'react';

import { Container } from './styles';

import { Header, Paper, TopBar, RankingList } from '~/components';

export default function App() {
  return (
    <Container>
      <Header />
      <Paper>
        <TopBar />
        <RankingList />
      </Paper>
    </Container>
  );
}
