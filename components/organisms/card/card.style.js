import styled from 'styled-components';
import {
  PRIMARY_PURPLE, MEDIUM_PURPLE, WHITE, WHITE50,
} from '../../../settings/colors.setting';

export const CardWrapper = styled.div`
  background-color: ${MEDIUM_PURPLE};
  box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.15);
  border-radius: 40px;
  padding-top: 43px;
  padding-left: 26px;
  padding-right: 26px;
  padding-bottom: 26px;

  & + & {
    margin-top: 60px;
  }

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 400px 1fr;
    grid-gap: 20px;
  }
`;

export const InfoWrapper = styled.div`
  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: auto 1fr;
    grid-gap: 20px;
    align-items: center;
  }
`;

export const Avatar = styled.img`
  display: block;
  width: 140px;
  height: 140px;
  border-radius: 50%;
  margin-left: auto;
  margin-right: auto;
  background-color: ${PRIMARY_PURPLE};
  margin-bottom: 29px;
  border: none;

  @media (min-width: 992px) {
    margin-left: 0;
    margin-right: 0;
  }
`;

export const Name = styled.h3`
  color: ${WHITE};
  text-align: center;
  font-size: 1.263rem;
  line-height: 1.25em;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const Location = styled.p`
  margin-top: 8px;
  color: ${WHITE};
  text-align: center;
  font-size: 0.9473rem;
  line-height: 1.25em;
  font-weight: 200;
  margin-bottom: 30px;

  @media (min-width: 992px) {
    text-align: left;
  }
`;

export const Occupation = styled.p`
  font-size: 1.0526rem;
  font-weight: 200;
  line-height: 1.25em;
  color: ${WHITE};
  margin-bottom: 6px;
`;

export const Instagram = styled.p`
  font-size: 1.0526rem;
  font-weight: 200;
  line-height: 1.25em;
  color: ${WHITE};
`;

export const InterestsWrapper = styled.ul`
  margin-top: 15px;
`;

export const SeeMore = styled.span`
  padding-top: 30px;
  padding-bottom: 10px;
  display: block;
  text-align: center;
  color: ${WHITE50};
  font-size: 0.8421rem;
  text-align: center;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const QuizWrapper = styled.div`
  margin-top: 45px;
  padding-top: 50px;
  border-top: solid 1px; ${WHITE50};
  color: ${WHITE};

  ${(props) => {
    if (!props.open) {
      return `display: none;`;
    }

    return ``;
  }}

  @media (min-width: 992px) {
    display: block;
    padding-top: 0px;
    margin-top: 0px;
    padding-left: 20px;
    border-left: solid 1px; ${WHITE50};
    border-top: none;
  }
`;

export const Question = styled.h3`
  font-size: 1.0526rem;
  line-height: 1.25em;
  margin-bottom: 15px;
`;

export const Answer = styled.p`
  font-size: 0.7368rem;
  font-weight: 200;
  line-height: 1.4em;
  margin-bottom: 36px;
`;
