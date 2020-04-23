import styled from 'styled-components';
import { PINK, WHITE, PRIMARY_PURPLE } from '../../../settings/colors.setting';
 
export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;

  ${(props) => {
    if (!props.open) {
      return `
        display: none;
      `;
    }

    return '';
  }}
`;

export const Modal = styled.nav`
  width: 100%;
  height: 100%;
  background-color: ${PINK};
`;

export const NavigationWrapper = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding-left: 44px;
  padding-right: 44px;
  width: 100%;
  height: 100%;
`;

export const NavigationItem = styled.li`
  & + & {
    margin-top: 30px;
  }

  > a {
    color: ${WHITE};
    font-size: 2.625rem;
    line-height: 1.25em;
    font-weight: 200;

    &:hover {
      color: ${PRIMARY_PURPLE};
    }
  }
`;
