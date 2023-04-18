import PropTypes from 'prop-types';
import { Section, List, Item, Percentage, Title } from './Statistics.styled';

export const RandomHexColor = function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
};
// console.log(RandomHexColor());

export const Statistics = ({ title, stats }) => {
  return (
    <Section className="statistics">
      {title && <Title className="title">{title}</Title>}

      <List className="stat-list">
        {stats.map(stat => {
          return (
            <Item
              key={stat.id}
              className="item"
              style={{
                backgroundColor: RandomHexColor(),
              }}
            >
              <span className="label">{stat.label}</span>
              <Percentage className="percentage">{stat.percentage}%</Percentage>
            </Item>
          );
        })}
      </List>
    </Section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
