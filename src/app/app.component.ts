import { Component } from '@angular/core';
import { Select, Store } from '@ngxs/store';
import { DemoState } from './ngxs/demo.state';
import { IncrementCounter, FetchLego, SetCounter, DecrementCounter } from './ngxs/demo.actions';
import { Observable } from 'rxjs';
import { GlobalState } from './ngxs/global.state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'an ngxs-demo thing';
  constructor(private store: Store) {}

  @Select(DemoState.counter)
  counter$: Observable<number>;

  @Select((state: GlobalState) => state.demoState.legoOfTheDay)
  legoOfTheDay$: Observable<string>;

  increment = () => {
      this.store.dispatch(new IncrementCounter());
  }
  decrement = () => {
      this.store.dispatch(new DecrementCounter());
  }
  reset = () => {
      this.store.dispatch(new SetCounter(0));
  }
  fetchLego = () => {
      this.store.dispatch(new FetchLego());
  }
}
