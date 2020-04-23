import styled from 'styled-components';
import { WHITE } from '../../../settings/colors.setting';

export const TagWrapper = styled.div`
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 9px;
  background-color: ${({ color }) => color};
  border-radius: 7px;
  font-size: 0.6842rem;
  color: ${WHITE};
  margin-top: 5px;
  margin-bottom: 5px;
  margin-right: 5px;
  letter-spacing: 0.16px;
  font-weight: 200;

  ${(props) => {
    if (props.big) {
      return `
        padding: 10px 14px;
        font-size: 0.8368rem;
      `;
    }
  }}
`;

export const DeleteIcon = styled.img`
  width: 12px;
  height: 12px;
  margin-left: 12px;
`;

export default TagWrapper;
