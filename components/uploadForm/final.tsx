import React from 'react';
import { useTranslation } from 'react-i18next';
import { EStep } from '../../constants';
import SuccessIcon from '../../static/success.png';
import FailureIcon from '../../static/failure.png';
import WarningIcon from '../../static/warning.png';

interface IProp {
  step: EStep;
  setStep: React.Dispatch<React.SetStateAction<EStep>>;
}

interface IMessage {
  src: string;
  title: string;
  description: string;
  button: string;
  color: string;
}

const Message: React.FC<{
  msg: IMessage;
  setStep: React.Dispatch<React.SetStateAction<EStep>>;
}> = (props: {
  msg: IMessage;
  setStep: React.Dispatch<React.SetStateAction<EStep>>;
}) => (
  <React.Fragment>
    <img src={props.msg.src} />
    <span className="title">{props.msg.title}</span>
    <span className="description">{props.msg.description}</span>
    <a className="button" onClick={() => props.setStep(EStep.PENDING)}>
      {props.msg.button}
    </a>
    <style jsx>{`
      .title {
        font-size: 40px;
        color: ${props.msg.color};
        -webkit-text-stroke: 0.4px ${props.msg.color};
        margin: 26px 0 78px 0;
      }
      .description {
        font-family: Calibri;
        font-size: 30px;
        color: #8e6969;
        margin-bottom: 80px;
        text-align: center;
        padding: 0 100px 0 100px;
      }
      .button {
        font-family: EdwardianScriptITC;
        font-size: 25px;
        color: #6b5d5d;
        border-bottom: 1px solid #6b5d5d;
      }
    `}</style>
  </React.Fragment>
);

const Final: React.FC<IProp> = (props: IProp) => {
  const { t } = useTranslation();
  const SuccessMsg = {
    src: SuccessIcon,
    title: t('FORM_SUCCESS_T'),
    description: t('FORM_SUCCESS_D'),
    button: t('FORM_SUCCESS_B'),
    color: '#33bc3c',
  };
  const WarningMsg = {
    src: WarningIcon,
    title: t('FORM_WARNING_T'),
    description: t('FORM_WARNING_D'),
    button: t('FORM_WARNING_B'),
    color: '#ddc824',
  };
  const FailureMsg = {
    src: FailureIcon,
    title: t('FORM_FAILURE_T'),
    description: t('FORM_FAILURE_D'),
    button: t('FORM_FAILURE_B'),
    color: '#dd2424',
  };

  return (
    <Message
      msg={
        props.step !== EStep.SUCCESS
          ? props.step === EStep.FAILURE
            ? FailureMsg
            : WarningMsg
          : SuccessMsg
      }
      setStep={props.setStep}
    />
  );
};

export default Final;
