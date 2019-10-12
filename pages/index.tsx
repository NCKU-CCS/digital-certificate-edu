import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const Home = () => (
  <div>
    <Head>
      <title>Home</title>
    </Head>
    <Nav />
    <style jsx global>{`
      html,
      body {
        margin: 0;
      }
    `}</style>
  </div>
);

export default Home;
