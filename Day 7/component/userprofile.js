import React from 'react';
import { connect } from 'react-redux';
import { setUser } from '../component/actions';
import '../styles/profile.css'
import { Link } from 'react-router-dom';

class UserProfilePage extends React.Component {
  componentDidMount() {
    // Simulating fetching user data from an API
    const user = {
      username: 'suba',
      email: 'suba@gmail.com',
      bio: 'A passionate developer.',
      position:'Admin',
      dob:'30.08.2003',
      num:'9843751984'
    };

    this.props.setUser(user);
  }

  render() {
    const { username, email, position,dob,num } = this.props.user;

    return (
      <div className='profile'>
        <div className='head1'>
        <h1>User Profile</h1>
        </div>
        <div className='head2'>
          <h1>Image</h1>
        </div>
        <div className='head3'>
            <ul>
            <li>Username :  {username}</li>
            <li>Email :  {email}</li>
            <li>Position :  {position}</li>
            <li>Date of Birth :  {dob}</li>
            <li>Mobile Number :  {num}</li>
            <Link to='/update' style={{textAlign:'center'}}>Update profile</Link>
            </ul> 
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.user,
  };
};

const mapDispatchToProps = {
  setUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(UserProfilePage);
