import React from 'react';

import './App.scss';
import { Footer } from './components/Footer/Footer';
import { ServiceList } from './components/ServiceList/ServiceList';

export const App: React.FC = () => {
  return (
    <div className="app">
      <main>
        <div className="container">
          <ServiceList />
        </div>
      </main>
      <Footer />
    </div>
  );
};
