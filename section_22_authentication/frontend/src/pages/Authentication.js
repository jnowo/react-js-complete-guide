import AuthForm from '../components/AuthForm';
import {json, redirect} from "react-router-dom";

function AuthenticationPage() {
  return <AuthForm/>;
}

export default AuthenticationPage;

//this action will always be triggered when authForm is submitted
export const action = async ({request}) => {
  const searchParams = new URL(request.url).searchParams;
  const mode = searchParams.get('mode') || 'login';

  if (mode !== 'login' && mode !== 'signup') {
    throw json({message: 'Invalid mode'}, {status: 422});
  }

  const data = await request.formData();

  const authData = {
    email: data.get('email'),
    password: data.get('password')
  }

  const response = await fetch('http://localhost:8080/' + mode,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(authData)
    });


  if (response.status === 422 || response.status === 401) {
    //we can return response directly, react router will extract data for us
    return response;
  }

  if (!response.ok) {
    throw json({message: 'Could not authenticate you!'}, {status: 500});
  }

  //manage token

  const respData = await response.json();
  const token = respData.token;

  localStorage.setItem('token', token);

  return redirect('/');
}