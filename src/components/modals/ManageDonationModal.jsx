import React from 'react';
import Modal from '../Modal';

export default function ManageDonationModal({ onClose }) {
  return (
    <Modal title="Manage Donation" onClose={onClose}>
      <p>Options to edit or delete a donation you own.</p>
    </Modal>
  );
}
