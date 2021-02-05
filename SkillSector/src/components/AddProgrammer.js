import './addprogrammer.css';
import React from 'react';
import axios from 'axios';
import { Form , Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import { Multiselect } from 'multiselect-react-dropdown';

const apiUrl = 'https://localhost:44327/ProgrammerInformationLists/';

class AddProgrammer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: {},
      response: {},
      options1: [{skills: '.NET'}, {skills: 'React Native'},  {skills: 'SQL'}, {skills: 'React'}, 
      {skills: 'Javascript'}, {skills: 'Flutter'}, {skills: 'Angular'}, {skills: 'API'}, {skills: 'C#'},
      {skills: 'Python'}, {skills: 'Testing'},  {skills: 'IOS Developer'}, {skills: 'Others'}
    ],
      options2: [{tags: 'IT Engineer'}, {tags: 'Remote'}, {tags: 'Game Design'},
      {tags: 'CSE Engineer'},  {tags: 'Designer'},  {tags: 'Developer'},  {tags: 'Full Stack Developer'}, 
      {tags: 'Web Developer'}
    ]
    }
  this.multiselectRef = React.createRef();
  }

  resetValues() {
    // By calling the belowe method will reset the selected values programatically
    this.multiselectRef.current.resetSelectedValues();
  }

  handleSubmit = (e) => {
    e.stopPropagation();
    //e.preventDefault();
  
    axios.post(`${apiUrl}`, this.state.users).then(response => response.data).then(
      (result) => {
        // console.log(result);
        this.setState({
          users: {}
        });
      },
      (error) => {
        this.setState({ error });
      }
    )
}
handleChange = field => (e) => {
  this.setState({
  users: {
  ...this.state.users,
   [field]: e.target.value
  }
})
}
  render() {
    return (
      <Form>
        <Form className="fresh-form">
            <Form.Group controlId="formGridEmail">
              <Form.Label>Name</Form.Label>
              <Form.Control type="name" onChange={this.handleChange('name')}  />
            </Form.Group>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" value={this.state.title} onChange={this.handleChange('title')}  />
            </Form.Group>
            <Form.Group  controlId="formGridPassword">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" value={this.state.email} onChange={this.handleChange('email')} />
            </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Company</Form.Label>
            <Form.Control value={this.state.company} onChange={this.handleChange('company')} />
          </Form.Group>
          <Form.Group controlId="formGridAddress1">
            <Form.Label>Type</Form.Label>
            <Form.Control value={this.state.type} onChange={this.handleChange('type')} />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Profile Photo</Form.Label>
            <Form.Control input type = "file" value={this.state.imagesrc} onChange={this.handleChange('imagesrc')}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Resume</Form.Label>
            <Form.Control input type = "file" value={this.state.resume} onChange={this.handleChange('resume')}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Description</Form.Label>
            <Form.Control value={this.state.description} onChange={this.handleChange('description')}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Contact</Form.Label>
            <Form.Control value={this.state.contact} onChange={this.handleChange('contact')}/>
          </Form.Group>
            <Form.Group controlId="formGridAddress2">
            <Form.Label>Location</Form.Label>
            <Form.Control value={this.state.location} onChange={this.handleChange('location')} />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Street Address</Form.Label>
            <Form.Control value={this.state.streetAddress} onChange={this.handleChange('streetAddress')} />
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Zipcode</Form.Label>
            <Form.Control value={this.state.zipcode} onChange={this.handleChange('zipcode')} />
          </Form.Group>
          <Form.Label>Skills</Form.Label> 
        <Multiselect
          options={this.state.options1} // Options to display in the dropdown
          selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          onSelect={this.onSelect} // Function will trigger on select event
          onRemove={this.onRemove} // Function will trigger on remove event
          displayValue="skills" // Property name to display in the dropdown options
        />
          <Form.Label>Tags</Form.Label>
          <Multiselect
          options={this.state.options2} // Options to display in the dropdown
          selectedValues={this.state.selectedValue} // Preselected value to persist in dropdown
          onSelect={this.onSelect} // Function will trigger on select event
          onRemove={this.onRemove} // Function will trigger on remove event
          displayValue="tags" // Property name to display in the dropdown options
        />
          <Form.Group controlId="formGridAddress2">
            <Form.Label>Links</Form.Label>
            <Form.Control value={this.state.links} onChange={this.handleChange('links')}/>
          </Form.Group>
          <Form.Group controlId="formGridAddress2">
            <Form.Label>date</Form.Label>
            <Form.Control value={this.state.date} onChange={this.handleChange('date')}/>
          </Form.Group>
          <Link to = {`./ProgrammerTable`} >
          <Button variant="primary" type="submit" onClick={this.handleSubmit}>
          Submit</Button></Link>
        </Form>
      </Form>
    )
  }
}

export default AddProgrammer;
