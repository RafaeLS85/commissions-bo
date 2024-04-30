export type BaseCommission = {
  _id: string;
  defaultCommission: number;
  sellerId: string;
  lastUpdate: Date | string;
  seller: string;
};

export type BaseCommissionData = {
  items: BaseCommission[];
  count: number;
};

export interface CurrentCommissionForm {
  rate: number;
  validTo: Date | string;
  validFrom?: Date | string;
}

export interface NewCommisionForm {
  rate: number;
  sku: string;
  validTo: Date | string;
  validFrom: Date | string;
}
