import { CharacterActionTypes, CharacterActions } from './../actions/character.actions';
import { Action } from '@ngrx/store';


export interface Character {
  name: string;
  photo: string;
}

export const initialState: Character[] = [
  {
    name: 'heroi',
    photo: 'photo'
  }
];

export function reducer(state = initialState, action: CharacterActions): Character[] {
  switch (action.type) {
    case CharacterActionTypes.CHARACTERREQUEST:
      return action.payload;

    case CharacterActionTypes.CHARACTERACTION:
      return state;

    default:
      return state;
  }
}

export const getCharacterState = (state: any) => state.character;
