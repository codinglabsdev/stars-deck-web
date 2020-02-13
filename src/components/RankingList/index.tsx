import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import * as RankingActions from '~/store/ducks/Ranking/actions';

import { Container, Podium, Divider, List } from './styles';

import Card from '../Card';
import ProfilePicture from '../ProfilePicture';
import Pagination from '../Pagination';

import ApplicationState from '~/store/ducks/ApplicationState';

const RankingList = () => {
  const dispatch = useDispatch();
  const ranking = useSelector((state: ApplicationState) => state.ranking);

  useEffect(() => {
    dispatch(RankingActions.loadRequest());
  }, [dispatch]);

  const imageSize = (position?: number) => {
    if (position === 1) return 150;
    if (position === 2) return 125;
    if (position === 3) return 100;
    return 75;
  };

  const podium = ranking.data
    .slice(0, 3)
    .sort(({ position: a }, { position: b }) => {
      if (a === 2 && b === 1) return -1;
      return 0;
    });
  const list = ranking.data.slice(3);

  return (
    <Container>
      <Podium>
        {podium.map(user => (
          <Card position={user.position} key={user.id} podium>
            <ProfilePicture src={user.avatar} size={imageSize(user.position)} />
            <h2 className="name">{user.name}</h2>
            <h2 className="points">{user.points} pts</h2>
          </Card>
        ))}
      </Podium>
      <Divider />
      <List>
        {list.map(user => (
          <Card position={user.position} key={user.id}>
            <h2 className="position">{user.position}</h2>
            <ProfilePicture src={user.avatar} size={imageSize(user.position)} />
            <div
              style={{
                flex: 'auto',
                textAlign: 'left',
                zIndex: 1
              }}
            >
              <h2 className="name">{user.name}</h2>
            </div>
            <h2 className="points">{user.points} pts</h2>
          </Card>
        ))}
      </List>
      <Pagination current={3} />
    </Container>
  );
};

export default RankingList;
