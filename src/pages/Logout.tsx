import { useEffect } from 'react';
import { signOut } from 'firebase/auth';
import { auth } from '../lib/firebase/firebase';

const Logout = () => {
  useEffect(() => {
    signOut(auth);
  }, []);
  return <div>
    <h1>You logged out!</h1>
    <h2>See you next time!</h2>
  </div>;
};
export default Logout;
