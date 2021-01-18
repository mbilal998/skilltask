import logo from './logo.svg';
import './App.css';
import {ThemeProvider} from '@material-ui/core/styles';
import Routes from './app/Routes';
import Theme from './app/theme/Theme';

function App() {
  return (
    <ThemeProvider theme={Theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
