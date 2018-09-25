/// <reference path='fourslash.ts' />

////interface I {
////    skills: { [|x|]: string };
////}
////declare const i: I;
////let y;
////({ skills: { [|x|]: y } } = i);
////const { skills: { [|x|] } } = i;

verify.noErrors();
const ranges = test.ranges();
const [r0, r1, r2] = ranges;
//verify.renameLocations([r0], [r0, r1, { range: r2, suffixText: ": x" }]); //works
verify.renameLocations([r1], [r0, r1, { range: r2, suffixText: ": x" }]);

