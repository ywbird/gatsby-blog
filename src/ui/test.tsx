import React from 'react';

const Test = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      Bonk<br></br>
      <strong>{children}</strong>
      Bonk
    </>
  );
};

export default Test;
