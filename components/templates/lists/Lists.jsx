import React from 'react';
import PropTypes from 'prop-types';
import ListCard from '../../organisms/list-card/ListCard';
import {
  ListsWrapper, Title, Content,
} from './lists.style';

const renderCards = ({ lists, onClick }) => lists.map((list) => (
  <ListCard
    key={list._id}
    category={list.category}
    answersCount={list.answers_count}
    onClick={() => onClick('/list/[id]', `/list/${list._id}`)}
  />
));

const Lists = ({ items, onCardClick }) => (
  <ListsWrapper>
    <Title>Listas cadastradas no IDa</Title>
    <Content>
      {renderCards({ lists: items, onClick: onCardClick })}
    </Content>
  </ListsWrapper>
);

Lists.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    _id: PropTypes.string.isRequired,
    category: PropTypes.string.isRequired,
    answers_count: PropTypes.number.isRequired,
  })).isRequired,
  onCardClick: PropTypes.func.isRequired,
};

export default Lists;
