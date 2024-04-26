import { InputType, Field, ObjectType } from '@nestjs/graphql';
import { Document } from 'mongoose';

@ObjectType()
export class UserResponse extends Document {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}

@InputType()
export class UserInput {
  @Field()
  firstName: string;

  @Field()
  lastName: string;
}
