import Content from 'components/Layout/Content/Content';
import React from 'react';
const Layout = ({ children }) => {
  return (
    <div className='flex min-h-screen bg-gray-100'>
      <div className='flex flex-col flex-grow-0 flex-shrink w-full mx-auto' style={{ maxWidth: '1400px' }}>
        <Content>{children}</Content>
      </div>
    </div>
  );
};

export default Layout;
