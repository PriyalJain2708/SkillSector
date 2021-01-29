import React from 'react'
import { Form, Col } from 'react-bootstrap';
import './searchform.css';

export default function SearchForm({ params, onParamChange }) {
  return (
    <Form className="mb-4">
      <Form.Row className="align-items-end">
        <Form.Group as={Col} >
          <Form.Label>Keywords</Form.Label>
          <Form.Control name="description" type="text" />
        </Form.Group>
        <Form.Group as={Col} >
          <Form.Label>Location</Form.Label>
          <Form.Control name="location" type="text" />
        </Form.Group>
      </Form.Row>
    </Form>
  )
}