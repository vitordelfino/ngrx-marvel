import { CharacterAction } from './actions/character.actions';
import { Character, getCharacterState } from './reducers/character.reducer';
import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  public characters$: Observable<Character[]>;

  constructor(
    public store: Store<Character[]>
  ) {
    this.characters$ = store.select(getCharacterState);
  }

  ngOnInit() {
    this.store.dispatch(new CharacterAction());
  }

}
