import React from 'react';
import './Modal.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faBookOpen, faDownload } from '@fortawesome/free-solid-svg-icons';

const Modal = ({ book, onClose }) => {
  const pdfPath = `/Books/${book.pdfFile}`;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
           <FontAwesomeIcon icon={faXmark} />
        </button>
        
        <div className="modal-body">
          <div className="modal-cover">
            <img src={`/BookThumb/${book.coverImage}`} alt={book.title} />
          </div>
          
          <div className="modal-info">
            <h2>{book.title}</h2>
            <p>{book.lastUpdate}</p>
            <p className="description">{book.description}</p>
            
            <div className="action-buttons">
              <a 
                href={pdfPath} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="btn btn-read"
              >
                <FontAwesomeIcon icon={faBookOpen} style={{ marginRight: '8px' }} />
                อ่านออนไลน์
              </a>
              <a 
                href={pdfPath} 
                download={book.pdfFile} 
                className="btn btn-download"
              >
                <FontAwesomeIcon icon={faDownload} style={{ marginRight: '8px' }} />
                ดาวน์โหลด
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;