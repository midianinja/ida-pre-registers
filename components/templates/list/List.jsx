import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import Card from '../../organisms/card/Card';
import Filter from '../../organisms/filter/Filter';
import Pagination from '../../organisms/pagination/Pagination';
import {
  ListTemplateWrapper, ListTitle, ListAnswersAmount, AnswersWrapper,
  SeeAllLists,
} from './list.style';
import {
  TAG_COLOR_1, TAG_COLOR_2, TAG_COLOR_3, TAG_COLOR_4
} from '../../../settings/colors.setting';

const COLORS = [TAG_COLOR_1, TAG_COLOR_2, TAG_COLOR_3, TAG_COLOR_4];
const getRandomColor = () => COLORS[Math.floor(Math.random() * COLORS.length)];

const renderCards = ({ answers }) => answers.map(answer => (
  <Card
    photo={`https://api.adorable.io/avatars/${Math.floor(Math.random() * 200)}`}
    key={answer.instagram}
    name={`${answer.first_name} ${answer.last_name}`}
    city={answer.city}
    state={answer.state}
    occupation={answer.occupation}
    instagram={answer.instagram}
    interestAreas={
      answer.interest_areas.split(', ').map((label) => ({
        label,
        color: getRandomColor(),
      }))
    }
    ninjaQuestion={answer.ninja_question || 'Sem descrição.'}
    howYouMeet={answer.how_you_met || 'Não preenchido.'}
  />
));

const List = ({
  title, answersAmount, answers, onFilterChange,
  onPrevClick, onNextClick, pageNumber, end,
  begin,
}) => (
  <ListTemplateWrapper>
    <ListTitle>
      Lista
      &nbsp;
      <strong>{title}</strong>
    </ListTitle>
    <ListAnswersAmount>
      <strong>{answersAmount}</strong>
      &nbsp;
      respostas
    </ListAnswersAmount>
    <Link href="/lists">
      <SeeAllLists>Ver todas as listas</SeeAllLists>
    </Link>
    <Filter
      onFilterChange={onFilterChange}
    />
    <AnswersWrapper>
      {renderCards({ answers })}
    </AnswersWrapper>
    <Pagination
      pageNumber={pageNumber}
      end={end}
      begin={begin}
      onNextClick={onNextClick}
      onPrevClick={onPrevClick}
    />
  </ListTemplateWrapper>
);

List.defaultProps = {
  title: '',
  answersAmount: 0,
  answers: [],
};

List.propTypes = {
  title: PropTypes.string,
  answersAmount: PropTypes.number,
  pageNumber: PropTypes.number.isRequired,
  answers: PropTypes.array,
  end: PropTypes.bool.isRequired,
  begin: PropTypes.bool.isRequired,
  onFilterChange: PropTypes.func.isRequired,
  onNextClick: PropTypes.func.isRequired,
  onPrevClick: PropTypes.func.isRequired,
};

export default List;
