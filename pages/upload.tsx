import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';
import UploadForm from '../components/uploadForm';

const Upload = () => {
  return (
    <div>
      <Head>
        <title>證書上傳 | 教育部數位證書</title>
      </Head>
      <Nav />
      <UploadForm />
    </div>
  );
};

export default Upload;
