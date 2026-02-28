import React from 'react';
import Modal from '../Modal';

export default function CreateDonationModal({ onClose }) {
  return (
    <Modal title="Create Donation" onClose={onClose}>
      <p>Form for creating a new donation.</p>
    </Modal>
  );
}
