import React, { useState } from 'react';

const ProfileCon = () => {
  const [isEditable, setIsEditable] = useState(false);

  const handleEdit = () => {
    setIsEditable(!isEditable);
  };

  return (
    <>
    <div>
      <h1>Profile</h1>
      <p>Name: John Doe</p>
      <p>Email: johndoe@example.com</p>
      <p>Phone: 123-456-7890</p>
      {isEditable ? (
        <div>
          <input type="text" placeholder="Enter your name" />
          <input type="email" placeholder="Enter your email" />
          <input type="tel" placeholder="Enter your phone number" />
        </div>
      ) : (
        <button onClick={handleEdit}>Edit</button>
        )}
    </div>
    
    <div className="flex space-x-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Edit
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Save
            </button>
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
              Cancel
            </button>
          </div>
    </>
  );
};

export default ProfileCon;
