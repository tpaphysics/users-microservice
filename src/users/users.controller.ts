import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { Observable } from 'rxjs';
import { User } from '@prisma/client';

@Controller()
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users.create')
  create(@Payload() createUserDto: CreateUserDto): Promise<User> {
    return this.usersService.create(createUserDto);
  }

  @MessagePattern('users.findAll')
  findAll(): Promise<User[]> {
    return this.usersService.findAll();
  }

  @MessagePattern('users.findOne')
  findOne(@Payload() id: string): Promise<User> {
    return this.usersService.findOne(id);
  }

  @MessagePattern('users.update')
  update(@Payload() updateUserDto: UpdateUserDto): Promise<User> {
    return this.usersService.update(updateUserDto.id, updateUserDto);
  }

  @MessagePattern('users.delete')
  remove(@Payload() id: string): Promise<User> {
    return this.usersService.remove(id);
  }
}
