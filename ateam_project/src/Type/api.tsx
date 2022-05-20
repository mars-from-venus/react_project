import React from 'react';

export interface IData {
  config: Object;
  data: Array<IRequest[]>;
  headers: Object;
  request: any;
  status: number;
  statusText: string;
}

export interface IRequest {
  id: number;
  title: string;
  client: string;
  due: string;
  count: number;
  amount: number;
  method: Array<string>;
  material: Array<string>;
  status: string;
}
