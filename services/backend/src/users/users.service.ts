import { Injectable } from '@nestjs/common';
import { InternalUser, UserInput, UserResponse } from './dto/users.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(UserDocument.name) private userModel: Model<UserDocument>,
  ) {}

  async create(createUserInput: UserInput) {
    const temp = { _id: Math.random().toString(), ...createUserInput };
    return await new this.userModel(createUserInput).save();
  }

  async findAll() {
    return await this.userModel.find().exec();
  }

  async findByUserEmail(userEmail: string): Promise<InternalUser> {
    return (await this.userModel
      .findOne({ email: userEmail })
      .exec()) as InternalUser;
  }
}
