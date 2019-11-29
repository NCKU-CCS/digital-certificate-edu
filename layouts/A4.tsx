import React, { FC } from 'react';
import styled from 'styled-components';
import Head from 'next/head';
import GlobalStyles from './GlobalStyles';

const Main = styled.main<{ uri: string }>`
  position: relative;
  display: inline-block;
  width: 100%;
  height: 100%;
  background: white url(${props => props.uri}) no-repeat center / contain;
  padding: 0 60px;
`;

type TProps = {
  title: string;
  backgroundUri: string;
  containerStyle?: React.CSSProperties;
  mode?: 'vertical' | 'horizontal';
};

const A4: FC<TProps> = ({
  backgroundUri,
  children,
  title,
  mode = 'vertical',
  containerStyle,
}) => {
  return (
    <>
      <Head>
        <title>{title}</title>
      </Head>
      <Main uri={backgroundUri} style={containerStyle}>
        {children}
      </Main>
      <GlobalStyles mode={mode} />
    </>
  );
};

export default A4;
