import React from 'react';
import PropTypes from 'prop-types';

const Store = React.createContext();

const initialState = {
  navigationOpen: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case 'OPEN_NAVIGATION':
      return { ...state, navigationOpen: true };
    case 'CLOSE_NAVIGATION':
      return { ...state, navigationOpen: false };
    default:
      return state;
  }
};

export const StoreProvider = (props) => {
  const [state, dispatch] = React.useReducer(reducer, { ...initialState });
  const value = { state, dispatch };
  const { children } = props;
  return <Store.Provider value={value}>{children}</Store.Provider>;
};

StoreProvider.propTypes = {
  children: PropTypes.node,
};

StoreProvider.defaultProps = {
  children: [],
};

export default Store;
