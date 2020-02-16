import React, { useEffect } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { History } from 'history';
import * as RankingActions from '~/store/ducks/Ranking/actions';

import { Container, Podium, Divider, List } from './styles';

import Card from '../Card';
import ProfilePicture from '../ProfilePicture';
import Loader from '../Loader';

import ApplicationState from '~/store/ducks/ApplicationState';

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

  const podium = ranking.data.filter(({ position }) => position <= 3);

  const list = ranking.data.filter(({ position }) => position > 3);

  const goToUserDetails = (id: string) => {
    history.push(`user/${id}/details`);
  };

  return (
    <Container>
      {ranking.loading ? (
        <Loader />
      ) : (
        <>
          {podium.length && (
            <>
              <Podium>
                {podium.map(user => {
                  return (
                    <Card
                      position={user.position}
                      key={user.id}
                      podium
                      onClick={() => goToUserDetails(user.username)}
                    >
                      <ProfilePicture
                        src={user.avatar}
                        size={imageSize(user.position)}
                      />
                      <h2 className="name">{user.name}</h2>
                      <h2 className="points">{user.points} pts</h2>
                    </Card>
                  );
                })}
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
                <h2 className="points">
                  {user.points}
                  <span>pts</span>
                </h2>
              </Card>
            ))}
          </List>
        </>
      )}
    </Container>
  );
};

export default RankingList;
