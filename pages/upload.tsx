import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import UploadForm from '../components/uploadForm';

const Upload = () => {
  return (
    <div>
      <Head>
        <title>Home</title>
      </Head>
      <Nav />
      <UploadForm />
    </div>
  );
};

export default Upload;
