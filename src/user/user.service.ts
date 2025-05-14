import { Injectable } from '@nestjs/common';
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
}