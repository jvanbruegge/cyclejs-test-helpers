# cyclejs-test-helpers
A small collection of useful utilities

## Content

### diagramArbitrary

A [jsverify](https://github.com/jsverify/jsverify) Arbitrary, that can be used to generate random stream diagrams. Use [@cycle/time](https://github.com/cyclejs/time) to get Streams.

Usage:
```typescript
const property = forall(diagramArbitrary, diagram => {
    const Time = mockTimeSource();
    const click$ = Time.diagram(diagram);

    //... Rest of the test
});
```
