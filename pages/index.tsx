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
        <title>教育部數位證書</title>
      </Head>
      <Nav />
    </div>
  );
};

export default Index;
