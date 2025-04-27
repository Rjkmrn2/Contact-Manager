import React from "react";

const Header = () => {
  return (
    <div className="ui fixed menu" style={{ backgroundColor: '#1e88e5', height: '70px', padding: '0 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 2px 5px rgba(0,0,0,0.2)' }}>
      <h2 style={{ color: 'white', fontSize: '24px', margin: '0' }}>Contact Manager</h2>
    </div>
  );
};

export default Header;
