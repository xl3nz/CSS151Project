import React from 'react';
import Modal from '../Modal';

export default function PaymentSuccessModal({ onClose }) {
  return (
    <Modal title="Payment Success" onClose={onClose}>
      <p>Thank you for your donation!</p>
    </Modal>
  );
}
