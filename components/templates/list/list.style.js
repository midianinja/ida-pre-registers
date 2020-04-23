import styled from 'styled-components';
import { WHITE, WHITE50, PINK } from '../../../settings/colors.setting'

export const ListTemplateWrapper = styled.div`
  width: 100%;
  max-width: 992px;
  margin-left: auto;
  margin-right: auto;
  margin-top: 21px;
  padding: 20px;
`;

export const ListTitle = styled.h2`
  color: ${WHITE};
  line-height: 1.25em;
  font-weight: 300;

  > strong {
    position: relative;
    left: -4px;
  }
`;

export const ListAnswersAmount = styled.p`
  position: relative;
  color: ${WHITE50};
  line-height: 1.25em;
  left: -4px;
  margin-top: 4px;

  > strong {
    position: relative;
    right: -4px;
  }
`;

export const AnswersWrapper = styled.div`
`;

export const SeeAllLists = styled.a`
  display: inline-block;
  color: ${PINK};
  text-decoration: underline;
  font-size: 0.8421rem;
  font-weight: 200;
  margin-top: 34px;
  margin-bottom: 44px;
`;
