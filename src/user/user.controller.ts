import { Body, Controller, Get, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user') // Base route: /user
export class UserController {
  constructor(private readonly userService: UserService) {}

  // GET /user
  @Get()
  async getAllUsers() {
    return this.userService.getUsers();
  }

  // POST /user
  @Post()
  async createUser(@Body() createUserDto: { email: string; name: string }) {
    return this.userService.createUser(createUserDto);
  }
}