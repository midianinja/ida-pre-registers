import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import {
  HeaderComponent, MobileLogo, Logo, NavBurger,
  NavigationContent, MobileTitle, LogoWrapper, Title,
  Navigation, NavigationItem,
} from './header.style';

const Header = ({ onOpenNavigation }) => (
  <HeaderComponent>
    <NavigationContent>
      <MobileLogo src="/static/icons/ida-logo.svg" />
      <LogoWrapper>
        <Logo src="/static/icons/ida-logo.svg" />
        <Title>Identidade Digital Ativista</Title>
      </LogoWrapper>
      <Navigation>
        <NavigationItem>
          <Link activeClassName="active" href="/lists">
            <a>Listas</a>
          </Link>
        </NavigationItem>
        <NavigationItem>
          <Link activeClassName="active" href="/">
            <a>Adicionar Lista</a>
          </Link>
        </NavigationItem>
      </Navigation>
      <NavBurger
        src="/static/icons/nav-burger.svg"
        onClick={onOpenNavigation}
      />
    </NavigationContent>
    <MobileTitle>Identidade Digital Ativista</MobileTitle>
  </HeaderComponent>
);

Header.propTypes = {
  onOpenNavigation: PropTypes.func.isRequired,
};

export default Header;
