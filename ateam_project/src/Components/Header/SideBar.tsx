//REACT
import React, { useEffect } from 'react';

//STYLE
import styled from 'styled-components';

//IMAGE
import Logo from 'assets/CAPA_partners_colorlogo 1.png';
import Vector from 'assets/Vectorblack.png';

const Sidebar = ({ onClose }: any) => {
  const handleClose = () => {
    onClose();
  };

  useEffect(() => {
    window.addEventListener('click', handleClose);
    return () => {
      window.removeEventListener('click', handleClose);
    };
  });

  return (
    <Container>
      <SidebarContain style={{ width: `70%`, height: '100%' }}>
        <div>
          <div style={{ padding: '16px 0 16px 20px' }}>
            <img src={Logo} style={{ width: '91.52px', height: '12px' }} />
          </div>
          <div style={{ width: '100%', height: 1, background: '#E5E5E5' }} />
          <div style={{ padding: '36px 0 0 30px' }}>
            <div>
              <img src={Vector} style={{ width: '15px', height: '15px' }} />
              <SideBarText style={{ paddingLeft: '8px' }}>파트너정밀가공</SideBarText>
            </div>
            <div style={{ marginTop: '20px' }}>
              <SideBarText>로그아웃</SideBarText>
            </div>
          </div>
        </div>
      </SidebarContain>
    </Container>
  );
};

export default Sidebar;

const Container = styled.div`
  width: 100%;
  hegiht: 100%;
`;

const SidebarContain = styled.div`
  background-color: #ffffff;
  border-right: 1px solid #e5e5e5;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  color: #202020;
  z-index: 99;
`;

const SideBarText = styled.text`
  font-weight: 500;
  font-size: 14px;
  color: #323d45;
`;
