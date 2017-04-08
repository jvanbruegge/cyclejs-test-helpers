export { diagramArbitrary } from './diagramArbitrary';

export function promise(run : (err: any) => void) : Promise<boolean>
{
    return new Promise((resolve, reject) => run(err => err ? reject(err) : resolve(true)));
}
