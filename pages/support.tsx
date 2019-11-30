import React from 'react';
import Head from 'next/head';
import Nav from '../components/nav';

const supportSchool = [
  {
    school: '正修科技大學 註冊組',
    telephone: '07-7358800 #1102~1106',
    email: 'course@gcloud.csu.edu.tw',
  },
  {
    school: '國立成功大學 註冊組',
    telephone: '06-2757575 #50120',
    email: 'em50120@email.ncku.edu.tw',
  },
  {
    school: '國立清華大學',
    telephone: '03-5712334',
    email: 'registra@my.nthu.edu.tw',
  },
  {
    school: '國立臺北科技大學',
    telephone: '02-27712171 #1119',
    email: 'soup060421@ntut.edu.tw',
  },
];

const Index: React.FC = () => {
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
              <span>電話 : {d.telephone}</span>
              <span>信箱 : {d.email}</span>
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
