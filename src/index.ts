import { mockTimeSource, MockTimeSource } from '@cycle/time';

export { diagramArbitrary } from './diagramArbitrary';
export { undefinedOr } from './undefinedOr';

export function promise(run : (err: any) => void) : Promise<boolean>
{
    return new Promise((resolve, reject) => run(err => err ? reject(err) : resolve(true)));
}

export function withTime(test : (Time : MockTimeSource) => void) {
    return function() {
        const Time = mockTimeSource();

        test(Time);

        return promise(Time.run);
    }
}
