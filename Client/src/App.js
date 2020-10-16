import { ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/layout';
import AddMission from './containers/add-mission';
import Main from './containers/main';
import theme from './css/theme';
import fetch from 'isomorphic-fetch';

const fetchUser = async (UserToken) => {
  const userID = await fetch("http://localhost/HomeAssignmentAPI/api/main/SetUserID", {
    method: "POST",
    body: JSON.stringify(UserToken),
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    }
  }).then(async (reseponse) => {
    const userID = await reseponse.json();
    return userID
  })
  console.log(userID);
  return userID;
}

function App() {

  const [userID, setUserID] = useState('');

  useEffect(() => {
    const { REACT_APP_LOCAL_STORGE_KEY } = process.env;
    var UserToken = window.localStorage.getItem(REACT_APP_LOCAL_STORGE_KEY)
    if (UserToken === null) {
      UserToken = `user-${Date.now()}`
      window.localStorage.setItem(REACT_APP_LOCAL_STORGE_KEY, UserToken)
    }
    setUserID(fetchUser(UserToken));
  })

  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AddMission userID={userID}></AddMission>
        <Main userID={userID}></Main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
