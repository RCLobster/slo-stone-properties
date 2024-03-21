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
  
    return(
        <>
        <div fluid className="text-light bg-dark p-5">
          <Container>
            <h1>Viewing all groups.</h1>
          </Container>
        </div>
        <Container>
          <h2 className='pt-5'>
            {groupData.savedBooks.length
              ? `Viewing ${groupData.savedBooks.length} saved ${groupData.savedBooks.length === 1 ? 'book' : 'books'}:`
              : 'You have no saved books!'}
          </h2>
          <Row>
            {groupData.savedBooks.map((book) => {
              return (
                <Col md="4">
                  <Card key={book.bookId} border='dark'>
                    {book.image ? <Card.Img src={book.image} alt={`The cover for ${book.title}`} variant='top' /> : null}
                    <Card.Body>
                      <Card.Title>{book.title}</Card.Title>
                      <p className='small'>Authors: {book.authors}</p>
                      <Card.Text>{book.description}</Card.Text>
                      <Button className='btn-block btn-danger' onClick={() => handleDeleteBook(book.bookId)}>
                        Delete this Book!
                      </Button>
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