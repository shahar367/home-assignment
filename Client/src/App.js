import { ThemeProvider } from '@material-ui/core';
import React from 'react';
import './App.css';
import Layout from './components/layout';
import AddMission from './containers/add-mission';
import Main from './containers/main';
import theme from './css/theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <AddMission></AddMission>
        <Main></Main>
      </Layout>
    </ThemeProvider>
  );
}

export default App;
