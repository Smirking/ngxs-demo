export enum DemoActions {
    INCREMENT_COUNTER = '[Demo] Increment counter',
    DECREMENT_COUNTER = '[Demo] Decrement counter',
    SET_COUNTER = '[Demo] set counter',
    FETCH_LEGO = '[Demo] Fetch lego of the day',
    FETCH_LEGO_SUCCESS = '[Demo] Fetch lego success',
    FETCH_ERROR = '[Demo] Fetch error',
}

export class IncrementCounter {
    static type = DemoActions.INCREMENT_COUNTER;
}
export class DecrementCounter {
    static type = DemoActions.DECREMENT_COUNTER;
}
export class SetCounter {
    static type = DemoActions.SET_COUNTER;
    constructor(public value: number) {}
}

export class FetchLego {
    static type = DemoActions.FETCH_LEGO;
}
export class FetchLegoSuccess {
    static type = DemoActions.FETCH_LEGO_SUCCESS;
    constructor(public name: string) {}
}
export class FetchError {
    static type = DemoActions.FETCH_ERROR;
    constructor(public error: Error) {}
}
