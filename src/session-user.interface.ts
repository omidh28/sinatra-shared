import { UserRole } from "./user-role.enum";

export interface SessionUser {
  phone: string;
  dataLocation: string;
  country: string;
  teamUid?: string;
  roles?: UserRole,
  teams: Array<{
    uuid: string;
    roles: UserRole,
  }>;
}