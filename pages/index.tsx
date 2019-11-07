import React, { useEffect } from 'react';
import Router from 'next/router';
import Head from 'next/head';
import Nav from '../components/nav';

const Index = () => {
  useEffect(() => {
    Router.push('/upload');
  }, []);
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
    </div>
  );
};

export default Index;
