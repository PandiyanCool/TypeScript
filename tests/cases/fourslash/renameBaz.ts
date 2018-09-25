/// <reference path='fourslash.ts' />

// @Filename: foo.ts
////interface I { [|x|]: number }
////declare const a: ReadonlyArray<I>;
////a.map(({ [|x|] }) => [|x|]);

verify.noErrors();
const [r0, r1, r2]  = test.ranges();
verify.renameLocations(r0, [r0, { range: r1, suffixText: ": x" }]);//[r0, { range: r1, prefixText: "bar: " }]); //this should be suffixText
