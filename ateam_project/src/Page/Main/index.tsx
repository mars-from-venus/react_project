//REACT
import React, { useState, useEffect } from 'react';

//STYLE
import styled from 'styled-components';

//COMPONENTS
import { Header, CardView } from 'Components';
import Sort from './Sort';

//AXIOS
import axios from 'axios';

//TYPE
import { IRequest } from '../../Type';

//RESPONSIVE
import { Mobile, PC } from 'ReactResponsive';

function Main() {
  const [originRequestList, setOriginRequestList] = useState<IRequest[]>([]);
  const [requestList, setRequestList] = useState<IRequest[]>([]);
  const [switchValue, setSwitchValue] = useState<boolean>(false);
  const [methodItem, setMethodItem] = useState<Array<string>>([]);
  const [materialItem, setMaterialItem] = useState<Array<string>>([]);

  const getList = async () => {
    try {
      const res = await axios.get('http://localhost:4000/requests');
      res.data.map((item: any) => {
        item.count = item.docs || item.count;
      });
      setOriginRequestList(res.data);
      setRequestList(res.data);
    } catch (e) {
      console.log('LISTERROR', e);
    }
  };

  useEffect(() => {
    getList();
  }, []);

  useEffect(() => {
    if (switchValue) {
      const res = requestList.filter((item: any) => item.status === '상담중');
      setRequestList(res);
    } else {
      getList();
    }
  }, [switchValue]);

  useEffect(() => {
    if (methodItem.length !== 0) {
      const res = originRequestList.filter((item: any) => isContains(methodItem, item.method));
      setRequestList(res);
      if (materialItem.length !== 0) {
        const res = requestList.filter((item: any) => isContains(materialItem, item.material));
        setRequestList(res);
      }
    } else if (materialItem.length !== 0) {
      const res = originRequestList.filter((item: any) => isContains(materialItem, item.material));
      setRequestList(res);
      if (methodItem.length !== 0) {
        const res = requestList.filter((item: any) => isContains(methodItem, item.method));
        setRequestList(res);
      }
    } else {
      getList();
    }
  }, [methodItem, materialItem]);

  const isContains = (cateroryItem: Array<string>, items: Array<string>) => {
    for (let i = 0; i < items.length; i++) {
      if (cateroryItem.includes(items[i])) {
        return true;
      }
    }
    return false;
  };

  return (
    <>
      <PcWrap>
        <PC>
          <Header />
          <EntireWrap>
            <TitleWrap>
              <TitleLabel>들어온 요청</TitleLabel>
              <SubTitleLabel>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitleLabel>
            </TitleWrap>
            <SortWrap>
              <Sort
                bodyStyle={{ margin: '32px 0 32px 0' }}
                switchValue={switchValue}
                setSwitchValue={() => setSwitchValue(!switchValue)}
                methodItem={methodItem}
                setMethodItem={setMethodItem}
                materialItem={materialItem}
                setMaterialItem={setMaterialItem}
              />
            </SortWrap>
            {requestList.length === 0 ? (
              <CardWrap style={{ border: '1px solid #C2C2C2', padding: '50px' }}>
                <EmptyLabel>조건에 맞는 견적 요청이 없습니다.</EmptyLabel>
              </CardWrap>
            ) : (
              <CardWrap>
                {requestList.map((item: any, index: number) => {
                  return (
                    <div key={`Cards-${index}`}>
                      <CardView requestList={item} />
                    </div>
                  );
                })}
              </CardWrap>
            )}
          </EntireWrap>
        </PC>
      </PcWrap>
      <MobileWrap>
        <Mobile>
          <Header />
          <EntireWrap style={{ padding: '40px' }}>
            <TitleWrap style={{ paddingTop: '1px' }}>
              <TitleLabel>들어온 요청</TitleLabel>
              <SubTitleLabel>파트너님에게 딱 맞는 요청서를 찾아보세요.</SubTitleLabel>
            </TitleWrap>
            <SortWrap>
              <Sort
                bodyStyle={{ margin: '32px 0 32px 0', flexDirection: 'column' }}
                switchValue={switchValue}
                setSwitchValue={() => setSwitchValue(!switchValue)}
                methodItem={methodItem}
                setMethodItem={setMethodItem}
                materialItem={materialItem}
                setMaterialItem={setMaterialItem}
              />
            </SortWrap>
            <CardWrap>
              {requestList.map((item: any, index: number) => {
                return (
                  <div key={`Card-${index}`}>
                    <CardView requestList={item} />
                  </div>
                );
              })}
            </CardWrap>
          </EntireWrap>
        </Mobile>
      </MobileWrap>
    </>
  );
}

export default Main;

const EntireWrap = styled.div`
  padding: 40px 140px 40px 140px;
`;

const MobileWrap = styled.section`
  flex: 1;
`;

const PcWrap = styled.section`
  flex: 1;
`;

const SortWrap = styled.div`
  padding: 0 15px 0 15px;
`;

const TitleWrap = styled.div`
  display: flex;
  flex-direction: column;
  padding: 10px;
  min-width: 350px;
`;
const CardWrap = styled.div`
  display: flex;
  min-width: 350px;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
`;
const TitleLabel = styled.text`
  font-size: 20px;
  font-family: Noto Sans KR Bold;
  font-weight: bold;
`;
const SubTitleLabel = styled.text`
  font-size: 16px;
  font-family: Noto Sans KR Regular;
  color: #323d45;
`;

const EmptyLabel = styled.text`
  font-size: 14px;
  color: #939fa5;
`;
