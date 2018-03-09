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
  console.log('action', action);
  switch (action.type) {
    case CharacterActionTypes.CHARACTERREQUEST:
      console.log('REQUEST');
      return action.payload;

    case CharacterActionTypes.CHARACTERACTION:
      console.log('ACTION');
      return state;

    default:
    console.log('DEFAULT');
      return state;
  }
}

export const getCharacterState = (state: Character[]) => state;
