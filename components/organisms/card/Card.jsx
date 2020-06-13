import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Tag from '../../atoms/tag/Tag';
import {
  CardWrapper, Name, Avatar, Location,
  Occupation, Instagram, InterestsWrapper, SeeMore,
  QuizWrapper, Question, Answer, InfoWrapper,
} from './card.style';

const renderTags = ({ interestAreas }) => interestAreas.map(({ label, color }, index) => (
  <Tag color={color} key={label + index}>{label.replace('\"', '')}</Tag>
));

const renderQuestions = ({ questions, all }) => questions.map((question) => 
  <>
    <Question>{question.text}</Question>
    <Answer>
      {
        Object.entries(all).find(answer => answer[0] === question.key)[1].trim() || 'Não preenchido.'
      }
    </Answer>
  </>
);

const Card = ({
  name, city, state, occupation,
  instagram, interestAreas, ninjaQuestion, howYouMeet,
  photo, questions, all,
}) => {
  const [open, setOpen] = useState(false);
  return (
    <CardWrapper>
      <InfoWrapper>
        <div>
          <Avatar src={photo} />
        </div>
        <div>
          <Name>
            {name}
          </Name>
          <Location>
            {`${city}/${state}`}
          </Location>
          <Occupation>
            {occupation}
          </Occupation>
          <Instagram>
            {instagram}
          </Instagram>
          <InterestsWrapper>
            {renderTags({ interestAreas })}
          </InterestsWrapper>
        </div>        
      </InfoWrapper>
      <QuizWrapper open={open}>
        { renderQuestions({ questions, all }) }
      </QuizWrapper>
      <SeeMore onClick={() => setOpen(!open)}>
        { !open ? 'Ver inscrição completa +' : 'Ver resumo da inscrição -' }
      </SeeMore>
    </CardWrapper>
  );
}

Card.propTypes = {
  all: PropTypes.array,
  photo: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  city: PropTypes.string.isRequired,
  state: PropTypes.string.isRequired,
  occupation: PropTypes.string.isRequired,
  instagram: PropTypes.string.isRequired,
  interestAreas: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired,
  ninjaQuestion: PropTypes.string.isRequired,
  howYouMeet: PropTypes.string.isRequired,
};

export default Card;
