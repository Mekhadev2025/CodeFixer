import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <img src="./foss-logo.png" alt="FOSS logo" />
      <button>
        <a className="link" href="https://fossmec.netlify.app/">Contact Us</a>
      </button>
    </div>
  );
}

export default Navbar;
