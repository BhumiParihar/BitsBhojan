import React, { useState } from 'react';

function ProfileUs() {
  const [isEditing, setIsEditing] = useState(false);
  const [name, setName] = useState('John Doe');
  const [email, setEmail] = useState('johndoe@example.com');
  const [age, setAge] = useState(30);
  const [location, setLocation] = useState('New York, USA');

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save changes to the database
    // You can make an API call here to update the user profile

    setIsEditing(false);
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-4">User Profile</h1>

      <div className="mb-6">
        <label className="block mb-2 font-bold">Name:</label>
        {isEditing ? (
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        ) : (
          <div>{name}</div>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-bold">Email:</label>
        {isEditing ? (
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        ) : (
          <div>{email}</div>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-bold">Age:</label>
        {isEditing ? (
          <input
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        ) : (
          <div>{age}</div>
        )}
      </div>

      <div className="mb-6">
        <label className="block mb-2 font-bold">Location:</label>
        {isEditing ? (
          <input
            type="text"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            className="border border-gray-300 rounded px-3 py-2 w-full"
          />
        ) : (
          <div>{location}</div>
        )}
      </div>

      {isEditing ? (
        <button
          onClick={handleSave}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Save Changes
        </button>
      ) : (
        <button
          onClick={handleEdit}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mr-2"
        >
          Edit Profile
        </button>
      )}
    </div>
  );
}

export default ProfileUs;
