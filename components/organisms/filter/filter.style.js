import styled from 'styled-components';
import { 
  WHITE50,
} from '../../../settings/colors.setting';

export const FilterWrapper = styled.div`
  margin-bottom: 30px;

  @media (min-width: 992px) {
    margin-bottom: 60px;
  }
`;

export const ToggleContainer = styled.div`
  display: none;
  grid-template-columns: 1f;
  grid-gap: 20px;
  margin-bottom: 30px;

  ${(props) => {
    if (props.open) {
      return `
        display: grid;
      `;
    }

    return '';
  }}

  @media (min-width: 992px) {
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
  }
`;

export const ToggleButton = styled.span`
  display: block;
  text-align: center;
  color: ${WHITE50};
  font-size: 1.0526rem;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const InterestsWrapper = styled.ul`
  margin-top: 5px;
`;
  
