import { Character } from './reducers/character.reducer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {
    return this.http
      // tslint:disable-next-line:max-line-length
      .get<any>(`http://gateway.marvel.com/v1/public/characters?ts=1&apikey=6e0f1d17430acf983843c3cff93abe88&hash=1034b0995c65af7f224403309a3fee7a`)
      .map(result => {

        console.log('service', result);

        return result.data.results
          .map(character => ({ name: character.name, photo: `${character.thumbnail.path}.${character.thumbnail.extension}` }));
      });
    }
}
