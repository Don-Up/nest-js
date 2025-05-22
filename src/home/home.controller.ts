import { Controller, Get, Post, Query } from "@nestjs/common";
import { HomeService } from "./home.service";
import { PaginationDto } from "../common/dto/pagination.dto";

@Controller('home')
export class HomeController {

  constructor(private readonly homeService: HomeService) {
  }

  @Get()
  async fetchHome(){
    return this.homeService.getHome()
  }

  @Get('list')
  fetchHomeList(@Query() paginationDto: PaginationDto){
    return this.homeService.getHomeList(paginationDto)
  }

}
