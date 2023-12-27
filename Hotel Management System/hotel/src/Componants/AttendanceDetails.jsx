import React, { useState, useEffect } from 'react';

const AttendanceList = () => {
  const [attendanceList, setAttendanceList] = useState(null);

  useEffect(() => {
    // Fetch your API here
    const fetchData = async () => {
      try {
        const response = await fetch('https://localhost:44346/api/Attendance');
        const data = await response.json();
        setAttendanceList(data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const calculateHours = (actualHours) => {
    const totalSeconds = actualHours * 3600;
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = Math.floor(totalSeconds % 60);

    return `${hours}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div>
      {attendanceList ? (
        attendanceList.map((attendanceItem) => (
          <div key={attendanceItem.attendanceID}>
            <p>Attendance ID: {attendanceItem.attendanceID}</p>
            <p>User ID: {attendanceItem.userID}</p>
            <p>Clock In: {attendanceItem.clockInDateTime}</p>
            <p>Clock Out: {attendanceItem.clockOutDateTime}</p>
            <p>Actual Hours: {calculateHours(attendanceItem.actualHours)}</p>
          </div>
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
};

export default AttendanceList;
