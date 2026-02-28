import React from 'react';
import Modal from '../Modal';

export default function PaymentModal({ onClose }) {
  return (
    <Modal title="Payment" onClose={onClose}>
      <p>Process a payment for a donation.</p>
    </Modal>
  );
}
