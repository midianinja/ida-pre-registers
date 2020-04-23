import React, { useEffect, useContext } from 'react';
import PropTypes from 'prop-types';
import Header from '../organisms/header/Header';
import Navigation from '../templates/navigation/Navigation';
import { getLists } from './main.controller';
import Store from '../../store/Store';
import { MainWrapper } from './main.style';

const Main = ({ children }) => {
  const { state, dispatch } = useContext(Store) || {};
  useEffect(() => {
    getLists({ dispatch });
  }, []);
  return (
    <MainWrapper>
      <Header
        onOpenNavigation={() => {
          dispatch({
            type: 'OPEN_NAVIGATION',
          });
        }}
      />
      { children }
      <Navigation
        open={state.navigationOpen}
        onClose={() => {
          dispatch({
            type: 'CLOSE_NAVIGATION',
          });
        }}
      />
    </MainWrapper>
  );
};

Main.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Main;
