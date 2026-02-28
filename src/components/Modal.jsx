import React from 'react';
import '../styles/Modal.css';

export default function Modal({ title, children, onClose }) {
  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal" onClick={e => e.stopPropagation()}>
        <header className="modal-header">
          <h2>{title}</h2>
          <button className="modal-close" onClick={onClose}>&times;</button>
        </header>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
}
