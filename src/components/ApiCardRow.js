import React from 'react';

//Bootstrap:
import { Card, Button, Container, Row, Col } from 'react-bootstrap';

//Styles:
import "./Styles.css";

const ApiCardRow = ({ el }) => {
    let { next_days } = el;
    //console.log(next_days);
    return (
        <>
            <Container>
                <Row>
                    {next_days.map(el => (
                        <Col className="column">
                            <Card className='card'>
                                <Card.Body>
                                    <Card.Title>{el.day}</Card.Title>
                                    <Card.Img variant="top" src={el.iconURL} />
                                    <Card.Text>
                                        Min:{el.min_temp.c}, Max: {el.max_temp.c}
                                    </Card.Text>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}

                </Row>
            </Container>
        </>

    );
};

export default ApiCardRow;