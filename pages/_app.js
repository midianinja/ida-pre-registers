/* eslint-disable react/jsx-filename-extension */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import App from 'next/app';
import Main from '../components/main/Main';
import { StoreProvider } from '../store/Store';
import '../public/static/css/fonts.css';
import '../public/static/css/reset.css';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <StoreProvider>
        <Main>
          <Component {...pageProps} />
        </Main>
      </StoreProvider>
    );
  }
}
