// 1.
function wrapInArray<T>(value: T): T[] {
  return [value];
}
console.log(wrapInArray<string>("chromium")); // ["chromium"]
console.log(wrapInArray<number>(101));         // [101]

// 2.
interface TestResult<T> {
  passed: boolean;
  details: T;
}

const simpleResult: TestResult<string> = {
  passed: true,
  details: "Login test executed successfully",
};

interface ApiDetails {
  endpoint: string;
  statusCode: number;
}

const apiResult: TestResult<ApiDetails> = {
  passed: false,
  details: { endpoint: "/checkout", statusCode: 500 },
};

console.log(simpleResult.details); // "Login test executed successfully"
console.log(apiResult.details.statusCode); // 500

// 3.
class Queue<T> {
  private items: T[] = [];

  enqueue(item: T): void {
    this.items.push(item);
  }

  dequeue(): T | undefined {
    return this.items.shift();
  }
}

const testQueue = new Queue<string>();
testQueue.enqueue("Test 1: Login");
testQueue.enqueue("Test 2: Checkout");
console.log(testQueue.dequeue()); // "Test 1: Login"
console.log(testQueue.dequeue()); // "Test 2: Checkout"
console.log(testQueue.dequeue()); // undefined (empty)

// 4.
function logTestName<T extends { testName: string }>(item: T): void {
  console.log(`Running: ${item.testName}`);
}
logTestName({ testName: "Regression Suite", priority: "High" });
// "Running: Regression Suite"