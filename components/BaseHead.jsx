import React from 'react';
import Head from 'next/head';
import PropTypes from 'prop-types';

const BaseHead = ({ description, keywords, title }) => (
  <Head>
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta name="keywords" content={keywords.join(',')} />
    <meta name="language" content="en-us" />
    <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />

    <script src="https://apis.google.com/js/api.js"></script>
    <script src="https://apis.google.com/js/platform.js" async defer></script>

    <link href="/static/css/fonts.css" rel="stylesheet" />
    <link href="/static/css/reset.css" rel="stylesheet" />
  </Head>
);

BaseHead.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  keywords: PropTypes.arrayOf(PropTypes.string),
};

BaseHead.defaultProps = {
  keywords: [],
};

export default BaseHead;
