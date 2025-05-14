import { Controller, Get } from "@nestjs/common";
import { AppService } from "../app.service";
import { SearchService } from "./search.service";

@Controller('search')
export class SearchController {

  constructor(private readonly searchService: SearchService) {}

  @Get()
  getHotSearching(){
    return this.searchService.getHotSearching();
  }
}
