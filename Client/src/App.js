import { ThemeProvider } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import './App.css';
import Layout from './components/layout';
import AddMission from './containers/add-mission';
import Main from './containers/main';
import theme from './css/theme';
import fetch from 'isomorphic-fetch';

//#region http requests functions

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
  return userID;
}

const addMission = async (mission, userID) => {
  const { REACT_APP_API_BASE_URL } = process.env;
  const requestUrl = REACT_APP_API_BASE_URL + 'AddMission';
  const formData = new FormData();
  mission.missionImage.forEach((file, i) => {
    formData.append(i, file, file.name);
  })
  formData.append('UserID', userID);
  formData.append('MissionTitle', mission.missionTitle);
  const newMission = await fetch(requestUrl, {
    method: "POST",
    body: formData
  }).then(async (reseponse) => {
    const NewMission = await reseponse.json();
    return NewMission;
  });
  return newMission;
}

const fetchUserMissions = async (userID) => {
  const { REACT_APP_API_BASE_URL } = process.env;
  const requestUrl = REACT_APP_API_BASE_URL + 'GetUserMissions';
  const userMissions = await fetch(requestUrl + `?UserID=${userID}`, {
    method: "GET"
  }).then(async (reseponse) => {
    const missions = await reseponse.json();
    return missions;
  })
  return userMissions;
}

const fetchAllMissions = async () => {
  const { REACT_APP_API_BASE_URL } = process.env;
  const requestUrl = REACT_APP_API_BASE_URL + 'GetAllMission';
  const allMissions = await fetch(requestUrl, {
    method: "GET"
  }).then(async (reseponse) => {
    const missions = await reseponse.json();
    return missions;
  })
  return allMissions;
}

//#endregion

let App = () => {

  let [userID, setUserID] = useState('');
  let [missions, setMissions] = useState([]);

  useEffect(() => {
    const { REACT_APP_LOCAL_STORGE_KEY } = process.env;
    var UserToken = window.localStorage.getItem(REACT_APP_LOCAL_STORGE_KEY)
    if (UserToken === null) {
      UserToken = `user-${Date.now()}`
      window.localStorage.setItem(REACT_APP_LOCAL_STORGE_KEY, UserToken)
    }
    (async () => {
      const EnsureUserID = await fetchUser(UserToken);
      if (EnsureUserID) {
        setUserID(EnsureUserID);
      }
    })();
  }, [])

  const handleFetchUserMissions = async () => {
    setMissions(await fetchUserMissions(userID));
  }

  const handleAddMission = async (mission) => {
    const newMission = await addMission(mission, userID);
    const newMissionArray = [...missions].concat([newMission]);
    setMissions(newMissionArray);
  }

  const handleShowAllMissions = async () => {
    setMissions(await fetchAllMissions());
  }

  return (
    <ThemeProvider theme={theme}>
      {userID && userID.includes('user') !== undefined ?
        <Layout>
          <AddMission handleAddMission={handleAddMission}></AddMission>
          <Main missions={missions} handleShowAllMissions={handleShowAllMissions} handleFetchUserMissions={handleFetchUserMissions}></Main>
        </Layout>
        : ''}
    </ThemeProvider>
  );
}

export default App;
