//REACT
import React, { useState, Dispatch, SetStateAction } from 'react';

//STYLE
import styled from 'styled-components';
import { Switch } from '@mui/material';

//COMPONENTS
import { FilterBox } from 'Components';

//CONSTANT
import { MATERIAL_LIST, METHOD_LIST } from 'Service';

//IMAGE
import RESET from '../../assets/refresh_24px.png';

interface ISort {
  bodyStyle?: React.CSSProperties;
  switchValue: boolean;
  setSwitchValue: () => void;
  methodItem: Array<string>;
  setMethodItem: Dispatch<SetStateAction<string[]>>;
  materialItem: Array<string>;
  setMaterialItem: Dispatch<SetStateAction<string[]>>;
}

function Sort({
  bodyStyle,
  switchValue,
  setSwitchValue,
  methodItem,
  setMethodItem,
  materialItem,
  setMaterialItem,
}: ISort) {
  const [checkBoxVisible, setCheckBoxVisible] = useState<boolean>(false);
  const [methodBoxVisible, setMethodBoxVisible] = useState<boolean>(false);

  const handleReset = () => {
    setCheckBoxVisible(false);
    setMethodBoxVisible(false);
    setMaterialItem([]);
    setMethodItem([]);
  };

  return (
    <FilterWrap style={bodyStyle && bodyStyle}>
      <BoxWrap>
        <FilterBox
          title={'가공방식'}
          isCheck={methodBoxVisible}
          onClick={() => setMethodBoxVisible(!methodBoxVisible)}
          dataSource={METHOD_LIST}
          checkedItem={methodItem}
          setCheckedItem={setMethodItem}
        />
        <FilterBox
          title={'재료'}
          isCheck={checkBoxVisible}
          onClick={() => setCheckBoxVisible(!checkBoxVisible)}
          dataSource={MATERIAL_LIST}
          checkedItem={materialItem}
          setCheckedItem={setMaterialItem}
        />
        {(methodItem.length !== 0 || materialItem.length !== 0) && (
          <ResetWrap onClick={handleReset}>
            <img src={RESET} style={{ width: '16px', height: '16px' }} />
            <ResetTitle>필터링 리셋</ResetTitle>
          </ResetWrap>
        )}
      </BoxWrap>
      <SwitchWrap>
        <Switch
          onClick={setSwitchValue}
          value={switchValue}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
        />
        <RequestText>상담 중인 요청만 보기</RequestText>
      </SwitchWrap>
    </FilterWrap>
  );
}

export default Sort;

const FilterWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const BoxWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const ResetWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding-left: 15px;
  padding-top: 10px;
`;

const SwitchWrap = styled.div`
  display: flex;
  flex-direction: row;
  padding: 20px 0 0 0;
`;

const RequestText = styled.text`
  font-size: 14px;
  padding: 11px 0 10px 5px;
`;

const ResetTitle = styled.text`
  font-size: 12px;
  color: #2196f3;
  padding-left: 8px;
  line-height: 18px;
`;
