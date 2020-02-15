import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { History } from 'history';
import * as RankingActions from '~/store/ducks/Ranking/actions';

import { Container, Podium, Divider, List } from './styles';

import Card from '../Card';
import ProfilePicture from '../ProfilePicture';
import Pagination from '../Pagination';
import Loader from '../Loader';

import ApplicationState from '~/store/ducks/ApplicationState';
import { RankingData } from '~/store/ducks/Ranking/types';

interface Props {
  history: History;
}

const RankingList: React.FC<Props> = ({ history }) => {
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

  const podium = ranking.data.slice(0, 3);

  const list = ranking.data.slice(3);

  const goToUserDetails = (id: string) => {
    history.push(`user/${id}/details`);
  };

  const renderPodiumPosition = (user: RankingData, position: number) =>
    user && (
      <Card
        position={position}
        key={user.id}
        podium
        onClick={() => goToUserDetails(user.username)}
      >
        <ProfilePicture src={user.avatar} size={imageSize(user.position)} />
        <h2 className="name">{user.name}</h2>
        <h2 className="points">{user.points} pts</h2>
      </Card>
    );

  return (
    <Container>
      {ranking.loading ? (
        <Loader />
      ) : (
        <>
          {podium.length && (
            <>
              <Podium>
                {renderPodiumPosition(podium[1], 2)}
                {renderPodiumPosition(podium[0], 1)}
                {renderPodiumPosition(podium[2], 3)}
              </Podium>

              <Divider />
            </>
          )}
          <List>
            {list.map((user, i) => (
              <Card
                position={i + 4}
                key={user.id}
                onClick={() => goToUserDetails(user.username)}
              >
                <h2 className="position">{i + 4}</h2>
                <ProfilePicture src={user.avatar} size={imageSize(i + 4)} />
                <div
                  style={{
                    flex: 'auto',
                    textAlign: 'left',
                    zIndex: 1,
                  }}
                >
                  <h2 className="name">{user.name}</h2>
                </div>
                <h2 className="points">{user.points} pts</h2>
              </Card>
            ))}
          </List>
          <Pagination current={3} />
        </>
      )}
    </Container>
  );
};

export default RankingList;
