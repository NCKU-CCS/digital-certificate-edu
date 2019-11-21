import React, { useState } from 'react';
import Container from './container';
import Form from './form';
import Loading from './loading';
import Final from './final';
import { EStep } from '../../constants';

const UploadForm: React.FC = () => {
  const [step, setStep] = useState(EStep.PENDING);
  const [resp, setResp] = useState<any>({});
  const [loading, setLoading] = useState(false);

  const handleLoading = (value: boolean) => {
    setLoading(value);
  };

  const renderBody = () => {
    const hasResult = resp && step !== EStep.PENDING && step !== EStep.WAITING;
    return hasResult ? (
      <Final step={step} setStep={setStep} />
    ) : (
      <Form setStep={setStep} setResp={setResp} onLoading={handleLoading} />
    );
  };

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
      <Container step={step} display={'flex'}>
        {loading ? <Loading /> : renderBody()}
      </Container>
    </div>
  );
};

export default UploadForm;
