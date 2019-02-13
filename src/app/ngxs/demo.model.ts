export interface DemoStateModel {
    counter: number;
    legoOfTheDay: string;
    error: boolean;
}

export const generateInitalState = () => {
    return {
        counter: 0,
        legoOfTheDay: '???',
        error: false,
    };
};
