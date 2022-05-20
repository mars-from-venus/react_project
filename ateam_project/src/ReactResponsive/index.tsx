//REACT
import React from 'react';

//RESPONSIVE
import { useMediaQuery } from 'react-responsive';

const Mobile: React.FC = ({ children }) => {
  const isMobile = useMediaQuery({
    query: '(min-width:320px) and (max-width:767px)',
  });
  return <>{isMobile && children}</>;
};

const PC: React.FC = ({ children }) => {
  const isPc = useMediaQuery({
    query: '(min-width:768px)',
  });
  return <>{isPc && children}</>;
};

export { Mobile, PC };
