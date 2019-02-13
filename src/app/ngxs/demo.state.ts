import { DemoStateModel, generateInitalState } from './demo.model';
import { State, Selector, Action, StateContext } from '@ngxs/store';
import { IncrementCounter, SetCounter, FetchLego, FetchLegoSuccess, FetchError, DecrementCounter } from './demo.actions';
import { LegoService } from '../lego.service';
import { catchError, tap } from 'rxjs/operators';

@State<DemoStateModel>({
    name: 'demoState',
    defaults: generateInitalState()
})
export class DemoState {
    constructor(private legoService: LegoService) {}

    @Selector()
    static counter(state: DemoStateModel) {
        return state.counter;
    }

    @Action(IncrementCounter)
    incrementCounter(ctx: StateContext<DemoStateModel>) {
        ctx.patchState({
            counter: ctx.getState().counter + 1,
        });
    }
    @Action(DecrementCounter)
    decrementCounter(ctx: StateContext<DemoStateModel>) {
        ctx.patchState({
            counter: ctx.getState().counter - 1,
        });
    }
    @Action(SetCounter)
    setCounter(ctx: StateContext<DemoStateModel>, action: SetCounter) {
        ctx.patchState({
            counter: action.value,
        });
    }

    @Action(FetchLego)
    fetchLego(ctx: StateContext<DemoStateModel>) {
        return this.legoService.getLegoOfTheDay().pipe(
            tap(result => {
                console.log(`LOTD is ${result}`);
                ctx.dispatch(new FetchLegoSuccess(result));
            }),
            catchError(error => ctx.dispatch(new FetchError(error))));
    }
    @Action(FetchLegoSuccess)
    fetchLegoSuccess(ctx: StateContext<DemoStateModel>, action: FetchLegoSuccess) {
        ctx.patchState({
            legoOfTheDay: action.name,
        });
    }
    @Action(FetchError)
    fetchError(ctx: StateContext<DemoStateModel>, action: FetchError) {
        console.log(`💀 error during fetch! ${action.error}`);
        ctx.patchState({error: true});
    }
}
