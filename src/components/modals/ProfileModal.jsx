import React from 'react';
import Modal from '../Modal';

export default function ProfileModal({ onClose }) {
  return (
    <Modal title="Profile" onClose={onClose}>
      <p>Edit user profile and settings.</p>
    </Modal>
  );
}
