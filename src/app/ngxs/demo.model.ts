export interface DemoStateModel {
    counter: number;
    legoOfTheDay: string;
}

export const generateInitalState = () => {
    return {
        counter: 0,
        legoOfTheDay: '???',
    };
};
