import styled from 'styled-components';
import { 
  WHITE50, WHITE,
} from '../../../settings/colors.setting';

export const PaginationWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 1fr auto;
  align-items: center;
  margin-top: 20px;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 992px) {
    margin-top: 40px;
    margin-bottom: 20px;
  }
`;

export const TextButton = styled.span`
  font-size: 1.0526rem;
  color: ${WHITE50};

  ${(props) => {
    if (props.hide) {
      return `
        visibility: hidden;
      `;
    }
  }}
`;

export const PageIndicationSelectWrapper = styled.div`
`;

export const PageIndiction = styled.span`
  display: flex;
  justify-content: center;
  align-items: center;
  color: ${WHITE};
  font-size: 2.5263rem;
  line-height: 1em;
  font-weight: 200;
`;

export const DropdownIcon = styled.img`
  width: 14px;
  height: 14px;
  position: relative;
  top: -2px;
  margin-left: 5px;
  vertical-align: middle;
`;


