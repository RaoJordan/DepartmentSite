import React, { useState, useRef, useEffect } from 'react'
import "./InputForm.css"
import axios from 'axios';
import LoadingIndicator from '../common/LoadingIndicator';
import "./Form.css";
import config from '../../config';

export default function InputForm({ toast }) {
	// const navigate = useNavigate();
	const currentUser = {
		user_id: 1,
		name: 'Yash',
		mobile: 8889990001,
		email: 'yash@gmail.com'
	};
	// const { currentUser } = useAuth();
	const [document, setDocument] = useState();
	const [fileName, setFileName] = useState("");
	const [formData, setFormData] = useState({});
	const [formLoading, setFormLoading] = useState(false);

	const backendUrl = config.backendUrl;

	const sigPadRef = useRef();
	const formRef = useRef()

	const handleInputChange = async (e) => {
		return
	};

	const handleFileInputChange = (e) => {
		const file = e.target.files[0];
		const fileSize = file.size;
		setDocument(file)
		if (fileSize > 1 * 1024 * 1024) {
			alert("File size must be less than 1MB");
			return;
		}
		setFileName(`${currentUser.user_id}_${Date.now()}_${file.name}`);
	};



	const handleSubmit = async (e) => {
		try {
			e.preventDefault();
			let form_data = {}
			formRef.current.querySelectorAll('input').forEach((input) => {
				if (input.type == "file") {
					return;
				}
				form_data[input.id] = input.value == '' ? null : input.value;
			});
			formRef.current.querySelectorAll('select').forEach((input) => {
				form_data[input.id] = input.value == '' ? null : input.value;
			});
			formRef.current.querySelectorAll('textarea').forEach((input) => {
				form_data[input.id] = input.value == '' ? null : input.value;
			});


			// return;
			setFormLoading(true);

			// return;
			form_data['form_filename'] = fileName;


			console.log(form_data, document);

			await axios.post(backendUrl + 'faculty/updateFacultyDetails', {
				name: form_data.form_name,
				email: form_data.form_email,
				phoneNo: form_data.form_phone,
				designation: form_data.form_designation,
				researchInterest: form_data.form_purpose,
				infoForProspectiveStudents: form_data.form_altArrangements,
				bio: form_data.form_address,
			});

			// return;
			const form = new FormData();
			form.append('data', JSON.stringify(form_data));
			form.append('file', document);
			setFormLoading(false);
		} catch (error) {
			console.log(error)
		}
	}



	return (
		<>
			<section className='inputform'>
				<div className="container-al">
					<div class="card" style={{ width: "100%" }}>
						<div class="card-body" style={{ width: "100%" }}>
							<div className="card-title title-al" >Professor Details</div>
							<div class="card-text">
								<form ref={formRef} onSubmit={async (e) => { await handleSubmit(e) }}>
									<div className="container content-al">
										<div className="user-details-al">
											<div className="input-box-al">
												<div className="details-al">
													<div className="row-al">
														<div className="col-al">
															<legend htmlFor="form_name" style={{ fontSize: "18px" }}>Name</legend>
															<input required type="text" className="form-control" id="form_name" onChange={(e) => { handleInputChange(e) }} placeholder="Name" />
														</div >
														<div className="col-al">
															<legend htmlFor="form_email" style={{ fontSize: "18px" }}>Email</legend>
															<input required type="email" className="form-control" id="form_email" onChange={(e) => { handleInputChange(e) }} placeholder="Email" />
														</div >
													</div >
													<div className="row-al">
														<div className="col-al">
															<legend htmlFor="form_phone" style={{ fontSize: "18px" }}>Phone Number</legend>
															<input required type="tel" className="form-control" id="form_phone" onChange={(e) => { handleInputChange(e) }} placeholder="Phone Number" />
														</div >
														<div className="col-al">
															<legend htmlFor="form_designation" style={{ fontSize: "18px" }}>Designation</legend>
															<input required type="tel" className="form-control" id="form_designation" onChange={(e) => { handleInputChange(e) }} placeholder="Designation" />
														</div >
													</div >

													<div className="row-al">
														<div className="col-al">
															<legend htmlFor="form_purpose" style={{ fontSize: "18px" }}>Research Interests </legend>
															<textarea id="form_purpose" className="form-control" onChange={(e) => { handleInputChange(e) }}>

															</textarea>
														</div>
														<div className="col-al">
															<legend htmlFor="form_altArrangements" style={{ fontSize: "18px" }}>Information for prospective students</legend>
															<textarea id="form_altArrangements" className="form-control" onChange={(e) => { handleInputChange(e) }}>

															</textarea>
														</div>
													</div>

													<div className="row-al">
														<div className="col-al">
															<legend htmlFor="form_address" style={{ fontSize: "18px" }}>Bio </legend>
															<textarea id="form_address" className="form-control" onChange={(e) => { handleInputChange(e) }}>

															</textarea>
														</div>
													</div>
													<div
														style={{
															textAlign: "left",
														}}
													>
														<input
															type="file"
															accept=".pdf"
															style={{ border: "none" }}
															onChange={handleFileInputChange}
														/>
														<span>*Please upload your Photograph</span>
													</div>

													<br />

													<div className="row-al">
														<div>
															<button type="submit" className="btn btn-primary btn-block">{formLoading ? <LoadingIndicator color={"white"}></LoadingIndicator> : "Submit"}</button>
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

