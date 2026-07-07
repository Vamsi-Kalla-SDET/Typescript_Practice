let projectName: string = "Healthcare Portal";
let bugCount: number = 12;
let isRegressionPassed: boolean = false;

// Step 4 - this line causes a compile-time error
// projectName = 123;

// Error: Type 'number' is not assignable to type 'string'.

console.log(projectName);
console.log(bugCount);
console.log(isRegressionPassed);