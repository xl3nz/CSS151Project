import React from 'react';
import Modal from '../Modal';

export default function MyClaimsModal({ onClose }) {
  return (
    <Modal title="My Claims" onClose={onClose}>
      <p>List and manage your claims.</p>
    </Modal>
  );
}
