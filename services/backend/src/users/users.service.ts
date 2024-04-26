import { Injectable } from '@nestjs/common';
import { UserInput } from './dto/users.dto';
// import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/users/entities/user.entity';

@Injectable()
export class UsersService {

  constructor(@InjectModel(UserDocument.name) private userModel: Model<UserDocument>) {}

  async create(createUserInput: UserInput) {
    return new this.userModel(createUserInput).save();
  }

  async findAll() {
    return this.userModel.find().exec();
  }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
