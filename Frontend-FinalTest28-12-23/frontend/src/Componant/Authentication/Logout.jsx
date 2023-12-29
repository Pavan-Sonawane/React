// import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

// const Logout = () => {
//   const [response, setResponse] = useState(null);
//   const navigate = useNavigate();

//   const handleLogout = async () => {
//     try {
//       const response = await axios.post('https://localhost:44364/api/Auth/logout');
//       setResponse(response.data);

     
//       navigate('/login');
//     } catch (error) {
//       console.error('Error during logout:', error);
//       setResponse({ error: 'An error occurred during logout.' });
//     }
//   };

//   return (
//     <div>
     
//       <button onClick={handleLogout}>Logout</button>

//       {response && (
//         <div>
//           <h3>Response:</h3>
//           <pre>{JSON.stringify(response, null, 2)}</pre>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Logout;
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../../services/api'; 

const Logout = () => {
  const [response, setResponse] = useState(null);
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      const response = await api.post('Auth/logout');
      setResponse(response.data);

      navigate('/login');
    } catch (error) {
      console.error('Error during logout:', error);
      setResponse({ error: 'An error occurred during logout.' });
    }
  };

  return (
    <div>
      <button onClick={handleLogout}>Logout</button>

      {response && (
        <div>
          <h3>Response:</h3>
          <pre>{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </div>
  );
};

export default Logout;
