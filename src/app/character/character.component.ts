import { CharacterAction } from '../actions/character.actions';
import { Character, getCharacterState } from '../reducers/character.reducer';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import { Subject } from 'rxjs/Subject';

import 'rxjs/add/operator/takeUntil';


@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit, OnDestroy {

  private ngUnsubscribe: Subject<any> = new Subject();

  public characters$: Observable<Character[]>;

  constructor(
    public store: Store<Character[]>
  ) {
    this.characters$ = store.select(getCharacterState);
  }

  ngOnInit() {
    this.store.dispatch(new CharacterAction());
  }

  ngOnDestroy() {
    this.ngUnsubscribe.next();
    this.ngUnsubscribe.complete();
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

  dispatchNewCharacter() {
    this.store.dispatch(new CharacterAction());
  }
}
