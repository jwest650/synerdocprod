import React, { useContext, useRef } from 'react';
import { BiPlus } from 'react-icons/bi';
import GeneralContext from '../../context/GeneralContext';

const Card = ({ title, addOption, selectOptions }) => {
  return (
    <div className="card">
      <h2>{title && title}</h2>
      {addOption && (
        <div>
          <BiPlus />
          <span></span>
        </div>
      )}
    </div>
  );
};

export default Card;
