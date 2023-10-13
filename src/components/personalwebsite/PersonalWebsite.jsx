import React, { useState, useEffect } from 'react';
import './PersonalWebsite.css'
import axios from 'axios';
import config from '../../config';
import dummyImg from '../../assets/photos/skv.jpg'

const FacultyDetails = ({ match }) => {
    const [selectedFaculty, setSelectedFaculty] = useState(null);
    const facultyId = match.params.id; // Extract faculty ID from the URL parameter

    useEffect(() => {
        // Fetch faculty details by ID when the component mounts using Axios
        axios
          .get(`${config.backendUrl}faculty/faculty/${facultyId}`)
          .then((response) => {
            setSelectedFaculty(response.data);
          })
          .catch((error) => {
            console.error('Error fetching faculty details:', error);
          });
      }, [facultyId]);
      
    // const dummyImg = "./images/team/t1.webp";
    const currentUser = {
        user_id: 1,
        name: 'Dr. Santosh Kumar Vipparthi',
        mobile: 8889990001,
        email: 'skvipparthi@iitrpr.ac.in',
        src: "../images/team/skv.jpg",
        title: "Assistant Professor",
        department: "Department of Electrical Engineering IIT, Ropar",
        bio: "Dr. Santosh Kumar Vipparthi, a senior member of IEEE, has 11+ years of experience, including teaching and industry. Currently, he is an Assistant Professor at Indian Institute of Technology Ropar (IIT Ropar), India. Before this, he served at the Mehta Family School of Data Science and Artificial Intelligence, Indian Institute of Technology, Guwahati (IIT Guwahati) and Malaviya National Institute of Technology (MNIT), Jaipur (An Institute of National Importance and one of the top NITs fully funded by the Ministry of Education, Government of India). He received Ph.D. and MTech degrees with Honors in Systems Engineering from the Indian Institute of Technology Varanasi (IIT Varanasi), BHU, India, and a B.E. degree in Electrical and Electronics Engineering from Andhra University, Andhra Pradesh, India. Dr. Vipparthi’s research in the area of computer vision, affective computing, deep learning, etc. He successfully supervised 03 research scholars (Ph.D.’s) and is currently guiding 07 research scholars."
    };

    return (
        //   <section id="heroSection" className="hero--section">
        //     <div className="hero--section--content--box">
        //       <div className="hero--section--content">
        //       <h2 className="hero--section--title">
        //           <span className="hero--section-title--color">{currentUser.name}</span>{" "}
        //         </h2>
        //         <h3 className="section--title">{currentUser.title}</h3>
        //         <h4 className="section--title" style={{marginTop : '0px'}}>{currentUser.department}</h4>
        //         <p className="hero--section-description">
        //           {currentUser.bio}
        //         </p>
        //       </div>
        //       <button className="btn btn-primary">Get In Touch</button>
        //     </div>
        //     <div className="hero--section--img">
        //       <img src={currentUser.src} alt="Hero Section" />
        //     </div>
        //   </section>
        <>
            <section className='inputform'>
                {selectedFaculty && (
                    <div className="container-new">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body" style={{ width: "100%" }}>
                            <div className="card-title title-new" style={{ textAlign: "center" }} >{selectedFaculty.name}</div>
                            <div class="card-text">
                                <div className="row-new">
                                    <div className="col-6 pic">
                                        <div>
                                            <img src={dummyImg} alt="Hero Section" />
                                            {/* <h3 className="card-title">{selectedFaculty.name}</h3> */}
                                            <h5>{selectedFaculty.designation}</h5>
                                            <h7>{currentUser.department}</h7>
                                            <h5>Contact Details :</h5>
                                            <p style={{fontSize:"1rem", fontWeight:"400"}}>Email : {selectedFaculty.email}</p>
                                            <p style={{fontSize:"1rem", fontWeight:"400"}}>Mobile : {selectedFaculty.phoneNo}</p>
                                            <ul class="social-icons">
                                                <li><a href="https://scholar.google.co.in/citations?user=JWSfd7YAAAAJ" target="blank"><i class="fa fa-graduation-cap fa-2x" aria-hidden="true"></i></a></li>
                                                <li><a href="https://www.researchgate.net/profile/Santosh-Vipparthi" target="blank"><i class="fab fa-researchgate fa-2x"></i></a></li>
                                            </ul>
                                            <table class="table" id="contact-table">
                                                <tbody>
                                                    <tr>
                                                        <td ><i style={{marginRight:"10px", color:"#506578"}} class="fas fa-home"></i><a href="https://www.iitrpr.ac.in/ee/faculty.html" target="_blank">Department of Electrical Engineering,<br></br>
                                                            IIT Ropar,<br></br>
                                                            Rupnagar, Punjab, <br></br>
                                                            India, 140001</a></td>
                                                    </tr>
                                                    <tr>
                                                        <td><i style={{marginRight:"10px", color:"#506578"}} class="fas fa-at"></i><a href={`mailto:${selectedFaculty.email}`}>{selectedFaculty.email}</a></td>
                                                    </tr>
                                                    {/* <tr>
                                                        <td><i style={{marginRight:"10px", color:"#506578"}} class="fas fa-at"></i><a href={`mailto:${selectedFaculty.email}`}>{selectedFaculty.email}</a></td>
                                                    </tr> */}
                                                    <tr>

                                                    </tr>
                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="col-6">
                                        <h3 class="bio-title"><span>Bio</span></h3>
                                        <p className="bio">
                                            {selectedFaculty.bio}
                                        </p>
                                        <br></br>
                                        <h3 class="bio-title"><span>Research Interests</span></h3>
                                        <p className="bio">
                                            {selectedFaculty.researchInterest.join(', ')}
                                        </p>
                                        <br></br>
                                        <h3 class="bio-title"><span>Information for Prospective Students</span></h3>
                                        <p className="bio">
                                            {selectedFaculty.infoForProspectiveStudents}
                                        </p>
                                    </div>
                                </div>

                                <div className="row-new">
                                    <div className="col-6 pic">
                                        <div>

                                        </div>
                                    </div>
                                    <div className="col-6">

                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div >
                )}
                
            </section>

        </>
    );
}

export default FacultyDetails;