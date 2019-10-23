import React from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Nav from '../components/nav';
import UploadForm from '../components/uploadForm';

const Upload = () => {
  const route = useRouter();
  return (
    <div>
      <Head>
        <title>Home</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>
      <Nav />
      <UploadForm />
      <style jsx global>{`
        html,
        body {
          margin: 0;
          background-color: #f5f5f5;
        }
      `}</style>
    </div>
  );
};

export default Upload;
