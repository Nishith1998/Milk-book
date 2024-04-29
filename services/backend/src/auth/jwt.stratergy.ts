import { Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { jwtConstanats } from './constants';
import { AuthService } from 'src/auth/auth.service';

@Injectable({})
export class JwtStratergy extends PassportStrategy(Strategy) {
  constructor(public authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      ignoreExpiration: false,
      secretOrKey: jwtConstanats.secret,
    });
  }

  async validate(payload: any): Promise<any> {
    const { username } = payload;
    console.log("asdf", payload);
    if (!username) {
      throw new UnauthorizedException();
    }
    return username;
  }
}
