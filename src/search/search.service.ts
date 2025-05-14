import { Injectable } from '@nestjs/common';

@Injectable()
export class SearchService {

  getHotSearching(){
    // 返回JSON数组
    return [
      {
        "id": 1,
        "name": "Java"
      },
      {
        "id": 2,
        "name": "Python"
      },
      {
        "id": 3,
        "name": "C++"
      },
      {
        "id": 4,
        "name": "C#"
      },
      {
        "id": 5,
        "name": "JavaScript"
      },
      {
        "id": 6,
        "name": "Go"
      },
      {
        "id": 7,
        "name": "Rust"
      },
      {
        "id": 8,
        "name": "Swift"
      },
      {
        "id": 9,
        "name": "Kotlin"
      },
      {
        "id": 10,
        "name": "Ruby"
      }
    ]
  }

}
