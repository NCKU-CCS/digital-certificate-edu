import React from 'react';
import App from 'next/app';
import '../i18n';

export default class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return <Component {...pageProps} />;
  }
}
