import React, { useState } from 'react';
import styles from './header.module.scss';

interface ModalProps {
  onClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ onClose }: ModalProps) => {
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleRegister = () => {
    if (!email || !phoneNumber || !password) {
      setErrorMessage('Пожалуйста, заполните все поля');
    } else {
      console.log('Email:', email);
      console.log('Phone Number:', phoneNumber);
      console.log('Password:', password);
      setErrorMessage('');
      onClose();
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modalContent}>
        <span className={styles.close} onClick={onClose}>&times;</span>
        <h2 className={styles.titleModal}>Регистрация</h2>
        <input
          className={styles.inputField}
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="text"
          placeholder="Номер телефона"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
        <input
          className={styles.inputField}
          type="password"
          placeholder="Пароль"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {errorMessage && <p className={styles.errorMessage}>{errorMessage}</p>}
      </div>
      <button className={styles.btnSaveReg} onClick={handleRegister}>Зарегистрироваться</button>
    </div>
  );
};

const RegistrationButton: React.FC = () => {
  const [showModal, setShowModal] = useState(false);

  const handleButtonClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <button className={styles.btnRegister} onClick={handleButtonClick}>
        <span>Регистрация</span>
      </button>
      {showModal && <Modal onClose={handleCloseModal} />}
    </div>
  );
};

export default RegistrationButton;
