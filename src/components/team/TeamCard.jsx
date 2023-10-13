import React, { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../../config';
import { Link, useHistory } from 'react-router-dom';

const FacultyList = () => {
  const [facultyList, setFacultyList] = useState([]);
  const history = useHistory();

  const backendUrl = config.backendUrl;

  useEffect(() => {
    // Fetch the list of faculty names using Axios
    axios
      .get(backendUrl + 'faculty/facultyList')
      .then((response) => {
        setFacultyList(response.data.reverse());
      })
      .catch((error) => {
        console.error('Error fetching faculty list:', error);
      });
  }, []);

  const handleFacultyClick = (facultyId) => {
    history.push(`/faculty/${facultyId}`);
  };

  const generateRandomNumber = () => {
    const min = 1;
    const max = 8;

    // Generate a random number between min and max (inclusive)
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  return (
    <>
      {facultyList.map((faculty) => (
        <div className='items shadow' key={faculty._id} onClick={() => handleFacultyClick(faculty._id)}>
          <div className='img'>
            <img src={`./images/team/t${generateRandomNumber()}.webp`} alt='' />
            <div className='overlay'>
              <i className='fab fa-facebook-f icon'></i>
              <i className='fab fa-twitter icon'></i>
              <i className='fab fa-instagram icon'></i>
              <i className='fab fa-tiktok icon'></i>
            </div>
          </div>
          <div className='details'>
            <div>
              <Link className='link-tag' to={`/faculty/${faculty._id}`}>
                <h2>{faculty.name}</h2>
              </Link>
            </div>
            <p>{faculty.designation}</p>
          </div>
        </div>
      ))}
    </>
  );
};

export default FacultyList;
