import React from 'react';
import './SubHead.css';

const SubHead= ({ message = "" }) => {
  return (
    <h2 className="Title" type="title">
        {message}
    </h2>
  );
}

export default SubHead;