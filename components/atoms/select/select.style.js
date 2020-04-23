import styled from 'styled-components';
import {
  LIGTH_PURPLE, PRIMARY_PURPLE, WHITE,
  MEDIUM_PURPLE,
} from '../../../settings/colors.setting';

export const Content = styled.div`
  position: relative;
  width: 100%;
  height: 55px;
  border: solid 2px ${PRIMARY_PURPLE};
  border-radius: 10px;

  ${({ opened }) => {
    if (opened) {
      return `
        border: none;
        background-color: ${PRIMARY_PURPLE};
        box-shadow: 0px 30px 50px rgba(0, 0, 0, 0.15);

        @media (min-width: 992px) {
          border-radius: 10px 10px 0 0;
        }
      `;
    }

    return null;
  }}

  ${(props) => {
    if (props.withValue) {
      return `
        background-color: ${PRIMARY_PURPLE};
        color: ${WHITE};
      `;
    }

    return '';
  }}
`;

export const Placeholder = styled.span`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 55px;
  width: 100%;
  height: 100%;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1.052rem;
  line-height: 1em;
  font-weight: 300;
  color: ${LIGTH_PURPLE};

  ${(props) => {
    if (props.withValue) {
      return `
        color: ${WHITE};
      `;
    }

    return '';
  }}
`;

export const DropdownIcon = styled.img`
  position: absolute;
  width: 15px;
  top: 17px;
  right: 23px;
`;

export const List = styled.ul`
  width: 100%;
  max-height: 200px;
  top: 100%;
  overflow-y: auto;
  background-color: ${PRIMARY_PURPLE};
  border-radius: 0 0 10px 10px;

  @media (min-width: 992px) {
    position: absolute;
    z-index: 1;
  }
`;

export const Option = styled.li`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 45px;
  color: ${LIGTH_PURPLE};
  font-size: 1.052rem;
  line-height: 1em;
  font-weight: 300;
  cursor: pointer;
  
  &:hover {
    background-color: ${MEDIUM_PURPLE};
    color: ${WHITE};
  }
`;
