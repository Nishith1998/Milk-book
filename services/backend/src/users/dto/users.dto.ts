import { InputType, Field, ObjectType, ID } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class UserResponse extends Document {
  @Field(() => ID)
  id: string;

  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;
}

@InputType()
export class UserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;

  @Field()
  email: string;

  @Field()
  password: string;
}

export class InternalUser extends UserResponse {
  @Field()
  password: string;
}