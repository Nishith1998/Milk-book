import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UsersService } from './users.service';
import { UserInput, UserResponse } from './dto/users.dto';
import { UseGuards } from '@nestjs/common';
import { AuthGuard } from 'src/guards/auth.guard';

@Resolver(() => UserResponse)
export class UsersResolver {
  constructor(private readonly usersService: UsersService) {}

  @Mutation(() => UserResponse)
  // @UseGuards(AuthGuard)
  createUser(@Args('createUserInput') createUserInput: UserInput) {
    return this.usersService.create(createUserInput);
  }

  @Query(() => [UserResponse], { name: 'users', description: "Protected route" })
  @UseGuards(AuthGuard)
  findAll() {
    return this.usersService.findAll();
  }

  @Query(() => UserResponse, { name: 'user' })
  findOne(@Args('userEmail', { type: () => String }) userEmail: string) {
    return this.usersService.findByUserEmail(userEmail);
  }
}
