// 1.
function calculatePassPercentage(passed: number, total: number): number {
  return (passed / total) * 100;
}
console.log(calculatePassPercentage(8, 10)); // 80

// 2.
function greetTester(name: string, role?: string): string {
  if (role) {
    return `Hello ${name}, ${role}`;
  }
  return `Hello ${name}`;
}
console.log(greetTester("Vamsi")); // "Hello Vamsi"
console.log(greetTester("Vamsi", "SDET")); // "Hello Vamsi, SDET"

// 3.
const logSeverity = (bug: string, severity: string = "Minor"): string => {
  return `${bug} - Severity: ${severity}`;
};
console.log(logSeverity("Login button unresponsive")); 
// "Login button unresponsive - Severity: Minor"
console.log(logSeverity("Payment fails on submit", "Critical")); 
// "Payment fails on submit - Severity: Critical"