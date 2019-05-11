import React from 'react';

import GlobalStyles from './styles/global';
import CrossWord from './components/CrossWord';

const App: React.FC = () => {
  return (
    <div className="App">
      <GlobalStyles />
      <CrossWord />
    </div>
  );
};

export default App;
