import { useState, useEffect } from 'react';
import {
    Container,
    Card,
    Button,
    Row,
    Col
} from 'react-bootstrap';
import Auth from '../../utils/auth';

import { getGroups } from '../../utils/API';


function Admin() {
    const [groupData, setGroupData] = useState({});

    // use this to determine if `useEffect()` hook needs to run again
    const groupDataLength = Object.keys(groupData).length;

    useEffect(() => {
        const getGroupData = async () => {
            try {
                // const token = Auth.loggedIn() ? Auth.getToken() : null;

                // if (!token) {
                //     return false;
                // }

                const response = await getGroups();

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

if (!groupDataLength) {
    return <h2>LOADING...</h2>;
  }
    return (
        <>
            <div fluid className="text-light bg-dark p-5">
                <Container>
                    <h1>Viewing all groups.</h1>
                </Container>
            </div>
            <Container>
                <Row>
                    {groupData.map((group) => {
                        return (
                            <Col md="4">
                                <Card key={group._id} border='dark'>
                                    <Card.Body>
                                        <Card.Title>{group.groupName}</Card.Title>
                                        <Card.Text>Property: {group.property}</Card.Text>
                                        {group.applicants.map((applicant) => {
                                            return (
                                                <Col md="4" key={applicant.name}>
                                                    <Card.Text>{applicant.name}</Card.Text>
                                                    <Card.Text>{applicant.school}</Card.Text>
                                                    <Card.Text>{applicant.graduation}</Card.Text>
                                                    <Card.Text>{applicant.phone}</Card.Text>
                                                    <Card.Text>{applicant.driversLicense}</Card.Text>
                                                    <Card.Text>{applicant.ssn}</Card.Text>
                                                    <Card.Text>{applicant.parent1Name}</Card.Text>
                                                    <Card.Text>{applicant.parent1Address}</Card.Text>
                                                    <Card.Text>{applicant.parent1Phone}</Card.Text>
                                                    <Card.Text>{applicant.parent1Email}</Card.Text>
                                                    {applicant.parent2Name ? (<Card.Text>{applicant.parent2Name}</Card.Text>): (<></> )}
                                                    {applicant.parent2Address ? (<Card.Text>{applicant.parent2Address}</Card.Text>): (<></> )}
                                                    {applicant.parent2Phone ? (<Card.Text>{applicant.parent2Phone}</Card.Text>): (<></> )}
                                                    {applicant.parent2Email ? (<Card.Text>{applicant.parent2Email}</Card.Text>): (<></> )}
                                                    {applicant.employmentHistory ? (<Card.Text>{applicant.employmentHistory}</Card.Text>): (<></> )}
                                                    {applicant.scholarshipsFA ? (<Card.Text>{applicant.scholarshipsFA}</Card.Text>): (<></> )}
                                                    {applicant.other ? (<Card.Text>{applicant.other}</Card.Text>): (<></> )}
                                                </Col>
                                            );
                                        })}
                                    </Card.Body>
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