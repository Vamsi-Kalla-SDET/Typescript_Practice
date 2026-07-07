interface ApiTestCase {
  endpoint: string;
  method: string;
  expectedStatus: number;
  body: string;
}

// 1.
function mergeTestCase(
  base: ApiTestCase,
  overrides: Partial<ApiTestCase>,
): ApiTestCase {
  return { ...base, ...overrides };
}

const baseCase: ApiTestCase = {
  endpoint: "/login",
  method: "POST",
  expectedStatus: 200,
  body: "{}",
};

const updatedCase = mergeTestCase(baseCase, { expectedStatus: 401 });
console.log(updatedCase.expectedStatus); // 401

// 2.
type ApiEndpointInfo = Pick<ApiTestCase, "endpoint" | "method">;
const info: ApiEndpointInfo = { endpoint: "/login", method: "POST" };

// 3.
type ApiTestCaseNoBody = Omit<ApiTestCase, "body">;
const noBodyCase: ApiTestCaseNoBody = {
  endpoint: "/login",
  method: "POST",
  expectedStatus: 200,
};

// 4.
type StatusMessages = Record<number, string>;
const statusMessages: StatusMessages = {
  200: "OK",
  404: "Not Found",
  500: "Internal Server Error",
};
console.log(statusMessages[404]); // "Not Found"
