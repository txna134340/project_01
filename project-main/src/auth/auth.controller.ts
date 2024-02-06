import { Body, Controller, Post, HttpCode, HttpStatus, Logger,UseGuards, Request,Get } from "@nestjs/common";
import { AuthService } from "./auth.service";
import { UsersService } from "src/userlogin/users.service";
import { AuthGuard } from "./auth.guard";

@Controller('auth')
export class AuthController {
  constructor(
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  @HttpCode(HttpStatus.OK)
  sigIn(@Body() sigInDto: Record<string, any>){
    Logger.log(sigInDto.username);
    return this.authService.SigIn(sigInDto.username, sigInDto.password);
  }
  

  @UseGuards(AuthGuard)
  @Get('profile')
  getProfile(@Request() req){
    return req.user;
  }
}