import styled from 'styled-components';
import { PRIMARY_PURPLE, LIGTH_PURPLE, WHITE } from '../../../settings/colors.setting';

export const InputContainer = styled.div`
  text-align: center;
  border: solid 2px ${PRIMARY_PURPLE};
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 5px 10px;
  position: relative;
  height: 55px;
  
  ${(props) => props.customStyle}
`;

export const InputAtom = styled.input`
  width: 100%;
  height: 100%;
  background-color: transparent;
  text-align: center;
  padding-left: 30px;
  padding-right: 30px;
  font-size: 1.052rem;
  line-height: 1em;
  color: ${WHITE};

  &::placeholder {
    color: ${LIGTH_PURPLE};
  }

  ${(props) => props.customStyle}
`;

export const Loading = styled.img`
  position: absolute;
  right: 10px;
  top: 0;
  bottom: 0;
  margin: auto;
  will-change: auto;
  width: 12px;
  animation: loading 1.5s infinite;

  @keyframes loading {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }
`;
