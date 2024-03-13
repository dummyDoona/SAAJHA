import React, { useState } from 'react';

const AdminHomePage = () => {
  const [showOptions, setShowOptions] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleOptions = () => {
    setShowOptions(!showOptions);
    setSelectedOption(null);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
  };

  const renderSubMenu = () => {
    switch (selectedOption) {
      case 'NGO':
        return (
          <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '40px', right: '0', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <button>Add</button>
            <button>Update</button>
            <button>Delete</button>
            <button>View</button>
          </div>
        );
      case 'Volunteer':
        return (
          <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '40px', right: '0', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <button>View Request</button>
            <button>Add Request</button>
          </div>
        );
      case 'Counselor':
        return (
          <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '40px', right: '0', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <button>Add Counselor</button>
            <button>View Counselor</button>
          </div>
        );
      case 'Case':
        return (
          <div style={{ display: 'flex', flexDirection: 'row', position: 'absolute', top: '40px', right: '0', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <button>View Case</button>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={{ textAlign: 'center' }}>
      <h2>Admin Landing Page</h2>
      <div style={{ position: 'absolute', top: '20px', right: '20px' }}>
        <button onClick={toggleOptions}>☰</button>
        {showOptions && (
          <div style={{ position: 'absolute', top: '40px', right: '0', backgroundColor: '#f9f9f9', padding: '10px', border: '1px solid #ccc', borderRadius: '5px' }}>
            <button onClick={() => handleOptionClick('NGO')}>NGO</button>
            <button onClick={() => handleOptionClick('Volunteer')}>Volunteer</button>
            <button onClick={() => handleOptionClick('Counselor')}>Counselor</button>
            <button onClick={() => handleOptionClick('Case')}>Case</button>
          </div>
        )}
        {selectedOption && renderSubMenu()}
      </div>
    </div>
  );
};

export default AdminHomePage;
