import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserDocument {
  @Prop({ required: true })
  firstName: string;

  @Prop({required: true})
  lastName: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
