import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { UserResponse } from 'src/users/dto/users.dto';
import { SignInInput, SignInResponse } from 'src/auth/dto/auth.dto';

@Resolver(() => UserResponse)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}

  @Query(() => SignInResponse)
  signIn(@Args('creds') signInInput: SignInInput) {
    return this.authService.validateUser(
      signInInput.userEmail,
      signInInput.password,
    );
  }
}
