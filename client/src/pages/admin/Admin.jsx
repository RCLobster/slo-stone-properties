import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
    Container,
    Card,
    Button,
    Row,
    Col,
    Modal
} from 'react-bootstrap';
import Auth from '../../utils/auth';

import { getGroups, deleteGroup } from '../../utils/API';


function Admin() {
    const [groupData, setGroupData] = useState({});
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const navigate = useNavigate();


    // use this to determine if `useEffect()` hook needs to run again
    const groupDataLength = Object.keys(groupData).length;

    // if the user is NOT logged in, redirect them to /login
    useEffect(() => {
        if (!Auth.loggedIn()) {
            navigate('/admin/login');
        }
    }, [navigate]);


    useEffect(() => {
        const getGroupData = async () => {
            try {
                const token = Auth.loggedIn() ? Auth.getToken() : null;

                if (!token) {
                    return false;
                }

                const response = await getGroups(token);

                if (!response.ok) {
                    throw new Error('something went wrong!');
                }

                const group = await response.json();
                setGroupData(group);
            } catch (err) {
                console.error(err);
            }
        };

        getGroupData();
    }, [groupDataLength]);

    const deleteGroupData = async (groupName) => {
        try {
            const token = Auth.loggedIn() ? Auth.getToken() : null;

            if (!token) {
                return false;
            }

            const response = await deleteGroup(token, groupName);

            if (!response.ok) {
                throw new Error('something went wrong!');
            }

            const group = await response.json();
            const updatedGroups = groupData.filter(group => group.groupName !== groupName);
            setGroupData(updatedGroups);
            handleClose();
        } catch (err) {
            console.error(err);
        }
    };

    if (!Auth.loggedIn()) return null;

    if (!groupDataLength) {
        return <h2 id='no-groups'>No Groups Found</h2>;
    }
    return (
        <>
            <div fluid className="text-light bg-dark p-5">
                <Container>
                    <h1>Viewing all groups.</h1>
                </Container>
            </div>
            <Container >
                <Row>
                    {groupData.map((group) => {
                        return (
                            <Col className='admin-parent'>
                                <Card key={group._id} border='dark' >
                                    <Card.Body >
                                        <div className='admin-group-heading'>
                                            <Card.Title><strong>Group Name: </strong>{group.groupName}</Card.Title>
                                            <Card.Text><strong>Property:</strong> {group.property}</Card.Text>
                                            <Card.Text><strong>Group size:</strong> {group.applicantCount}</Card.Text>
                                        </div>
                                        <Col className='admin-group' >
                                            {group.applicants.map((applicant) => {
                                                return (
                                                    <div className='applicants' key={applicant._id}>
                                                        <Card.Text><strong>Applicant Name:</strong> {applicant.name}</Card.Text>
                                                        <Card.Text><strong>School:</strong> {applicant.school}</Card.Text>
                                                        <Card.Text><strong>Anticipated Graduation:</strong> {applicant.graduation}</Card.Text>
                                                        <Card.Text><strong>Phone #:</strong> {applicant.phone}</Card.Text>
                                                        <Card.Text><strong>Email:</strong> {applicant.driversLicense}</Card.Text>
                                                        <Card.Text>{applicant.ssn}</Card.Text>
                                                        <Card.Text><strong>1st Parent's Name:</strong> {applicant.parent1Name}</Card.Text>
                                                        <Card.Text><strong>1st Parent's Address:</strong> {applicant.parent1Address}</Card.Text>
                                                        <Card.Text><strong>1st Parent's Phone #:</strong> {applicant.parent1Phone}</Card.Text>
                                                        <Card.Text><strong>1st Parent's Email:</strong> {applicant.parent1Email}</Card.Text>
                                                        {applicant.parent2Name ? (<Card.Text><strong>2nd Parent's Name:</strong> {applicant.parent2Name}</Card.Text>) : (<></>)}
                                                        {applicant.parent2Address ? (<Card.Text><strong>2nd Parent's Address:</strong> {applicant.parent2Address}</Card.Text>) : (<></>)}
                                                        {applicant.parent2Phone ? (<Card.Text><strong>2nd Parent's Phone #:</strong> {applicant.parent2Phone}</Card.Text>) : (<></>)}
                                                        {applicant.parent2Email ? (<Card.Text><strong>2nd Parent's Email:</strong> {applicant.parent2Email}</Card.Text>) : (<></>)}
                                                        {applicant.employmentHistory ? (<Card.Text><strong>Employment History:</strong> {applicant.employmentHistory}</Card.Text>) : (<></>)}
                                                        {applicant.scholarshipsFA ? (<Card.Text><strong>Scholarships/Financial Aid:</strong> {applicant.scholarshipsFA}</Card.Text>) : (<></>)}
                                                        {applicant.other ? (<Card.Text><strong>Other:</strong> {applicant.other}</Card.Text>) : (<></>)}
                                                    </div>
                                                );
                                            })}
                                        </Col>
                                    </Card.Body>
                                    <Button variant="danger" onClick={handleShow}>
                                        Delete Group
                                    </Button>

                                    <Modal show={show} onHide={handleClose}>
                                        <Modal.Header closeButton>
                                            <Modal.Title>Delete Group</Modal.Title>
                                        </Modal.Header>
                                        <Modal.Body>Are you sure you want to delete this group? This cannot be undone.</Modal.Body>
                                        <Modal.Footer>
                                            <Button variant="secondary" onClick={handleClose}>
                                                Close
                                            </Button>
                                            <Button variant="danger" onClick={() => deleteGroupData(group.groupName)}>
                                                Yes, I'm sure
                                            </Button>
                                        </Modal.Footer>
                                    </Modal>
                                </Card>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </>
    )
};

export default Admin;