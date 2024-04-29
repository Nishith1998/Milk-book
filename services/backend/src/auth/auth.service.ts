import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserResponse } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    public jwtService: JwtService,
  ) {}
  async validateUser(userEmail: string, pass: string) {
    const user = (await this.userService.findByUserEmail(userEmail));
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }
    return await this.logIn(user);
  }

  async logIn(user: UserResponse) {
    const payload = { username: user.firstName, sub: user.id };
    return { accessToken: this.jwtService.sign(payload) };
  }
}
