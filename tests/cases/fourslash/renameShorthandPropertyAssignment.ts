/// <reference path='fourslash.ts' />

////const [|x|] = 0;
////const o = { [|x|] };
////o.[|x|]

const [r0, r1, r2] = test.ranges();
verify.renameLocations([r0, r1], [r0, { range: r1, prefixText: "x: " }]);
verify.renameLocations(r2, [{ range: r1, suffixText: ": x" }, r2]);
//TODO: include { x: y } in test
