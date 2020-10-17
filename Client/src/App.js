import { ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/layout';
import AddMission from './containers/add-mission';
import Main from './containers/main';
import theme from './css/theme';
import fetch from 'isomorphic-fetch';

const fetchUser = async (UserToken) => {
  const { REACT_APP_API_BASE_URL } = process.env;
  const requestUrl = REACT_APP_API_BASE_URL + 'SetUserID';
  const userID = await fetch(requestUrl, {
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

const uploadMission = (mission, userID) => {
  const { REACT_APP_API_BASE_URL } = process.env;
  const requestUrl = REACT_APP_API_BASE_URL + 'AddMission';
  const formData = new FormData();
  mission.missionImage.forEach((file, i) => {
    formData.append(i, file, file.name);
  })
  formData.append('UserID', userID);
  formData.append('MissionTitle', mission.missionTitle);
  fetch(requestUrl, {
    method: "POST",
    body: formData
  }).then((reseponse) => {
  });
}

function App() {

  let [userID, setUserID] = useState('');

  useEffect(() => {
    const { REACT_APP_LOCAL_STORGE_KEY } = process.env;
    var UserToken = window.localStorage.getItem(REACT_APP_LOCAL_STORGE_KEY)
    if (UserToken === null) {
      UserToken = `user-${Date.now()}`
      window.localStorage.setItem(REACT_APP_LOCAL_STORGE_KEY, UserToken)
    }
    (async () => setUserID(await fetchUser(UserToken)))();
  }, [])

  const handleUploadMission = async (mission) => {
    await uploadMission(mission, userID);
  }

  return (
    <ThemeProvider theme={theme}>
      {userID && userID.includes('user') !== undefined ?
        <Layout>
          <AddMission handleUploadMission={handleUploadMission}></AddMission>
          <Main userID={userID}></Main>
        </Layout>
        : ''}
    </ThemeProvider>
  );
}

export default App;
