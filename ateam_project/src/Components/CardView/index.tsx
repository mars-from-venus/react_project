//REACT
import * as React from 'react';

//STYLE
import styled from 'styled-components';

export default function CardView({ requestList }: any) {
  const { title, client, due, count, amount, method, material, status } = requestList;
  return (
    <Card>
      <LabelBox>
        <LabelWrap>
          <Title>{title}</Title>
          {status === '상담중' && (
            <StatusWrap>
              <Status>상담중</Status>
            </StatusWrap>
          )}
        </LabelWrap>
        <SubTitle>{client}</SubTitle>
        <LimitTitle style={{ color: '#939fa5', marginTop: '24px' }}>{due}</LimitTitle>
      </LabelBox>
      <Divider />
      <LabelBox>
        <ContentBox style={{ marginTop: '32px' }}>
          <LimitTitle>도면개수</LimitTitle>
          <LimitTitle style={{ fontWeight: 'bold', marginLeft: '32px' }}>{`${count}개`}</LimitTitle>
        </ContentBox>
        <ContentBox style={{ marginTop: '8px' }}>
          <LimitTitle>총 수량</LimitTitle>
          <LimitTitle style={{ fontWeight: 'bold', marginLeft: '40px' }}>{`${amount}개`}</LimitTitle>
        </ContentBox>
        <ContentBox style={{ marginTop: '8px' }}>
          <LimitTitle>가공방식</LimitTitle>
          <LimitTitle style={{ fontWeight: 'bold', marginLeft: '31px' }}>
            {method
              .map((item: any) => {
                return item;
              })
              .join(', ')}
          </LimitTitle>
        </ContentBox>
        <ContentBox style={{ marginTop: '8px' }}>
          <LimitTitle>재료</LimitTitle>
          <LimitTitle style={{ fontWeight: 'bold', marginLeft: '55px' }}>
            {material
              .map((item: any) => {
                return item;
              })
              .join(', ')}
          </LimitTitle>
        </ContentBox>
      </LabelBox>
      <ButtonBox>
        <RequestButton>요청 내역 보기</RequestButton>
        <ChatButton>채팅하기</ChatButton>
      </ButtonBox>
    </Card>
  );
}

const Card = styled.div`
  min-width: 300px;
  min-height: 284px;
  display: flex;
  padding: 24px 28px 24px 28px;
  margin: 5px;
  flex-direction: column;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  &:hover {
    border: 2px solid #2196f3;
  }
`;
const LabelBox = styled.div`
  display: flex;
  flex-direction: column;
`;

const LabelWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const ContentBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const ButtonBox = styled.div`
  display: flex;
  flex-direction: row;
`;
const RequestButton = styled.button`
  width: 98px;
  height: 30px;
  border-radius: 4px;
  background-color: #2196f3;
  border: none;
  color: #ffffff;
  margin-top: 32px;
`;
const ChatButton = styled.button`
  width: 62px;
  height: 30px;
  background-color: #ffffff;
  border: 1px solid #2196f3;
  border-radius: 4px;
  color: #2196f3;
  margin: 32px 0 0 6px;
`;
const Title = styled.text`
  font-size: 16px;
  font-family: Noto Sans KR Bold;
`;
const SubTitle = styled.text`
  font-size: 14px;
  font-family: Noto Sans KR Medium;
  margin-top: 4px;
`;
const StatusWrap = styled.div`
  width: 44px;
  height: 20px;
  border-radius: 20px;
  display: flex;
  justify-item: center;
  align-items: center;
  border: 1px solid #ffa000;
`;
const Status = styled.text`
  color: #ffa000;
  font-size: 11px;
  font-family: Noto Sans KR Medium;
  margin-left: 8px;
`;
const LimitTitle = styled.text`
  font-size: 14px;
  font-family: Noto Sans KR Regular;
`;
const Divider = styled.div`
  width: 100%
  hegiht: 1px;
  border:0.5px solid #e5e5e5;
  margin-top:16px
`;
