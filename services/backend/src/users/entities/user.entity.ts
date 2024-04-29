import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class UserDocument {
  @Prop({ required: true })
  firstName: string;

  @Prop({required: true})
  lastName: string;

  @Prop({required: true})
  email: string;

  @Prop({required: true})
  password: string;
}

export const UserSchema = SchemaFactory.createForClass(UserDocument);
