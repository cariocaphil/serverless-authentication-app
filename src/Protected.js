/* src/Protected.js */
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { Auth } from 'aws-amplify'
import Container from './Container'

function Protected() {
  const navigate = useNavigate();
  useEffect(() => {
    Auth.currentAuthenticatedUser()
      .catch(() => {
        navigate('/profile')
      })
  }, [])
  return (
    <Container>
      <h1>Protected route</h1>
    </Container>
  );
}

export default Protected;