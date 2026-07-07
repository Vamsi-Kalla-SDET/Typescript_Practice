// 1.
let bugPriority: string | number;
bugPriority = "High";
bugPriority = 1;

// 2.
function logPriority(priority: string | number): void {
  if (typeof priority === "string") {
    console.log(`Priority level: ${priority.toUpperCase()}`);
  } else {
    console.log(`Priority code: ${priority}`);
  }
}
logPriority("high"); // "Priority level: HIGH"
logPriority(1); // "Priority code: 1"

// 3.
interface ApiSuccess {
  status: "success";
  payload: string;
}

interface ApiFailure {
  status: "failure";
  errorCode: number;
}

function handleApiResult(result: ApiSuccess | ApiFailure): void {
  if (result.status === "success") {
    console.log(`Success! Payload: ${result.payload}`);
  } else {
    console.log(`Failed with error code: ${result.errorCode}`);
  }
}

handleApiResult({ status: "success", payload: "User created" });
// "Success! Payload: User created"
handleApiResult({ status: "failure", errorCode: 404 });
// "Failed with error code: 404"

// 4.
interface Credentials {
  username: string;
  password: string;
}

interface BrowserSettings {
  browserName: string;
  headless: boolean;
}

type AutomationEnv = Credentials & BrowserSettings;

const env: AutomationEnv = {
  username: "vamsi_qa",
  password: "Test@123",
  browserName: "chromium",
  headless: true,
};
