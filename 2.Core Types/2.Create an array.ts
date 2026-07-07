// 1. Array
let testEnvironments: string[] = ["QA", "Staging", "Production"];

// 2. Tuple
let apiTestCase: [string, number, boolean] = ["/login", 200, true];

// 3. Enum
enum Severity {
  Critical,
  Major,
  Minor,
}

// 4. Assign and log
let bugSeverity: Severity = Severity.Major;
console.log(bugSeverity); // 1 (Major is the second value, index 1)