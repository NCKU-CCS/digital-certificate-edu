import React from 'react';
import styled from 'styled-components';
import TemplateImage from '../../static/templates/ncku.jpg';
import A4 from '../../layouts/A4';

enum EType {
  bachelor,
  master,
}

interface IField {
  // student
  studentName: string;
  studentNation?: string;
  studentBirth: string;
  studentId: string;
  college: string;
  department: string;
  degree: string;
  // double_major
  dm_college?: string;
  dm_department?: string;
  dm_degree?: string;
  // minor
  minor?: string;
  // other
  title: string;
  date: string;
  digit_id: string;
  cert_id: string;
  type: EType;
}

const field: IField = {
  // student
  studentName: 'xxx',
  studentNation: '香港',
  studentId: 'F129391835',
  studentBirth: '八十六年七月三十一日生',
  college: '生物科學與科技學院',
  department: '生物科技與產業科學學系學士班',
  degree: '理學學士',
  // double major & minor
  dm_college: '文學院',
  dm_department: '中國文學系學士班',
  dm_degree: '文學學士',
  minor: '化學工程學系',
  // other
  title: '學士學位證書',
  date: '中華民國 108 年 1 月',
  digit_id: '數位字樣',
  cert_id: '(108)成大字第 1111 號',
  type: EType.bachelor,
};

const Title = styled.h1`
  font-size: 28px;
  margin-top: 100px;
  margin-bottom: 5px;
  text-align: center;
  letter-spacing: 3px;
`;

const SubTitle = styled.div`
  width: 100%;
  font-size: 15px;
  display: flex;
  flex-direction: row-reverse;
`;

const Text = styled.p`
  font-size: 20px;
  margin-left: 20px;
  margin-bottom: 5px;
  letter-spacing: 1px;
`;

const Date = styled(Text)`
  position: absolute;
  bottom: 80px;
  letter-spacing: 3px;
  font-size: 15px;
`;

const Template = () => {
  const format = (input: string) => {
    const output: string[] = [];
    let temp = '';
    for (const c of input) {
      temp = temp.concat(c);
      if (temp.length % 16 === 0) {
        output.push(temp);
        temp = '';
      }
    }
    output.push(temp);
    return output;
  };
  return (
    <A4 title={field.title} backgroundUri={TemplateImage}>
      <Title>{field.title}</Title>
      <SubTitle>
        <p>
          {field.cert_id}
          <br />
          學號：{field.studentId}
        </p>
      </SubTitle>
      {/* 1 */}
      <Text>
        學生　{field.studentName}
        {field.studentNation ? `　　　${field.studentNation}` : ''}
      </Text>
      {/* 2 */}
      <Text>{field.studentBirth}</Text>
      {/* 3 */}
      <Text>在本校　　{field.college}</Text>
      {/* 4, 5 */}
      {EType.bachelor === field.type ? (
        <React.Fragment>
          <Text>{field.department}</Text>
          {format(
            `修業期滿成績及格准予畢業依學位授予法之規定授予${field.degree}此證`,
          ).map((e, i) => (
            <Text key={i}>{e}</Text>
          ))}
        </React.Fragment>
      ) : (
        <React.Fragment>
          {format(
            `${field.department}　研究期滿經碩士學位考試合格依學位授予法之規定授予　　${field.degree}　　`,
          ).map((e, i) => (
            <Text key={i}>{e}</Text>
          ))}
          <Text>此證</Text>
        </React.Fragment>
      )}
      {/* 6, 7, 8 */}
      {field.dm_college ? (
        <React.Fragment>
          <Text>
            雙主修：{field.dm_college}　{field.dm_department}
          </Text>
          <Text>　　　　授予　{field.dm_degree}　學位</Text>
        </React.Fragment>
      ) : (
        <></>
      )}
      {field.minor ? (
        <React.Fragment>
          <Text>輔系：{field.minor}</Text>
        </React.Fragment>
      ) : (
        <></>
      )}
      {/* footer */}
      <Date>
        {field.date}
        <br />
        {field.digit_id}
      </Date>
    </A4>
  );
};

export default Template;
