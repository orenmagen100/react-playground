import React from 'react';
import '../assets/css/Drawer.css';

function Drawer({ isOpen, onDrawerClick }) {
  return (
    <div className={`drawer-container ${isOpen && 'drawer-container-is-open'}`}>
      <button
        onClick={onDrawerClick}
        style={{ height: '30px', width: '50px', marginTop: '10px' }}
      >
        {isOpen ? `Hide` : `Show`}
      </button>
      {isOpen && (
        <div className='drawer-content'>
          <div className='nav'>Basics</div>
          <div className='nav'>Advanced Features</div>
        </div>
      )}
    </div>
  );
}

export default Drawer;
