import GlobalProvider from './context/GlobalProvider';

import Main from './components/common/Main/Main';

const App = () => {
  return (
    <GlobalProvider>
      <Main />
    </GlobalProvider>
  );
};

export default App;
