import React from 'react';
import styled from 'styled-components';
import TemplateImage from '../../static/templates/ncku-en.png';
import A4 from '../../layouts/A4';

const Title = styled.h1`
  font-size: 24px;
  margin-top: 130px;
  margin-bottom: 30px;
  text-align: center;
  letter-spacing: 3px;
  font-style: italic;
`;

const Text = styled.p<{ size?: 'big' | 'medium' | 'small' }>`
  text-align: center;
  font-size: 14px;
  margin-bottom: 2px;

  ${p =>
    p.size === 'big' &&
    `
    font-size: 20px;
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 6px;
  `}

  ${p =>
    p.size === 'medium' &&
    `
    font-size: 18px;
    font-weight: bold;
    margin-top: 6px;
    margin-bottom: 6px;
  `}

  ${p =>
    p.size === 'small' &&
    `
    font-size: 12px;
  `}
`;

const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 0 90px;
  font-style: italic;
`;

const field = {
  title: 'NATIONAL CHENG KUNG UNIVERSITY',
  number: '42488',
  studentName: '英文名子(中文名子)',
  studentBirthday: '八十六年七月三十一日生',
  school: 'Electrical Engineering and Computer Science',
  department: 'Computer Science and Information Engineering',
  studentTitle: '理學學士',
  createdYear: '2019',
  createdMonth: 'January',
};

const Template = () => {
  return (
    <A4 title={field.title} backgroundUri={TemplateImage} mode="horizontal">
      <Title>{field.title}</Title>

      <Text>on the recommendation of the faculty of</Text>
      <Text>the Department of {field.department},</Text>
      <Text>College of {field.school},</Text>
      <Text>has conferred upon</Text>
      <Text size="big">{field.studentName}</Text>
      <Text>the degree of</Text>
      <Text size="medium">Bachelor of &nbsp;&nbsp;{field.school}</Text>
      <Text>
        together with all the honors, rights and privileges belonging to that
        degree.
      </Text>
      <Text>
        In witness whereof, this diploma is issued with the university seal in{' '}
        {field.createdMonth} {field.createdYear}
      </Text>

      <Row style={{ position: 'absolute', bottom: '60px', left: 0 }}>
        <Text size="small">Certificate No：{field.number}</Text>
        <Text>Huey-Jen Su, Sc.D. President</Text>
      </Row>
    </A4>
  );
};

export default Template;
