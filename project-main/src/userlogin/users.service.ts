import { Injectable } from "@nestjs/common";
import { Role } from "src/auth/role.enum";

export type User = any;
@Injectable()
export class UsersService {
  private readonly users = [
    {
      username: 'film',
      password: 'eiei',
      role: [Role.Admin] as Role[],
    },
    {
      username: 'guy',
      password: 'kiki',
      role: [Role.User] as Role[],
    },
  ];
  
  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
