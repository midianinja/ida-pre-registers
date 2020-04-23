import React from 'react';
import PropTypes from 'prop-types';
import categories from '../../../collections/categories'
import { ListCardWrapper, Title, AnswersCount } from './list-card.style';

const ListCard = ({ category, answersCount, onClick }) => (
  <ListCardWrapper onClick={onClick}>
    <Title>
      {categories.find(({ id }) => id === category).label}
    </Title>
    <AnswersCount>
      {`${answersCount} respostas`}
    </AnswersCount>
  </ListCardWrapper>
);

ListCard.propTypes = {
  category: PropTypes.string.isRequired,
  answersCounter: PropTypes.number.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ListCard;
