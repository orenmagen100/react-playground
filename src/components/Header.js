import React from 'react';
import '../assets/css/Header.css';
import Modal from 'react-modal';
import LogInForm from './forms/LogInForm';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: '#3f3f44'
  }
};

Modal.setAppElement('#root');

function Header() {
  const [modalIsOpen, setIsOpen] = React.useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className='main-header'>
      <p className='header-name'>My GitHub Store</p>
      <button onClick={openModal} type='button' className='login-button'>
        Log in
      </button>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel='Example Modal'
      >
        <LogInForm onClose={closeModal} />
      </Modal>
    </div>
  );
}

export default Header;
