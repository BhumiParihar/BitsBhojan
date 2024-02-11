// import React, { useState, useEffect } from 'react';

// const Check = () => {
//   const [containsValue, setContainsValue] = useState("Veg"); // Initialize with default value

//   useEffect(() => {
//     fetchData(containsValue); // Fetch data whenever containsValue changes
//   }, [containsValue]);

//   const fetchData = async (contains) => {
//     const requestOptions = {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         select: { "Name": true, "Rating": true, "Area": true, "Address": true, "Mtype": true },
//         filter: { "Mtype": { "contains": contains } }
//       })
//     };
    
//     try {
//       const response = await fetch('https://us-east-2.aws.neurelo.com/rest/mess_details', requestOptions);
//       const data = await response.json();
//       console.log(data); // Do something with the response data
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   }

//   return (
//     <div>
//       <div>
//       <button onClick={handleButtonClick}>
//         {containsValue === "Veg" ? "Switch to Non-Veg" : "Switch to Veg"}
//       </button>
      
//     </div>
//     </div>
//   );
// }

// export default Check;

import React, { useState, useEffect } from 'react';
import Card from './Card'; // Import your Card component

const Check = () => {
  const [containsValue, setContainsValue] = useState("Veg");
  const [responseData, setResponseData] = useState([]); // Initialize with an empty array

  useEffect(() => {
    fetchData(containsValue);
  }, [containsValue]);

  const fetchData = async (contains) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        select: { "Name": true, "Rating": true, "Area": true, "Address": true, "Mtype": true },
        filter: { "Mtype": { "contains": contains } }
      })
    };
    
    try {
      const response = await fetch('https://us-east-2.aws.neurelo.com/rest/mess_details', requestOptions);
      const data = await response.json();
      setResponseData(data); // Store the response data in state
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }

  const handleButtonClick = () => {
    setContainsValue(containsValue === "Veg" ? "Non-Veg" : "Veg");
  }

  return (
    <div>
      <button onClick={handleButtonClick}>
        {containsValue === "Veg" ? "Switch to Non-Veg" : "Switch to Veg"}
      </button>
      
      <div>
        {/* Map over the response data and render Card components */}
        {responseData.map(item => (
          <Card item />
          // <Card key={item.Name} name={item.Name} rating={item.Rating} area={item.Area} address={item.Address} />
        ))}
      </div>
    </div>
  );
}

export default Check;
