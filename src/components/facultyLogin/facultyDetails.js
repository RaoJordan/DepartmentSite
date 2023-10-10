import React, { useState, useEffect } from 'react';
import axios from 'axios'; // Import Axios
import config from '../../config';

const FacultyList = () => {
  const [facultyList, setFacultyList] = useState([]);
  const [selectedFaculty, setSelectedFaculty] = useState(null);

  const backendUrl = config.backendUrl;


  useEffect(() => {
    // Fetch the list of faculty names using Axios
    axios
      .get(backendUrl + 'faculty/facultyList')
      .then((response) => {
        setFacultyList(response.data);
      })
      .catch((error) => {
        console.error('Error fetching faculty list:', error);
      });
  }, []);

  const handleFacultyClick = (facultyId) => {
    // Fetch faculty details by ID when a name is clicked using Axios
    axios
      .get(backendUrl + `faculty/faculty/${facultyId}`)
      .then((response) => {
        setSelectedFaculty(response.data);
      })
      .catch((error) => {
        console.error('Error fetching faculty details:', error);
      });
  };

  return (
    <div>
      <div>
        <h2>List of Faculty Names</h2>
        <ul>
          {facultyList.map((faculty) => (
            <li key={faculty._id} onClick={() => handleFacultyClick(faculty._id)}>
              {faculty.name}
            </li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Faculty Details</h2>
        {selectedFaculty && (
          <div>
            <h3>Name: {selectedFaculty.name}</h3>
            <p>Email: {selectedFaculty.email}</p>
            <p>Phone Number: {selectedFaculty.phoneNo}</p>
            <p>Designation: {selectedFaculty.designation}</p>
            <p>Research Interests: {selectedFaculty.researchInterest.join(', ')}</p>
            <p>Information for Prospective Students: {selectedFaculty.infoForProspectiveStudents}</p>
            <p>Bio: {selectedFaculty.bio}</p>
            <img src={selectedFaculty.image} alt={selectedFaculty.name} />
          </div>
        )}
      </div>
    </div>
  );
};

export default FacultyList;
