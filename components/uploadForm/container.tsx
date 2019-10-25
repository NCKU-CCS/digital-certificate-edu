import React from 'react';

interface IProps {
  step: string;
  display: string;
}

const Container: React.FC<IProps> = (
  props: React.PropsWithChildren<IProps>,
) => {
  return (
    <div
      style={{
        width: '532px',
        height: '583px',
        borderRadius: '20px',
        boxShadow: '0 3px 6px 0 rgba(0, 0, 0, 0.16)',
        backgroundColor: '#ffffff',
        flexDirection: 'column',
        display: props.display,
        justifyContent: 'center',
        alignItems: 'center',
      }}
      className={props.step}
    >
      {props.children}
      <style jsx>{`
        .pending {
          box-shadow: 0 3px 6px 0 rgba(0, 0, 0, 0.16);
        }
        .failure {
          box-shadow: 3px 3px 10px 0 rgba(221, 36, 36, 0.45);
          border: solid 6px #dd2424;
        }
        .success {
          box-shadow: 3px 3px 10px 0 rgba(51, 188, 60, 0.29);
          border: solid 6px #33bc3c;
        }
        .warning {
          box-shadow: 3px 3px 10px 0 rgba(221, 200, 36, 0.45);
          border: solid 6px #ddc824;
        }
      `}</style>
    </div>
  );
};

export default Container;
