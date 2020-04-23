import styled from 'styled-components';
import { PINK, WHITE } from '../../../settings/colors.setting';

export const HeaderComponent = styled.header``;

export const NavigationContent = styled.div`
  display: flex;
  justify-content: flex-end;
  position: relative;
  max-width: 992px;
  padding-top: 23px;
  padding-left: 20px;
  padding-right: 20px;
  margin-left: auto;
  margin-right: auto;

  @media (min-width: 992px) {
    justify-content: space-between;
  }
`;

export const MobileLogo = styled.img`
  position: absolute;
  width: 120px;
  left: -40px;
  top: -62px;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Logo = styled.img`
  display: none;

  @media (min-width: 992px) {
    display: inline-block;
    width: 30px;
  }
`;

export const NavBurger = styled.img`
  width: 31px;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const Title = styled.h1`
  display: none;
  width: 100%;
  font-size: 1rem;
  margin-left: 11px;
  color: ${WHITE};

  @media (min-width: 992px) {
    display: inline-block;
  }
`;

export const MobileTitle = styled.h1`
  width: 100%;
  text-align: center;
  font-size: 1.33333rem;
  color: ${WHITE};
  margin-top: 40px;

  @media (min-width: 992px) {
    display: none;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const Navigation = styled.ul`
  display: none;

  @media (min-width: 992px) {
    display: flex;
    align-items: center;
  }
`;

export const NavigationItem = styled.li`
  display: inline-block;

  & + & {
    margin-left: 30px;
  }

  & > a {
    font-size: 1rem;
    color: ${WHITE};
  }

  & > a.active {
    color: ${PINK};
  }
`;
