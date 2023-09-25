/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

function UserForm(props) {
  const [name, setName] = useState('');

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // eslint-disable-next-line react/prop-types
    props.onSubmit(name); 
    setName(''); 
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Nhập tên của bạn"
        value={name}
        onChange={handleNameChange}
      />
      <button type="submit">Gửi</button>
    </form>
  );
}

export default UserForm;
