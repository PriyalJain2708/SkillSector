import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
import Badge from 'react-bootstrap/Badge'
import { Form, Col, Button } from 'react-bootstrap';
import './programmertable.css';


const apiUrl = 'https://localhost:44327/ProgrammerInformationLists';
class ProgrammerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchString: "",
      users: [],
      response: {},
    };
    this.handleChange = this.handleChange.bind(this);
  }
  componentDidMount() {
    axios.get(apiUrl).then(response => response.data).then(
      (result) => {
        console.log(result);
        this.setState({
          users: result
        });
      },
      (error) => {
        this.setState({ error });
      }
    )
  }
  handleChange() {
    this.setState({
      searchString: this.refs.search.value
    });
  }
  render() {
    // const { users } = this.state;
    let _users = this.state.users;
    let search = this.state.searchString.trim().toLowerCase();
    if (search.length > 0) {
      _users = _users.filter(function(user) {
        return  user.skills.toLowerCase().match(search) || user.tags.toLowerCase().match(search)
        || user.name.toLowerCase().match(search);
      });
  }
return (
<div className="container-fluid">
  <Form className="mb-4">
  <Form.Row className="align-items-end">
    <Form.Group as={Col}>
      <Form.Label className="user">Keywords</Form.Label>
      <Form.Control name="description" type="text" value={this.state.searchString}  ref="search" 
       onChange={this.handleChange} placeholder="Name, Skills, and Tags" className="user-search" />
    </Form.Group>
    <Form.Group as={Col} >
    <Link to={`./AddProgrammer`}>
      <Button variant="primary" type="submit" className="user-button"> Add Programmer</Button>
    </Link>
    </Form.Group>
  </Form.Row>
</Form>
        <div className="row">
          <div className="table-responsive">
            <table className ="table table-striped">
              <thead className ="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Skills</th>
                  <th scope="col" className="tags">Tags</th>
                  <th scope="col">Company</th>
                  <th scope="col">Email</th>
                  <th scope="col">Type</th>
                {/*  <th scope="col">Profile Photo</th> */}
                  <th scope="col">Resume</th>
                  <th scope="col">Links</th>
                  <th scope="col">Location</th>
                {/*  <th scope="col">Street Address</th> 
                 <th scope="col">Zipcode</th>
                {/* <th scope="col">Date</th>  */}
                </tr>
              </thead>
              <tbody>
                {_users.map(user => (
                  <tr key={user.userId}>
                    <td><Link to={`./ProfilePage/${user.userId}`}>{user.name}</Link></td>
                    <td>{user.title}</td>
                    <td>{user.description}</td>
                    <td><Badge className="user-round" variant="secondary">{user.skills}</Badge></td>
                    <td><Badge className="user-round" variant="secondary">{user.tags}</Badge></td>
                    <td>{user.company}</td> 
                    <td>{user.email}</td>
                    <td>{user.type}</td>
                  {/*  <td><img src={ user.imagesrc} alt="" /></td>  */}
                    <td><a href = {user.resume} target="_blank" rel="noreferrer">Resume</a></td>
                    <td><a href = {user.links} target="_blank" rel="noreferrer">Linkedin Profile</a></td>
                    <td>{user.location}</td>
                  {/* <td>{user.streetAddress}</td>  
                   <td>{user.zipcode}</td>
                  <td>{user.date}</td>   */}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>  
      </div>
    )
  }
}
export default ProgrammerTable;