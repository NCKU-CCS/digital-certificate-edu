import React from 'react';
import styled from 'styled-components';
import TemplateImage from '../../static/templates/ncku.jpg';
import A4 from '../../layouts/A4';

const Title = styled.h1`
  font-size: 28px;
  margin-top: 100px;
  margin-bottom: 5px;
  text-align: center;
  letter-spacing: 3px;
`;

const SubTitle = styled.p`
  font-size: 16px;
  text-align: right;
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
`;

const field = {
  title: '學士學位證書',
  subTitle: '學士學位證書',
  number: '42488',
  studentNumber: 'F129391835',
  studentName: 'xxx',
  studentBirthday: '八十六年七月三十一日生',
  school: '生物科學與科技學院',
  department: '生物科技與產業科學學系學士班',
  studentTitle: '理學學士',
  createdYear: '108',
  createdMonth: '06',
};

const Template = () => {
  return (
    <A4 title={field.title} backgroundUri={TemplateImage}>
      <Title>{field.title}</Title>
      <SubTitle>(108)成大字第{field.number}號</SubTitle>
      <SubTitle style={{ marginBottom: '30px' }}>
        {field.studentNumber}
      </SubTitle>
      <Text>學生 {field.studentName}</Text>
      <Text>中華民國{field.studentBirthday}</Text>
      <Text>在本校&nbsp;&nbsp;{field.school}</Text>
      <Text>{field.department}</Text>
      <Text>休業期滿成績及格准予畢業依學位授予法</Text>
      <Text>之規定授予{field.studentTitle}學位 &nbsp;&nbsp;此證</Text>

      <Text style={{ marginTop: '20px' }}>校長</Text>
      <Date>
        中華民國 &nbsp;&nbsp; {field.createdYear} &nbsp;&nbsp;年&nbsp;&nbsp;{' '}
        {field.createdMonth} &nbsp;&nbsp;月
      </Date>
    </A4>
  );
};

export default Template;
