export const PERMISSIONS = {
  COMMISSION_READ: "commission.read",
  COMMISSION_WRITE: "commission.write",
  COMMERCIAL_COMMISSION_READ: "commercial_commission.read",
  COMMERCIAL_COMMISSION_WRITE: "commercial_commission.write",
  REBATES_READ: "commercial_discounts.read",
  REBATES_EDIT: "commercial_discounts.edit",
  REBATES_CREATE: "commercial_discounts.create",
  MASSIVE_CHARGE: "import_commissions.enabled",
  DEFAULT_COMMISSION: "edit_default_commission.enabled",
};

export const ADMIN_PERMISSIONS = [
  "commission.read",
  "commission.write",
  "commercial_commission.read",
  "commercial_commission.write",
  "commercial_discounts.read",
  "commercial_discounts.edit",
  "commercial_discounts.create",
  "import_commissions.enabled",
  "edit_default_commission.enabled",
];

export const MANTAINER_PERMISSIONS = [
  "commission.read",
  "commission.write",
  "commercial_commission.read",
  "commercial_commission.write",
  "commercial_discounts.read",
  "import_commissions.enabled",
  "edit_default_commission.enabled",
];

export const READER_PERMISSIONS = [
  "commission.read",
  "comercial_discounts.read",
  "commercial_commission.write",
];
