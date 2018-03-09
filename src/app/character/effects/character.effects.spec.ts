import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs/Observable';

import { CharacterEffects } from './character.effects';

describe('CharacterService', () => {
  let actions$: Observable<any>;
  let effects: CharacterEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        CharacterEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(CharacterEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
