import React from 'react';

import data from '../../data.json';
import { Service } from '../Service/Service';

import './ServiceList.scss';

export const ServiceList: React.FC = () => {
  return (
    <div className="serviceList">
      {data.map((service) => (
        <Service key={service.id} service={service} />
      ))}
    </div>
  );
};
