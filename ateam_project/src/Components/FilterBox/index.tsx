//REACT
import React, { SetStateAction } from 'react';

//STYLE
import styled from 'styled-components';

//IMAGE
import DropDown from 'assets/arrow_drop_down_24px.png';

//TYPE
import { Dispatch } from 'react';

interface IFilter {
  title: string;
  isCheck: boolean;
  onClick: () => void;
  dataSource: Array<ISource>;
  checkedItem: Array<string>;
  setCheckedItem: Dispatch<SetStateAction<string[]>>;
}

interface ISource {
  id: number;
  name: string;
}

function FilterBox({ title, isCheck, onClick, dataSource, checkedItem, setCheckedItem }: IFilter) {
  const checkHandler = (checked: boolean, value: any) => {
    if (checked) {
      setCheckedItem([...checkedItem, value]);
    } else {
      setCheckedItem(checkedItem.filter((el) => el !== value));
    }
  };
  return (
    <FilterBoxWrap>
      <MaterialDrop onClick={onClick} color={checkedItem.length !== 0 ? '#1565C0' : '#ffffff'}>
        <MaterialText color={checkedItem.length !== 0 ? '#ffffff' : '#323d45'}>
          {checkedItem.length !== 0 ? `${title}(${checkedItem.length})` : title}
        </MaterialText>
        <img src={DropDown} style={{ width: '10px', height: '5px', padding: '13.5px 10px 13.5px 10px' }} />
      </MaterialDrop>
      {isCheck && (
        <MaterialWrap>
          {dataSource.map((item: any, index: number) => {
            return (
              <InputWrap key={`inputWrap-${item.id}`}>
                <Input
                  type="checkbox"
                  value={item.name}
                  checked={checkedItem.includes(item.name) ? true : false}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                    checkHandler(e.target.checked, item.name);
                  }}
                />
                <InputText>{item.name}</InputText>
              </InputWrap>
            );
          })}
        </MaterialWrap>
      )}
    </FilterBoxWrap>
  );
}

export default FilterBox;

const FilterBoxWrap = styled.div``;

const MaterialWrap = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  border: 1px solid #939fa5;
  border-radius: 4px;
  width: 100px;
  padding: 10px 5px 10px 5px;
  margin-top: 3px;
  position: relative;
`;

const InputWrap = styled.div`
  display: flex;
  flex-direction: row;
`;

const Input = styled.input`
  margin-bottom: 5px;
  border: 2px solid #939fa5;
`;

const InputText = styled.text`
  font-size: 14px;
  color: #323d45;
  font-weight: 500;
  padding-left: 5px;
  padding-top: 1.5px;
`;

const MaterialText = styled.text`
  font-size: 12px;
  padding: 9px 5px 9px 12px;
  color: ${(props) => props.color || '#323d45'};
`;

const MaterialDrop = styled.div`
  border: 1px solid #939fa5;
  width: 105px;
  height: 32px;
  border-radius: 4px;
  display: flex;
  margin-right: 8px;
  justify-content: space-between;
  &:hover {
    border: 1px solid #2196f3;
  }
  background-color: ${(props) => props.color || '#FFFFFF'};
  position: relative;
`;
