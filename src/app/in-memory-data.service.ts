import {InMemoryDbService} from "angular-in-memory-web-api";
/**
 * Created by apple on 2017/2/5.
 */

export class InMemoryDataService implements InMemoryDbService{
  createDb(){
    let heroes = [
      {id: 11, name: 'Mr. Nice'},
      {id: 12, name: 'Narcosss'},
      {id: 13, name: 'Bombasto'},
    ];
    return {heroes};
  }
}
