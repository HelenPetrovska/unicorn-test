import React from 'react';

import './App.scss';
import { ServiceList } from './components/ServiceList/ServiceList';

export const App: React.FC = () => {
  return (
    <div className="app">
      <div className="container">
        <ServiceList />
      </div>
    </div>
  );
};
