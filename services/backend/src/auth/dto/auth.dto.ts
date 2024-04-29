import { Field, InputType, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class SignInResponse {

  @Field()
  accessToken: string;
}

@InputType()
export class SignInInput {
  @Field()
  userEmail: string;

  @Field()
  password: string;
}