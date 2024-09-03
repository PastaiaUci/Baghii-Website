import React from 'react';
import { StlViewer } from 'react-stl-viewer';
import '../../components/css/modal.css';

const Modal = ({ isOpen, onClose, stlPath }) => {
  if (!isOpen) return null;

  const style = {
    width: '100%',
    height: '100%',
    position: 'relative',
  };

  return (
    <div className="modal-backdrop">
      <div className="modal-content">
        <button className="modal-close" onClick={onClose}>
          <span className="modal-close-icon">&times;</span>
        </button>
        <StlViewer
          url={stlPath}
          width="100%"
          height="100%"
          modelColor="#B92C2C"
          backgroundColor="#EAEAEA"
          rotate={true}
          orbitControls={true}
          style={style}
        />
      </div>
    </div>
  );
};

export default Modal;
