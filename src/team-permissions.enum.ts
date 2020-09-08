export enum TeamPermission {
  OWNERSHIP = 'ownership',
  READ_STORAGE = 'r_storage',
  WRITE_STORAGE = 'w_storage',
  READ_CUSTOMER = 'r_customer',
  WRITE_CUSTOMER = 'w_customer',
}

export function getAllTeamPermissions(): TeamPermission[] {
  const allPermissions: TeamPermission[] = [];
  for (const key in TeamPermission) {
    if (Object.prototype.hasOwnProperty.call(TeamPermission, key)) {
      const element = (TeamPermission as any)[key];
      allPermissions.push(element);
    }
  }

  return allPermissions;
}