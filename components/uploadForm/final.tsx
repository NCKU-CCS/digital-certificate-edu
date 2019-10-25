import React from 'react';

enum EStep {
  PENDING = 'pending',
  WAITING = 'waiting',
  WARNING = 'warning',
  SUCCESS = 'success',
  FAILURE = 'failure',
}

interface IProp {
  step: EStep;
}

const Final: React.FC<IProp> = (props: IProp) => {
  switch (props.step) {
    case EStep.SUCCESS: {
      return (
        <React.Fragment>
          <img src="/static/success.png" />
          <span
            style={{
              fontSize: '40px',
              color: '#33bc3c',
              WebkitTextStroke: '0.4px #33bc3c',
              margin: '26px 0 78px 0',
            }}
          >
            認證成功
          </span>
        </React.Fragment>
      );
    }
    case EStep.FAILURE: {
      return (
        <React.Fragment>
          <img src="/static/failure.png" />
          <span
            style={{
              fontSize: '40px',
              color: '#dd2424',
              WebkitTextStroke: '0.4px #dd2424',
              margin: '26px 0 78px 0',
            }}
          >
            認證成功
          </span>
        </React.Fragment>
      );
    }
    case EStep.WARNING: {
      return (
        <React.Fragment>
          <img src="/static/warning.png" />
          <span
            style={{
              fontSize: '40px',
              color: '#ddc824',
              WebkitTextStroke: '0.4px #ddc824',
              margin: '26px 0 78px 0',
            }}
          >
            認證失敗
          </span>
        </React.Fragment>
      );
    }
    default: {
      return <></>;
    }
  }
};

export default Final;
