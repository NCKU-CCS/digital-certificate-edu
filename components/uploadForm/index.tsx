import React, { useState } from 'react';
import Container from './container';
import Form from './form';

enum EStep {
  PENDING = 'pending',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

const UploadForm: React.FC = () => {
  const [step, setstep] = useState(EStep.PENDING);
  return (
    <div
      style={{
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Container step={step} display={step === EStep.PENDING ? 'flex' : 'none'}>
        <Form />
      </Container>

      {/* <Container
        step={step}
        display={(step!==EStep.PENDING) ? 'flex' : 'none'}
      >
        {
          (step===EStep.SUCCESS) ? (
            <React.Fragment>
              <img src="/static/success.png"/>
              <span style={{
                fontSize: '40px',
                color: '#33bc3c',
                WebkitTextStroke: '0.4px #33bc3c',
                margin: '26px 0 78px 0',
              }}>
                認證成功
              </span>
            </React.Fragment>
          ) : (
            <React.Fragment>
              <img src="/static/failure.png"/>
              <span style={{
                fontSize: '40px',
                color: '#dd2424',
                WebkitTextStroke: '0.4px #dd2424',
                margin: '26px 0 78px 0',
              }}>
                認證失敗
              </span>
            </React.Fragment>
          )
        }
      </Container> */}
    </div>
  );
};

export default UploadForm;
