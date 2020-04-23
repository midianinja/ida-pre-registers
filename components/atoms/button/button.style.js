import styled from 'styled-components';
import { WHITE, GREEN } from '../../../settings/colors.setting';

export const ButtonContainer = styled.button`
  width: 100%;
  height: 55px;
  background-color: ${GREEN};
  color: ${WHITE};
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  line-height: 1rem;
  font-size: 1.052rem;
  line-height: 1em;
  font-weight: 700;
  cursor: pointer;

  &:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  ${(props) => (
    props.loading
      ? `
        cursor: not-allowed;
        padding: 2px;
      ` : ''
  )}

  ${(props) => props.customStyle}
`;

export const Icon = styled.img`
  vertical-align: bottom;
  transition-duration: 0.4s;
  margin-left: -4px;
`;

export const Loading = styled.img`
  width: 18px;
  will-change: auto;
  animation: loading 2s infinite;
  
  @keyframes loading {
    from { transform: rotate(0); }
    to { transform: rotate(360deg); }
  }
`;
