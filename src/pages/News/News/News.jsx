import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useLoaderData } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa6";
import EditorsInsights from '../EditorsInsights/EditorsInsights';

const News = () => {
const news = useLoaderData();
const {_id,title, details, image_url, category_id}= news;
    return (
        <div>
               <Card >
                    <Card.Img variant="top" src={image_url} />
                    <Card.Body>
                        <Card.Title>{title}</Card.Title>
                        <Card.Text>
                        {details}
                        </Card.Text>
                        <Link to={`/categories/${category_id}`}>
                            <Button variant="danger"><FaArrowLeft /> All news in this category</Button></Link>
                    </Card.Body>
                </Card>
        <EditorsInsights></EditorsInsights>
        </div>

    );
};

export default News;