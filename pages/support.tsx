import React from 'react';
import Head from 'next/head';
import '../i18n';
import { useTranslation } from 'react-i18next';
import Nav from '../components/nav';

const Index: React.FC = () => {
  const { t } = useTranslation();
  const supportSchool = [
    {
      school: t('SCHOOL_CSU'),
      telephone: '07-7358800 #1102~1106',
      email: 'course@gcloud.csu.edu.tw',
    },
    {
      school: t('SCHOOL_NCKU'),
      telephone: '06-2757575 #50120',
      email: 'em50120@email.ncku.edu.tw',
    },
    {
      school: t('SCHOOL_NTHU'),
      telephone: '03-5712334',
      email: 'registra@my.nthu.edu.tw',
    },
    {
      school: t('SCHOOL_NTUT'),
      telephone: '02-27712171 #1119',
      email: 'soup060421@ntut.edu.tw',
    },
  ];

  return (
    <div>
      <Head>
        <title>支援學校 | 教育部數位證書</title>
      </Head>
      <Nav />
      <div className="container">
        {supportSchool.map((d, i) => {
          return (
            <div className="support" key={i}>
              <div>
                <span className="title">{d.school}</span>
              </div>
              <span>
                {t('telephone')}
                {d.telephone}
              </span>
              <span>
                {t('email')}
                {d.email}
              </span>
            </div>
          );
        })}
      </div>
      <style jsx>{`
        .container {
          width: 100vw;
          height: calc(100vh - 99px - 95px);
          margin-top: calc(99px + 95px);
          display: flex;
          justify-content: flex-start;
          align-items: center;
          flex-direction: column;
        }
        .support {
          width: 730px;
          border-radius: 21px;
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
          background-color: #ffffff;
          margin-bottom: 38px;
          padding: 10px 24px 10px 24px;
          color: #8e6969;
        }
        .title {
          -webkit-text-stroke: 0.4px #8e6969;
          font-family: EdwardianScriptITC;
          font-size: 30px;
        }
        .support > span {
          font-family: Calibri;
          font-size: 25px;
          color: #8e6969;
        }
      `}</style>
    </div>
  );
};

export default Index;
