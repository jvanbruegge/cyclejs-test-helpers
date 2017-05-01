import { Arbitrary, bool, tuple } from 'jsverify';

export function undefinedOr<T>(arb : Arbitrary<T>) : Arbitrary<T | undefined>
{
    return tuple([bool, arb])
        .smap(([b, v]) => b ? v : undefined, v => [v !== undefined, v]);
}
