import styled from 'styled-components';
import { WHITE } from '../../../settings/colors.setting';

export const Content = styled.section`
  min-height: calc(100vh - 130px);
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 32px;
  padding-right: 32px;
  margin-top 73px;

  @media (min-width: 992px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Title = styled.h2`
  font-size: 2.33333rem;
  font-style: normal;
  font-weight: 700;
  line-height: 1.14em;
  color: ${WHITE};
`;

export const Description = styled.h3`
  font-size: 1.2631rem;
  font-style: normal;
  font-weight: 300;
  line-height: 1.25em;
  color: ${WHITE};
  margin-top: 24px;
`;

export const Form = styled.form`
  padding-top: 62px;
  padding-bottom: 62px;

  @media (min-width: 992px) {
    display: grid;
    grid-gap: 20px;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: [<auto-track-list>] 1fr 1fr [<auto-track-list>] 1fr;
  }
`;

export const InputGroup = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
  @media(min-width: 992px) {
    margin-top: 0px;
    margin-bottom: 0px;
  }
`;

export const ErrorText = styled.p`
  color: ${WHITE};
  font-size: 0.7368rem;
  margin-top: 7px;
  text-align: center;
`;
