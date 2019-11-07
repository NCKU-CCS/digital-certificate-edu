import React from 'react';
import { EStep } from '../../constants';
import SuccessIcon from '../../static/success.png';
import FailureIcon from '../../static/failure.png';
import WarningIcon from '../../static/warning.png';

interface IProp {
  step: EStep;
  setStep: React.Dispatch<React.SetStateAction<EStep>>;
  data?: any;
}

const Final: React.FC<IProp> = (props: IProp) => {
  switch (props.step) {
    case EStep.SUCCESS: {
      return (
        <React.Fragment>
          <img src={SuccessIcon} />
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
          <span
            style={{
              fontFamily: 'Calibri',
              fontSize: '30px',
              color: '#8e6969',
              marginBottom: '80px',
              textAlign: 'center',
            }}
          >
            學生 呂紹民 於108年06月於
            <br />
            成功大學 工業與資訊管理學系畢業
          </span>
          <a
            onClick={() => props.setStep(EStep.PENDING)}
            style={{
              fontFamily: 'EdwardianScriptITC',
              fontSize: '25px',
              color: '#6b5d5d',
              borderBottom: '1px solid #6b5d5d',
            }}
          >
            查詢其他資訊
          </a>
        </React.Fragment>
      );
    }
    case EStep.FAILURE: {
      return (
        <React.Fragment>
          <img src={FailureIcon} />
          <span
            style={{
              fontSize: '40px',
              color: '#dd2424',
              WebkitTextStroke: '0.4px #dd2424',
              margin: '26px 0 78px 0',
            }}
          >
            認證失敗
          </span>
          <span
            style={{
              fontFamily: 'Calibri',
              fontSize: '30px',
              color: '#8e6969',
              marginBottom: '80px',
              textAlign: 'center',
            }}
          >
            此PDF檔未受各大專院校簽章認證
          </span>
          <a
            onClick={() => props.setStep(EStep.PENDING)}
            style={{
              fontFamily: 'EdwardianScriptITC',
              fontSize: '25px',
              color: '#6b5d5d',
              borderBottom: '1px solid #6b5d5d',
            }}
          >
            重新認證
          </a>
        </React.Fragment>
      );
    }
    case EStep.WARNING: {
      return (
        <React.Fragment>
          <img src={WarningIcon} />
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
          <span
            style={{
              fontFamily: 'Calibri',
              fontSize: '30px',
              color: '#8e6969',
              marginBottom: '80px',
              textAlign: 'center',
            }}
          >
            此PDF檔已更新
            <br />
            請務必向發證校方進行詢問
          </span>
          <a
            onClick={() => props.setStep(EStep.PENDING)}
            style={{
              fontFamily: 'EdwardianScriptITC',
              fontSize: '25px',
              color: '#6b5d5d',
              borderBottom: '1px solid #6b5d5d',
            }}
          >
            重新認證
          </a>
        </React.Fragment>
      );
    }
    default: {
      return <div />;
    }
  }
};

export default Final;
