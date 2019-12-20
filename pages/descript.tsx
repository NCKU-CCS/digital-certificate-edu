import React from 'react';
import Head from 'next/head';
import { useTranslation } from 'react-i18next';
import Nav from '../components/nav';
import Image_1 from '../static/describe_1.png';
import Image_2_1 from '../static/describe_2_1.png';
import Image_2_2 from '../static/describe_2_2.png';
import Image_3_1 from '../static/describe_3_1.png';
import Image_3_2 from '../static/describe_3_2.png';
import Image_3_3 from '../static/describe_3_3.png';

const Index = () => {
  const { t } = useTranslation();
  return (
    <div>
      <Head>
        <title>使用說明 | 教育部數位證書</title>
      </Head>
      <Nav />
      <div className="stepContain">
        {/* 1 */}
        <div className="stepText">{t('DESCRIPT_1')}</div>
        <div className="stepImages">
          <img src={Image_1} />
        </div>

        {/* 2 */}
        <div className="stepText">{t('DESCRIPT_2')}</div>
        <div className="stepImages">
          <img src={Image_2_1} />
          <img src={Image_2_2} />
        </div>

        {/* 3 */}
        <div className="stepText">{t('DESCRIPT_3')}</div>
        <div className="stepImages" style={{ marginBottom: 0 }}>
          <img src={Image_3_1} />
        </div>
        <div className="stepImages">
          <img src={Image_3_2} />
          <img src={Image_3_3} />
        </div>
      </div>
      <style jsx>{`
        .stepContain {
          margin-top: 172px;
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: column;
        }
        .stepText {
          width: calc(100% - 160px);
          -webkit-text-stroke: 0.4px #8e6969;
          font-family: EdwardianScriptITC;
          font-size: 33px;
          line-height: 1.21;
          text-align: center;
          color: #8e6969;
          margin: 20px 0px;
        }
        .stepImages {
          width: calc(100% - 160px);
          display: flex;
          justify-content: center;
          align-items: center;
          flex-direction: row;
          margin-bottom: 87px;
        }
        .stepImages > img {
          width: 540px;
          height: 337.5px;
          object-fit: contain;
          margin: 22px;
        }
      `}</style>
    </div>
  );
};

export default Index;
