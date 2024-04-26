import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserResponse } from 'src/users/dto/users.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
  ) {}
  async validateUser(userId: string, pass: string) {
    const user = await this.userService.findOne(userId);
    if (user.password !== pass) {
      throw new UnauthorizedException();
    }
    const { password, ...result } = user;
    return result;
  }

  async login(user: UserResponse) {
    const payload = { username: user.firstName, sub: user._id };
    return { access_token: this.jwtService.sign(payload) };
  }
}
