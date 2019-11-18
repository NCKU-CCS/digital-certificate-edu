import React, { useState, useRef } from 'react';
import axios from 'axios';
import { EStep } from '../../constants';
import FileIcon from '../../static/file.png';
import UploadIcon from '../../static/upload.png';

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<EStep>>;
  setResp: React.Dispatch<React.SetStateAction<any>>;
}

const Form: React.FC<IProps> = (props: IProps) => {
  const fileBox = useRef(null);
  const [fileArray, setfileArray] = useState([]);
  const [dragging, setdragging] = useState(false);

  /* form input and submit */
  const handleInput = (event: React.SyntheticEvent) => {
    event.preventDefault();
    if (fileBox.current !== null) {
      setfileArray([fileBox.current.files[0]]);
    }
  };
  const handleSubmit = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append('file', fileArray[0]);

    // tslint:disable
    const d = await axios
      .post(`${process.env.MAIN_HOST}/students/validate/`, formData, {
        headers: new Headers({ 'Content-Type': 'multipart/form-data"' }),
      })
      .then(resp => resp.data)
      .catch(err => {
        console.log(err);
        return null;
      });
    // tslint:enable
    if (d.appled && d.error_msg === 'success') {
      props.setResp(d);
      props.setStep(EStep.SUCCESS);
    } else if (d.appled && d.error_msg !== 'success') {
      props.setStep(EStep.WARNING);
    } else if (!d.appled && d.error_msg === 'failure') {
      props.setStep(EStep.FAILURE);
    } else {
      // not found
      props.setStep(EStep.FAILURE);
    }
  };

  /* form drag */
  const handleDragOver = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
  };
  const handleDragEnter = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.items && event.dataTransfer.items.length > 0) {
      setdragging(true);
    }
  };
  const handleDragLeave = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    setdragging(false);
  };
  const handleDrop = (event: React.DragEvent) => {
    event.preventDefault();
    event.stopPropagation();
    if (event.dataTransfer.files && event.dataTransfer.files.length > 0) {
      setfileArray([event.dataTransfer.files[0]]);
      setdragging(false);
      event.dataTransfer.clearData();
    }
  };

  return (
    <form
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
      }}
      onSubmit={handleSubmit}
    >
      <div
        className="field center"
        onDragOver={handleDragOver}
        onDragEnter={handleDragEnter}
        onDragLeave={handleDragLeave}
        onDrop={handleDrop}
        style={{
          borderColor: dragging ? 'blue' : '#707070',
        }}
      >
        {fileArray.length === 0 ? (
          <React.Fragment>
            <img src={UploadIcon} />
            <label>
              拖曳或是
              <span style={{ borderBottom: '2px solid #4781e6' }}>上傳</span>
              檔案
              <input
                ref={fileBox}
                onChange={handleInput}
                type="file"
                name="upload-cert"
              />
            </label>
          </React.Fragment>
        ) : (
          fileArray.map((file, index) => (
            <React.Fragment key={index}>
              <img src={FileIcon} />
              <label>
                <span>{file.name}</span>
                <input
                  ref={fileBox}
                  onChange={handleInput}
                  type="file"
                  name="upload-cert"
                />
              </label>
            </React.Fragment>
          ))
        )}
      </div>

      <button type="submit" className="button">
        認證
      </button>

      <style jsx>{`
        input[type='file'] {
          display: none;
        }
        img {
          margin: 2rem;
        }
        button,
        span,
        label {
          font-family: EdwardianScriptITC;
          font-size: 30px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: 1.2;
          letter-spacing: normal;
          cursor: pointer;
        }
        .center {
          display: flex;
          justify-content: center;
          align-items: center;
        }
        .field {
          width: 507px;
          height: 395px;
          border: 2px dashed #707070;
          border-radius: 20px;
          -webkit-text-stroke: 0.4px #4781e6;
          color: #4781e6;
          flex-direction: column;
        }
        .button {
          width: 146px;
          height: 49px;
          border-radius: 2px;
          background-image: linear-gradient(to bottom, #4781e6, #365fa6);
          margin: 42px;
          font-size: 25px;
          color: #ffffff;
        }
      `}</style>
    </form>
  );
};

export default Form;
