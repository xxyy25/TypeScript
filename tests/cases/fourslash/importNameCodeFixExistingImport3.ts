/// <reference path="fourslash.ts" />

//// import d, * as ns from "./module";
//// f1/*0*/();

// @Filename: module.ts
//// export function f1() {}
//// export var v1 = 5;
//// export default var d1 = 6;

verify.codeFixAtPosition(
`import d, * as ns from "./module";
ns.f1();`
);