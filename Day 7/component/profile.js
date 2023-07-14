import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import UserProfilePage from '../component/userprofile';

class Profile extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <UserProfilePage />
        </div>
      </Provider>
    );
  }
}

export default Profile;
