import { Controller, Get, Query } from '@nestjs/common';
import { SearchService } from './search.service';
import { PaginationDto } from '../common/dto/pagination.dto';
import { ApiOperation, ApiQuery, ApiResponse } from '@nestjs/swagger';

@Controller('search')
export class SearchController {
  constructor(private readonly searchService: SearchService) {}

  @Get()
  @ApiOperation({ summary: 'Get paginated list of search records' })
  @ApiQuery({ name: 'page', required: false, type: Number, example: 1 })
  @ApiQuery({ name: 'pageSize', required: false, type: Number, example: 10 })
  @ApiResponse({ status: 200, description: 'Paginated search records' })
  findAll(@Query() paginationDto: PaginationDto) {
    return this.searchService.findAll(paginationDto);
  }
}