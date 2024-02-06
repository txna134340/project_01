import { Injectable, Logger, UnauthorizedException} from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/userlogin/users.service";

@Injectable()
export class AuthService {
  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
  ) {}

  async SigIn(username: string, pass: string): Promise<any> {
    const user = await this.usersService.findOne(username);
    if (user?.password !==pass) {
      throw new UnauthorizedException();
    }


  const payload = { username: user.username};
  return {
    access_Token: await this.jwtService.signAsync(payload),
  };
}
}