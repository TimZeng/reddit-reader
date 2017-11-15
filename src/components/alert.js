import React from 'react';

export const Alert = ({ alert }) => {
  if ( !alert ) return null;

  return (
    <center className='alert'>
      { alert }
    </center>
  );
}
