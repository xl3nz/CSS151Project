import React from 'react';
import Modal from '../Modal';

export default function ReviewDonationsModal({ onClose }) {
  return (
    <Modal title="Review Donations" onClose={onClose}>
      <p>Admin review of newly created donations.</p>
    </Modal>
  );
}
