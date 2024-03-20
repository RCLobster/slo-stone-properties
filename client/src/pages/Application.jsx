import { useState } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import { createGroup, updateGroup } from '../utils/API';

function Application() {

 // set initial form state
 const [userFormData, setUserFormData] = useState({ username: '', email: '', password: '' });
 // set state for form validation
 const [validated] = useState(false);
 // set state for alert
 const [showAlert, setShowAlert] = useState(false);

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
    //  const response = await createUser(userFormData);

     if (!response.ok) {
       throw new Error('something went wrong!');
     }

     const { token, user } = await response.json();
     console.log(user);
     Auth.login(token);
   } catch (err) {
     console.error(err);
     setShowAlert(true);
   }

   setUserFormData({
     username: '',
     email: '',
     password: '',
   });
 };

 return (
   <>
     {/* This is needed for the validation functionality above */}
     <Form noValidate validated={validated} onSubmit={handleFormSubmit}>
       {/* show alert if server response is bad */}
       <Alert dismissible onClose={() => setShowAlert(false)} show={showAlert} variant='danger'>
         Something went wrong with your application!
       </Alert>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='groupName'>Group Name</Form.Label>
         <Form.Control
           type='text'
           placeholder='The name of the group you are applying with'
           name='groupName'
           onChange={handleInputChange}
           value={userFormData.groupName}
           required
         />
         <Form.Control.Feedback type='invalid'>Group name is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='name'>Name</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your name'
           name='name'
           onChange={handleInputChange}
           value={userFormData.name}
           required
         />
         <Form.Control.Feedback type='invalid'>Username is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='school'>School Attending</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your school'
           name='school'
           onChange={handleInputChange}
           value={userFormData.school}
           required
         />
         <Form.Control.Feedback type='invalid'>School is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='graduation'>Anticipated Graduation Date</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your email address'
           name='graduation'
           onChange={handleInputChange}
           value={userFormData.graduation}
           required
         />
         <Form.Control.Feedback type='invalid'>Graduation date is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='phone'>Phone</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your phone #'
           name='phone'
           onChange={handleInputChange}
           value={userFormData.phone}
           required
         />
         <Form.Control.Feedback type='invalid'>Phone number is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='email'>Email</Form.Label>
         <Form.Control
           type='email'
           placeholder='Your email address'
           name='email'
           onChange={handleInputChange}
           value={userFormData.email}
           required
         />
         <Form.Control.Feedback type='invalid'>Email is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='driversLicense'>Driver's License</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your DL #, enter N/A if none'
           name='driversLicense'
           onChange={handleInputChange}
           value={userFormData.driversLicense}
           required
         />
         <Form.Control.Feedback type='invalid'>Driver's License number is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='ssn'>Social Security Number</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your SSN'
           name='ssn'
           onChange={handleInputChange}
           value={userFormData.ssn}
           required
         />
         <Form.Control.Feedback type='invalid'>Social Security Number is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='parent1Name'>1st Parent Name</Form.Label>
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
         <Form.Label htmlFor='parent1Address'>1st Parent Address</Form.Label>
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
         <Form.Label htmlFor='parent1Phone'>1st Parent Phone</Form.Label>
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
         <Form.Label htmlFor='parent1Email'>1st Parent Email</Form.Label>
         <Form.Control
           type='email'
           placeholder='1st parent email'
           name='parent1Email'
           onChange={handleInputChange}
           value={userFormData.parent1Email}
           required
         />
         <Form.Control.Feedback type='invalid'>Parent's email is required!</Form.Control.Feedback>
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='parent2Name'>2nd Parent Name</Form.Label>
         <Form.Control
           type='text'
           placeholder='2nd parent name'
           name='parent2Name'
           onChange={handleInputChange}
           value={userFormData.parent2Name}
         />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='parent2Address'>2nd Parent Address</Form.Label>
         <Form.Control
           type='text'
           placeholder='2nd parent address'
           name='parent2Address'
           onChange={handleInputChange}
           value={userFormData.parent2Address}
         />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='parent2Phone'>2nd Parent Phone</Form.Label>
         <Form.Control
           type='text'
           placeholder='2nd parent phone #'
           name='parent2Phone'
           onChange={handleInputChange}
           value={userFormData.parent2Phone}
         />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='parent2Email'>2nd Parent Email</Form.Label>
         <Form.Control
           type='email'
           placeholder='2nd parent email'
           name='parent2Email'
           onChange={handleInputChange}
           value={userFormData.parent2Email}
         />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='employmentHistory'>Employment History</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your employment history if applicable'
           name='employmentHistory'
           onChange={handleInputChange}
           value={userFormData.employmentHistory}
         />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='scholarshipsFA'>Scholarships/Financial Aid</Form.Label>
         <Form.Control
           type='text'
           placeholder='Your scholarships or finincial aid if applicable'
           name='scholarshipsFA'
           onChange={handleInputChange}
           value={userFormData.scholarshipsFA}
         />
       </Form.Group>

       <Form.Group className='mb-3'>
         <Form.Label htmlFor='other'>Other</Form.Label>
         <Form.Control
           type='text'
           placeholder='Any additional biographical information or rental history/certificaiton'
           name='other'
           onChange={handleInputChange}
           value={userFormData.other}
         />
       </Form.Group>

       <Button
         disabled={!(userFormData.username && userFormData.email && userFormData.password)}
         type='submit'
         variant='success'>
         Submit
       </Button>
     </Form>
   </>
 );
};

export default Application;