import React from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import SearchForm from "./SearchForm";
import { Link } from 'react-router-dom';

const apiUrl = 'https://localhost:44327/ProgrammerInformationLists';

class ProgrammerTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      response: {},
    }
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

  render() {
    const { users } = this.state;
    return (
      <div className="container">
        <SearchForm />
        <div className="row">
          <div className="col-12 overflow-auto">
            <table class="table table-striped">
              <thead class="thead-dark">
                <tr>
                  <th scope="col">Name</th>
                  <th scope="col">Title</th>
                  <th scope="col">Description</th>
                  <th scope="col">Company</th>
                  <th scope="col">Email</th>
                  <th scope="col">Type</th>
                  <th scope="col">Profile Photo</th>
                  <th scope="col">Resume</th>
                  <th scope="col">Links</th>
                  <th scope="col">Location</th>
                  <th scope="col">Street Address</th>
                  <th scope="col">Zipcode</th>
                  <th scope="col">Skills</th>
                  <th scope="col">Tags</th>
                  <th scope="col">Date</th>
                </tr>
              </thead>
              <tbody>
                {users.map(user => (
                  <tr key={user.userId}>
                    <td><Link to={`./ProfilePage/${user.userId}`}>{user.name}</Link></td>
                    <td>{user.title}</td>
                    <td>{user.description}</td>
                    <td>{user.company}</td> 
                    <td>{user.email}</td>
                    <td>{user.type}</td>
                    <td><img src={user.imagesrc} alt="" /></td>
                    <td><a href = {user.resume} target="_blank" rel="noreferrer">Resume</a></td>
                    <td><a href = {user.links} target="_blank" rel="noreferrer">Linkedin Profile</a></td>
                    <td>{user.location}</td>
                    <td>{user.streetAddress}</td>
                    <td>{user.zipcode}</td>
                    <td>{user.skills}</td>
                    <td>{user.tags}</td>
                    <td>{user.date}</td>
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