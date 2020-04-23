import styled from 'styled-components';
import { WHITE } from '../../../settings/colors.setting';

export const InputWrapper = styled.div`
  width: 100%;
  height: 55px;
  background-color: ${WHITE};
  text-align: center;
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25);
  border-radius: 10px;
  padding: 5px 20px;
  position: relative;

  ${({ slim }) => {
    if (slim) {
      return `
        background-color: transparent;
        border: solid 2px ${WHITE};
        color: ${WHITE};
      `;
    }

    return ``;
  }}

`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  width: 100%;
  cursor: pointer;
`;

export const Icon = styled.img`
  position: absolute;
  right: 18px;
  top: 16px;
  width: 20px;
  height: 20px;
`;

export const Input = styled.input`
  display: none;
`;
