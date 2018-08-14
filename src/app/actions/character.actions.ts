import { Action } from '@ngrx/store';
import { Character } from '../reducers/character.reducer';

export enum CharacterActionTypes {
  CHARACTERACTION = '[Character] Action',
  CHARACTERREQUEST = '[Character] Request'
}

export class CharacterAction implements Action {
  readonly type = CharacterActionTypes.CHARACTERACTION;
}

export class CharacterRequest implements Action {
  readonly type = CharacterActionTypes.CHARACTERREQUEST;

  constructor(public payload: Character[]) {
    console.log('payload', payload);
  }
}

export type CharacterActions = CharacterAction | CharacterRequest;
