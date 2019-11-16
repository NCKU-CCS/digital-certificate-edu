import React, { useState } from 'react';
import Container from './container';
import Form from './form';
import Loading from './loading';
import Final from './final';
import { EStep } from '../../constants';

const UploadForm: React.FC = () => {
  const [step, setStep] = useState(EStep.PENDING);
  const [resp, setResp] = useState({} as any);

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
      <Container
        step={step}
        display={
          step === EStep.PENDING || step === EStep.WAITING ? 'flex' : 'none'
        }
      >
        {step === EStep.PENDING ? (
          <Form setStep={setStep} setResp={setResp} />
        ) : (
          <Loading />
        )}
      </Container>

      <Container
        step={step}
        display={
          step !== EStep.PENDING && step !== EStep.WAITING ? 'flex' : 'none'
        }
      >
        <Final step={step} setStep={setStep} data={resp} />
      </Container>
    </div>
  );
};

export default UploadForm;
