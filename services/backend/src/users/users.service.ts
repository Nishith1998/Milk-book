import { Injectable } from '@nestjs/common';
import { UserInput } from './dto/users.dto';
// import { UpdateUserInput } from './dto/update-user.input';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserDocument } from 'src/users/entities/user.entity';

const mockUsers = [{
  _id: '123',
  firstName: 'goni',
  lastName: 'goswami',
  password: 'goni_goswami'
},
{
  _id: '456',
  firstName: 'suresh',
  lastName: 'goswami',
  password: 'suresh_goswami'
}];

@Injectable()
export class UsersService {

  constructor(@InjectModel(UserDocument.name) private userModel: Model<UserDocument>) {}

  async create(createUserInput: UserInput) {
    const temp = {_id: Math.random().toString(), ...createUserInput}
    mockUsers.push(temp);
    return temp;
    // return new this.userModel(createUserInput).save();
  }

  async findAll() {
    return mockUsers;
    // return this.userModel.find().exec();
  }

  findOne(id: string) {
    return mockUsers.find(user => user._id == id);
  }

  // update(id: number, updateUserInput: UpdateUserInput) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
