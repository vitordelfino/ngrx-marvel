import { CharacterService } from './../character.service';
import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import { CharacterActionTypes, CharacterRequest } from '../actions/character.actions';
import { Action } from '@ngrx/store';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';



@Injectable()
export class CharacterEffects {

  constructor(
    private actions$: Actions,
    private characterService: CharacterService
  ) {}

  @Effect()
  init$: Observable<Action> = this.actions$
    .ofType(CharacterActionTypes.CHARACTERACTION)
    .switchMap(() =>
      this.characterService
        .getCharacters()
        .map(data => new CharacterRequest(data))
    );

}
