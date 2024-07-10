import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getUserDetails } from '../actions/userActions';

const ProfileScreen = ({ history }) => {
  const dispatch = useDispatch();

  const userDetails = useSelector((state) => state.userDetails);
  const { loading, error, user } = userDetails;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  useEffect(() => {
    if (!userInfo) {
      history.push('/login');
    } else {
      dispatch(getUserDetails('profile'));
    }
  }, [dispatch, history, userInfo]);

  return (
    <div>
      <h2>User Profile</h2>
      {error && <div>{error}</div>}
      {loading && <div>Loading...</div>}
      <div>
        <label>Name</label>
        <input type='text' value={user.name} readOnly />
      </div>
      <div>
        <label>Email</label>
        <input type='email' value={user.email} readOnly />
      </div>
    </div>
  );
};

export default ProfileScreen;
