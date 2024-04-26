import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserResponse } from 'src/users/dto/users.dto';

@Resolver()
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Mutation(() => UserResponse)
  signIn(@Args('userId') userId: string, @Args('password') password: string) {
    return this.authService.validateUser(userId, password);
  }
}
