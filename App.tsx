import GlobalProvider from './context/GlobalProvider';
import Main from './components/common/Main/Main';

const App = () => (
  <GlobalProvider>
    <Main />
  </GlobalProvider>
);

export default App;
