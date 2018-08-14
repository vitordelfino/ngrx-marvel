import { Character } from '../reducers/character.reducer';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class CharacterService {

  constructor(private http: HttpClient) { }

  getCharacters(): Observable<Character[]> {

    const limit = 100;
    const offset = Math.floor(Math.random() * 1390);

    // tslint:disable-next-line:max-line-length
    const url = `http://gateway.marvel.com/v1/public/characters?limit=${limit}&offset=${offset}&ts=1&apikey=6e0f1d17430acf983843c3cff93abe88&hash=1034b0995c65af7f224403309a3fee7a`;

    return this.http
      .get<any>(url)
      .map(result =>
        this.shuffle(result.data.results)
          .slice(0, 4)
          .map(character => ({ name: character.name, photo: `${character.thumbnail.path}.${character.thumbnail.extension}` }))
      );
  }

  shuffle(arra1): Array<any> {
    let ctr = arra1.length, temp, index;

    while (ctr > 0) {

        index = Math.floor(Math.random() * ctr);

        ctr--;

        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
  }
}
