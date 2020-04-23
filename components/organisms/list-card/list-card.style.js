import styled from 'styled-components';
import { WHITE, PRIMARY_PURPLE } from '../../../settings/colors.setting';

export const ListCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 27px;
  background-color: ${PRIMARY_PURPLE};
  border-radius: 30px;
  margin-top: 30px;
  cursor: pointer;

  @media (min-width: 992px) {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding-left: 74px;
    padding-right: 74px;
  }
`;

export const Title = styled.h3`
  font-size: 1.2631rem;
  line-height: 1.4em;
  color: ${WHITE};
  margin-bottom: 15px;

  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const AnswersCount = styled.span`
  font-size: 1.0526rem;
  font-weight: 200;
  color: ${WHITE};
`; 
