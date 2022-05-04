export type PermissionAction = "create" | "read" | "edit" | "delete";

export type AccessScopesType =
  | "Users"
  | "AccountSettings"
  | "Roles"
  | "Contacts"
  | "ContactSegments"
  | "Customers"
  | "CustomerTypes";

export interface AccessScope {
  id: number;
  description: string | null;
  resource: AccessScopesType;
  action: PermissionAction;
  granted: boolean;
  label: string;
}

export interface AccessScopes {
  id: number;
  name: string;
  permissions: Permission[];
}

export interface Permission {
  accessScope: string;
  label: string;
  values: AccessScope[];
}

export type AccessScopeType = Record<AccessScopesType, AccessScope[]>;
