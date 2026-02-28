import React from 'react';
import Modal from '../Modal';

export default function ReviewClaimsModal({ onClose }) {
  return (
    <Modal title="Review Claims" onClose={onClose}>
      <p>Admin review of pending claims.</p>
    </Modal>
  );
}
