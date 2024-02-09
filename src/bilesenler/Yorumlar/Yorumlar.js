import React from 'react';
import Yorum from './Yorum';
import './Yorumlar.css';

const Yorumlar = (props) => {
  // Düzgün destructuring
  const { yorumlar } = props;

  return (
    <div>
      {Array.isArray(yorumlar) && yorumlar.map((yorum) => (
        <Yorum key={yorum.id} yorum={yorum} />
      ))}
    </div>
  );
  
};

export default Yorumlar;
