import { Injectable, NotFoundException } from "@nestjs/common";
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserService {
  constructor(private readonly prisma: PrismaService) {}

  // Fetch all users
  async getUsers() {
    return this.prisma.user.findMany();
  }

  // Create a new user
  async createUser(data: { email: string; name: string }) {
    return this.prisma.user.create({ data });
  }

  async updateUserAvatar(userId: number, avatarPath: string) {
    const user = await this.prisma.user.findUnique( { where: { id: userId } })

    if(!user){
      throw new NotFoundException(`User with ID ${userId} not found`)
    }

    await this.prisma.user.update({
      where: { id: userId },
      data: { avatar: avatarPath },
    })
  }

  async findUserById(userId: number){
    const user = await this.prisma.user.findUnique({
      where: {id: userId}
    })
    if(!user){
      throw new NotFoundException(`User with ID ${userId} not found`)
    }
    return user
  }

}