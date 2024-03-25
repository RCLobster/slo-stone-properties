import { useState } from 'react';
import { Form, Button, Alert, Toast } from 'react-bootstrap';

import { updateGroup } from '../utils/API';

function Application() {

    // set initial form state
    const [userFormData, setUserFormData] = useState({
        groupName: '',
        property: '',
        name: '',
        school: '',
        graduation: '',
        phone: '',
        email: '',
        driversLicense: '',
        ssn: '',
        parent1Name: '',
        parent1Address: '',
        parent1Phone: '',
        parent1Email: '',
        parent2Name: '',
        parent2Address: '',
        parent2Phone: '',
        parent2Email: '',
        employmentHistory: '',
        scholarshipsFA: '',
        other: ''
    });
    // set state for form validation
    const [validated] = useState(false);
    // set state for alert
    const [showAlert, setShowAlert] = useState(false);
    const [showToast, setShowToast] = useState(false);

    const handleInputChange = (event) => {
        const { name, value } = event.target;
        setUserFormData({ ...userFormData, [name]: value });
    };

    const handleFormSubmit = async (event) => {
        event.preventDefault();
        // check if form has everything (as per react-bootstrap docs)
        const form = event.currentTarget;
        if (form.checkValidity() === false) {
            event.preventDefault();
            event.stopPropagation();
        }

        try {
            const responseA = await updateGroup(userFormData);

            const applicant = await responseA.json();
            console.log(applicant);
        } catch (err) {
            console.error(err);
            setShowAlert(true);
        }

        setShowToast(true);

        setUserFormData({
            groupName: '',
            property: '',
            name: '',
            school: '',
            graduation: '',
            phone: '',
            email: '',
            driversLicense: '',
            ssn: '',
            parent1Name: '',
            parent1Address: '',
            parent1Phone: '',
            parent1Email: '',
            parent2Name: '',
            parent2Address: '',
            parent2Phone: '',
            parent2Email: '',
            employmentHistory: '',
            scholarshipsFA: '',
            other: ''
        });
    };

    return (
        <>
            <div className='flex-parent application-page fade-in'>
                <h3>All fields marked with * are required.</h3>
                <h4>Make sure the group name is unique and matches for all members.</h4>
                <Form noValidate validated={validated} onSubmit={handleFormSubmit}>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='groupName'><strong>Group Name*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='The name of the group you are applying with'
                            name='groupName'
                            onChange={handleInputChange}
                            value={userFormData.groupName.toLocaleUpperCase()}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Group name is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3' controlId="formBasicSelect">
                        <Form.Label><strong>Property*</strong></Form.Label>
                        <Form.Control
                            as="select"
                            name='property'
                            onChange={handleInputChange}
                            value={userFormData.property}
                            required
                        >
                            <option>Select a property</option>
                            <option value="214 Patricia">214 Patricia</option>
                            <option value="226 Patricia">226 Patricia</option>
                            <option value="205 Craig">205 Craig</option>
                            {/* <option value="242 Patricia">242 Patricia</option> */}
                        </Form.Control>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='name'><strong>Name*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Name'
                            name='name'
                            onChange={handleInputChange}
                            value={userFormData.name}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='school'><strong>School Attending*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='School'
                            name='school'
                            onChange={handleInputChange}
                            value={userFormData.school}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>School is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='graduation'><strong>Anticipated Graduation Date*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Graduation date'
                            name='graduation'
                            onChange={handleInputChange}
                            value={userFormData.graduation}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Graduation date is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='phone'><strong>Phone*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='Phone #'
                            name='phone'
                            onChange={handleInputChange}
                            value={userFormData.phone}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Phone number is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='email'><strong>Email*</strong></Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='Email'
                            name='email'
                            onChange={handleInputChange}
                            value={userFormData.email.trim()}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='driversLicense'><strong>Driver's License*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='DL #, enter N/A if none'
                            name='driversLicense'
                            onChange={handleInputChange}
                            value={userFormData.driversLicense}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Driver's License number is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='ssn'><strong>Social Security Number*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='SSN'
                            name='ssn'
                            onChange={handleInputChange}
                            value={userFormData.ssn}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Social Security Number is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent1Name'><strong>1st Parent Name*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='1st parent name'
                            name='parent1Name'
                            onChange={handleInputChange}
                            value={userFormData.parent1Name}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Parent's name is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent1Address'><strong>1st Parent Address*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='1st parent address'
                            name='parent1Address'
                            onChange={handleInputChange}
                            value={userFormData.parent1Address}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Parent's address is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent1Phone'><strong>1st Parent Phone*</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='1st parent phone #'
                            name='parent1Phone'
                            onChange={handleInputChange}
                            value={userFormData.parent1Phone}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Parent's phone number is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent1Email'><strong>1st Parent Email*</strong></Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='1st parent email'
                            name='parent1Email'
                            onChange={handleInputChange}
                            value={userFormData.parent1Email.trim()}
                            required
                        />
                        <Form.Control.Feedback type='invalid'>Parent's email is required!</Form.Control.Feedback>
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent2Name'><strong>2nd Parent Name</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='2nd parent name'
                            name='parent2Name'
                            onChange={handleInputChange}
                            value={userFormData.parent2Name}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent2Address'><strong>2nd Parent Address</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='2nd parent address'
                            name='parent2Address'
                            onChange={handleInputChange}
                            value={userFormData.parent2Address}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent2Phone'><strong>2nd Parent Phone</strong></Form.Label>
                        <Form.Control
                            type='text'
                            placeholder='2nd parent phone #'
                            name='parent2Phone'
                            onChange={handleInputChange}
                            value={userFormData.parent2Phone}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='parent2Email'><strong>2nd Parent Email</strong></Form.Label>
                        <Form.Control
                            type='email'
                            placeholder='2nd parent email'
                            name='parent2Email'
                            onChange={handleInputChange}
                            value={userFormData.parent2Email}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='employmentHistory'><strong>Employment History</strong></Form.Label>
                        <Form.Control
                            as="textarea"
                            type='text'
                            placeholder='Employment history if applicable'
                            name='employmentHistory'
                            onChange={handleInputChange}
                            value={userFormData.employmentHistory}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='scholarshipsFA'><strong>Scholarships/Financial Aid</strong></Form.Label>
                        <Form.Control
                            as="textarea"
                            type='text'
                            placeholder='Scholarships or finincial aid if applicable'
                            name='scholarshipsFA'
                            onChange={handleInputChange}
                            value={userFormData.scholarshipsFA}
                        />
                    </Form.Group>

                    <Form.Group className='mb-3'>
                        <Form.Label htmlFor='other'><strong>Other</strong></Form.Label>
                        <Form.Control
                            as="textarea"
                            type='text'
                            placeholder='Any additional biographical information or rental history/certificaiton'
                            name='other'
                            onChange={handleInputChange}
                            value={userFormData.other}
                        />
                    </Form.Group>

                    <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
                        Something went wrong with your application!
                    </Alert>

                    <Button
                        className='app-btn'
                        type='submit'
                        variant='success'>
                        Submit
                    </Button>

                </Form>

                <Toast onClose={() => setShowToast(false)} show={showToast} delay={3000} autohide>
                    <Toast.Body>Application submitted!</Toast.Body>
                </Toast>
            </div>
        </>
    );
};

export default Application;