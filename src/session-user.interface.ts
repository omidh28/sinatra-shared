import { UserRole } from "./user-role.enum";

export interface SessionUser {
  phone: string;
  dataLocation: string;
  country: string;
  teamUid?: string;
  role?: UserRole,
  teams: Array<{
    uuid: string;
    role: UserRole,
  }>;
}