import "./App.css";
import Router from './components/routes/Router'
import {Provider} from 'react-redux'
import store from './redux/store'
import { ThemeProvider } from '@material-ui/core/styles';
import theme from './Theme'

function App() {
  return (
    <ThemeProvider theme={theme}>
    <Provider store={store}>  
    <Router />
   </Provider>
   </ThemeProvider>
  );
}

export default App;
