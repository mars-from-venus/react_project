//REACT
import React, { useState } from 'react';

//STYLE
import styled from 'styled-components';

//RESPONSIVE
import { Mobile, PC } from 'ReactResponsive';

//IMAGE
import LogoImage from 'assets/자산 1@3x 3.svg';
import Vector from 'assets/Vector.svg';
import MenuIcon from 'assets/menu_24px.png';

//COMPONENTS
import Sidebar from './SideBar';

function Header() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <div>
        <PC>
          <HeaderWrap>
            <ImageWrap>
              <img src={LogoImage} style={{ padding: '15px 0 15px 20px' }} />
            </ImageWrap>
            <LabelBox>
              <div style={{ paddingRight: '20px' }}>
                <img src={Vector} style={{ width: '16.67px', height: '15px', marginRight: '8px' }} />
                <CompanyText>A 가공 업체</CompanyText>
              </div>
              <Divider />
              <LogoutText>로그아웃</LogoutText>
            </LabelBox>
          </HeaderWrap>
        </PC>
      </div>
      <div>
        <Mobile>
          <HeaderWrap style={{ height: '44px' }}>
            <ImageWrap style={{}}>
              <img src={MenuIcon} style={{ width: '24px', height: '24px' }} onClick={() => setOpen(!isOpen)} />
              <img src={LogoImage} style={{ width: '91.8px', height: '12px', padding: '0 0 5px 19px' }} />
            </ImageWrap>
          </HeaderWrap>
          {isOpen && <Sidebar onClose={() => setOpen(false)} />}
        </Mobile>
      </div>
    </>
  );
}

export default Header;

const HeaderWrap = styled.div`
  width: 100%;
  height: 70px;
  background-color: #1565c0;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
`;

const ImageWrap = styled.div`
  padding: 10px 0 10px 20px;
`;

const LabelBox = styled.div`
  display: flex;
  flex-direction: row;
  padding: 25px 40px 25px 25px;
`;

const CompanyText = styled.text`
  font-size: 14px;
  color: #ffffff;
  text-align: left;
  line-height: 20px;
  font-family: Noto Sans KR Medium;
`;

const Divider = styled.div`
  width: 1px;
  hegiht: 100%;
  background-color: #ffffff;
`;

const LogoutText = styled.text`
  font-size: 14px;
  color: #ffffff;
  margin-left: 25px;
  text-align: left;
  line-height: 20px;
  font-family: Noto Sans KR Regular;
`;
