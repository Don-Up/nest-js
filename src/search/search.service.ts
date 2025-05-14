import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service'; // Assuming you have a PrismaService
import { PaginationDto } from '../common/dto/pagination.dto';

@Injectable()
export class SearchService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(paginationDto: PaginationDto) {
    const { page = 1, pageSize = 10 } = paginationDto;

    // Calculate the number of records to skip
    const skip = (page - 1) * pageSize;

    // Fetch paginated records
    const [records, total] = await Promise.all([
      this.prisma.search.findMany({
        skip,
        take: pageSize,
        orderBy: { id: 'asc' }, // Optional: Sort by ID or another field
      }),
      this.prisma.search.count(), // Get total number of records
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