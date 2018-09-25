/// <reference path='fourslash.ts' />

// @noLib: true

////interface I { [|a|]: number; }
////declare const i: I;
////const { [|a|] } = i;
////[|a|];

const [r0, r1, r2] = test.ranges();
verify.renameLocations(r0, [r0, { range: r1, suffixText: ": a" }]);
verify.renameLocations([r1, r2], [{ range: r1, prefixText: "a: " }, r2]);
