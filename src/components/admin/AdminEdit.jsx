import React, { useState, useRef } from 'react';
import LoadingIndicator from '../common/LoadingIndicator';
import axios from 'axios';
import config from '../../config';

export default function AdminForm({ toast }) {
    const [formData, setFormData] = useState({
        achievements: [], // Array to store achievements
    });

    const [formLoading, setFormLoading] = useState(false);

    const formRef = useRef();

    const handleInputChange = (index, field, value) => {
        const newAchievements = [...formData.achievements];
        newAchievements[index] = {
            ...newAchievements[index],
            [field]: value,
        };
        setFormData({ ...formData, achievements: newAchievements });
    };

    const addAchievement = () => {
        setFormData({
            ...formData,
            achievements: [...formData.achievements, {}],
        });
    };

    const removeAchievement = (index) => {
        const newAchievements = [...formData.achievements];
        newAchievements.splice(index, 1);
        setFormData({ ...formData, achievements: newAchievements });
    };

    const handleSubmit = async (e) => {
        try {
            e.preventDefault();
            setFormLoading(true);

            // Your existing logic for handling other form fields...

            // Extracting achievements from formData
            const achievementsData = formData.achievements.map((achievement) => ({
                name: achievement.name || null,
                link: achievement.link || null,
            }));

            // Use achievementsData in your API call or perform any other necessary action
            console.log('Achievements Data:', achievementsData);

            setFormLoading(false);
        } catch (error) {
            console.error(error);
        }
    };



    return (
        <>
            <section className='inputform'>
                <div className="container-al">
                    <div class="card" style={{ width: "100%" }}>
                        <div class="card-body" style={{ width: "100%" }}>
                            <div className="card-title title-al" >Admin Page</div>
                            <div class="card-text">
                                <form ref={formRef} onSubmit={async (e) => { await handleSubmit(e) }}>
                                    <div className="container content-al">
                                        <div className="user-details-al">
                                            <div className="input-box-al">
                                                <div className="details-al">

                                                    <div className="row-al">
                                                        <div className="col-al">
                                                            <legend style={{ fontSize: '18px', fontWeight:"900", fontSize:"900" }}>Achievements</legend>
                                                            {formData.achievements.map((achievement, index) => (
                                                                <div key={index} className="input-container">
                                                                    <legend htmlFor={`form_name_${index}`} style={{ fontSize: '18px', fontWeight:"lighter" }}>Name</legend>
                                                                    <input
                                                                        required
                                                                        type="text"
                                                                        className="form-control"
                                                                        id={`form_name_${index}`}
                                                                        onChange={(e) => handleInputChange(index, 'name', e.target.value)}
                                                                        placeholder="Name"
                                                                    />
                                                                    <label htmlFor={`form_link_${index}`} style={{ fontSize: '18px', fontWeight:"lighter" }} >Achievement {index + 1}</label>
                                                                    <input
                                                                        type="text"
                                                                        id={`form_link_${index}`}
                                                                        value={achievement.link || ''}
                                                                        onChange={(e) => handleInputChange(index, 'link', e.target.value)}
                                                                        placeholder="https://scholar.google.co.in/"
                                                                        required
                                                                    />
                                                                    <button
                                                                        type="button"
                                                                        className="btn btn-danger"
                                                                        onClick={() => removeAchievement(index)}
                                                                        style={{ marginLeft: '1rem' }}
                                                                    >
                                                                        Remove
                                                                    </button>
                                                                </div>
                                                            ))}
                                                            <button
                                                                type="button"
                                                                className="btn btn-primary"
                                                                style={{ width: '20%', height: '3rem', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
                                                                onClick={addAchievement}
                                                            >
                                                                Add Achievement
                                                            </button>
                                                        </div>
                                                    </div>

                                                    <br />

                                                    <div className="row-al">
                                                        <div>
                                                            <button type="submit" className="btn btn-primary" style={{ width: "100%", height: "3rem", display: "flex", alignItems: "center", justifyContent: "center" }}>{formLoading ? <LoadingIndicator color={"white"}></LoadingIndicator> : "Submit"}</button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div >
            </section>

        </>



    )
}

