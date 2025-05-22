import { Injectable } from '@nestjs/common';
import { PrismaService } from "../prisma/prisma.service";
import { PaginationDto } from "../common/dto/pagination.dto";

@Injectable()
export class HomeService {

  constructor(private prisma: PrismaService) {
  }

  async getHome() {
    const list = await this.prisma.listItem.findMany()
    return {
      list: list
    };
  }

  async getHomeList(paginationDto: PaginationDto) {
    const { page = 1, pageSize = 10 } = paginationDto;

    // Calculate the number of records to skip
    const skip = (page - 1) * pageSize;

    // Fetch paginated records
    const [records, total] = await Promise.all([
      this.prisma.listItem.findMany({
        skip,
        take: pageSize,
        orderBy: { id: 'asc' }, // Optional: Sort by ID or another field
      }),
      this.prisma.listItem.count(), // Get total number of records
    ]);

    // Calculate total pages
    const totalPages = Math.ceil(total / pageSize);

    return {
      data: records,
      meta: {
        total,
        page,
        pageSize,
        totalPages,
      },
    };
  }

}
