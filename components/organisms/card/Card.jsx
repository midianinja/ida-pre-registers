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

const Card = ({
  name, city, state, occupation,
  instagram, interestAreas, ninjaQuestion, howYouMeet,
  photo,
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
        <Question>Você quer ser NINJA por quê?</Question>
        <Answer>{ninjaQuestion}</Answer>
        <Question>Como Conheceu a Mídia NINJA?</Question>
        <Answer>{howYouMeet}</Answer>
      </QuizWrapper>
      <SeeMore onClick={() => setOpen(!open)}>
        { !open ? 'Ver inscrição completa +' : 'Ver resumo da inscrição -' }
      </SeeMore>
    </CardWrapper>
  );
}

Card.propTypes = {
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
