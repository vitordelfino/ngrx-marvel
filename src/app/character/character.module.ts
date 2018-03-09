import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CharacterRoutingModule } from './character-routing.module';
import { CharacterComponent } from './character.component';
import { CharacterService } from './character.service';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { CharacterEffects } from './effects/character.effects';
import { reducers } from './reducers/index';

@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    CharacterRoutingModule,
    StoreModule.forRoot(reducers),
    EffectsModule.forRoot([CharacterEffects]),
  ],
  declarations: [CharacterComponent],
  providers: [CharacterService]
})
export class CharacterModule { }
