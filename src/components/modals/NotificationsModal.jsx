import React from 'react';
import Modal from '../Modal';

export default function NotificationsModal({ onClose }) {
  return (
    <Modal title="Notifications" onClose={onClose}>
      <p>Show user notifications and alerts.</p>
    </Modal>
  );
}
