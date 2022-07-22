import React from 'react';

import './Service.scss';

type Props = {
  service: Plan;
};

export const Service: React.FC<Props> = ({ service }) => {
  const {
    logo,
    price,
    type,
    subtitle,
    text,
    cashback,
  } = service;

  return (
    <div className="service">
      <div className="service__wrapper">
        <div className="service__logo">
          <img
            src={`imgs/${logo}.png`}
            alt="digital-img"
            className="service__icon"
          />
        </div>

        <div className="service__price">
          £
          {' '}
          {price}
        </div>

        <h3 className="service__title">
          {type}
        </h3>

        <h4 className="service__subtitle">
          {subtitle}
        </h4>

        <p className="service__text">
          {text.split('\n').map(item => (
            <div key={item}>
              {item}
            </div>
          ))}
        </p>

        <div className="service__cashback">
          £
          {' '}
          {cashback}
        </div>

        <div className="service__cashback-title">
          Cash Back
        </div>

        <button
          type="button"
          className="service__button"
        >
          Get started
        </button>
      </div>
    </div>
  );
};
