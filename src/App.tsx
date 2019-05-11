import React from 'react';

import { AppWrapper } from './styles/common';
import GlobalStyles from './styles/global';
import CrossWord from './components/CrossWord';

const App: React.FC = () => {
  return (
    <AppWrapper>
      <GlobalStyles />
      <CrossWord />
    </AppWrapper>
  );
};

export default App;
