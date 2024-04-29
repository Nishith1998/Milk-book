import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstanats } from './constants';
import { JwtStratergy } from 'src/auth/jwt.stratergy';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/users/users.module';

@Module({
  imports: [
    JwtModule.register({
      secret: jwtConstanats.secret,
      signOptions: { expiresIn: '240s' },
    }),
    PassportModule,
    UsersModule
  ],
  providers: [AuthResolver, AuthService, JwtStratergy],
  exports: [AuthService]
})
export class AuthModule {}
