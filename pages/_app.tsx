import React from 'react';
import App from 'next/app';
import i18n from '../i18n';

export default class MyApp extends App {
  componentDidMount() {
    if (navigator.language.match(/en*/i)) {
      i18n.changeLanguage('en');
    }
  }

  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
