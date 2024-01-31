import { Injectable } from '@angular/core';
import { InMemoryDbService, RequestInfo } from 'angular-in-memory-web-api';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InMemoryDataService implements InMemoryDbService {

  constructor() { }

  createDb() {
    const experience = [
      {
        "id": 0,
        "title": "Proyect",
        "urlImage": "https://i.pinimg.com/564x/af/b8/31/afb83127493e0d200b8cf19f5d4d0674.jpg",
        "description": "Proyect.......",
        "subDescription": "Proyect..Proyect......."
      },
      {
        "id": 1,
        "title": "Proyect",
        "urlImage": "https://i.pinimg.com/564x/af/b8/31/afb83127493e0d200b8cf19f5d4d0674.jpg",
        "description": "Proyect.......",
        "subDescription": "Proyect..Proyect......."
      },
      {
        "id": 2,
        "title": "Proyect",
        "urlImage": "https://i.pinimg.com/564x/af/b8/31/afb83127493e0d200b8cf19f5d4d0674.jpg",
        "description": "Proyect.......",
        "subDescription": "Proyect..Proyect......."
      }
    ];

    return {experience};
  }
}
