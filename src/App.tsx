import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesComponent from './Pages/RoutesComponent';
import { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './Styles/Theme';
import GlobalStyle from './Styles/GlobalStyle';
import GlobalFont from './Styles/GlobalFont';

function App(): JSX.Element {
  console.log(process.env.TEST_NAME);

  return (
    <>
      <ThemeProvider theme={lightTheme}>
        <GlobalStyle />
        <GlobalFont />
        <Router>
          <RoutesComponent />
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
