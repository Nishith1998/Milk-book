import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstanats } from './constants';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstanats.secret,
      signOptions: { expiresIn: '120s' },
    }),
  ],
  providers: [AuthResolver, AuthService],
})
export class AuthModule {}
