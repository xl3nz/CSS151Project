import React from 'react';
import Modal from '../Modal';

export default function ReportsModal({ onClose }) {
  return (
    <Modal title="Reports" onClose={onClose}>
      <p>Administrator reports and statistics.</p>
    </Modal>
  );
}
