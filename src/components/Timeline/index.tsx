import React from 'react';
import moment from 'moment';
import { IoIosGitPullRequest, IoMdCode } from 'react-icons/io';
import { GoComment } from 'react-icons/go';
import { FiUsers } from 'react-icons/fi';

import { Container, Empty, Content, Tail, Event } from './styles';
import { UserEvent } from '~/store/ducks/UserDetails/types';

interface Props {
  data: UserEvent[];
}

const icon = (type: string) => {
  if (type === 'pr') return <IoIosGitPullRequest size={32} />;
  if (type === 'presentation') return <GoComment size={32} />;
  if (type === 'dojo') return <IoMdCode size={32} />;
  if (type === 'participation') return <FiUsers size={32} />;
  return 'no icon';
};

const Timeline: React.FC<Props> = ({ data }) => (
  <>
    {data.length ? (
      <Container>
        {data.map((event, i) => {
          const position = !(i % 2) ? 'left' : 'right';
          const {
            title,
            type,
            date,
            description,
            location,
            points,
            url,
            id
          } = event;
          return (
            <Event points={points} className={position} key={id}>
              <a href={url}>
                <Content link={!!url}>
                  <div className="topbar">
                    <span>{title}</span>
                    {icon(type)}
                  </div>
                  <div className="info">
                    <span>
                      {moment(date).format('DD/MM/YYYY')} | {location}
                    </span>
                  </div>
                  <div className="description">{description}</div>
                </Content>
              </a>
            </Event>
          );
        })}
      </Container>
    ) : (
      <Empty>This user hasn&apos;t participated in any event yet!</Empty>
    )}
    {data.length && <Tail />}
  </>
);

export default Timeline;
