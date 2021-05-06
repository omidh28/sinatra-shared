import { TeamPermission } from "./team-permissions.enum";

export interface SessionUser {
  phone: string;
  dataLocation: string;
  teamPermissions?: TeamPermission[],
  country: string;
  teamUid?: string;
  allTeamsUid: string[];
}