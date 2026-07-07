// 1.
function fetchApiResponse(endpoint: string): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (endpoint) {
        resolve(`${endpoint}: 200 OK`);
      } else {
        reject("Invalid endpoint");
      }
    }, 500);
  });
}

// 2.
async function testApiCall(): Promise<void> {
  try {
    const result = await fetchApiResponse("/login");
    console.log(result); // "/login: 200 OK"
  } catch (error) {
    console.log(`Error: ${error}`);
  }
}
testApiCall();

// 3.
async function runTwoApiCallsInParallel(): Promise<void> {
  const [usersResult, ordersResult] = await Promise.all([
    fetchApiResponse("/users"),
    fetchApiResponse("/orders"),
  ]);
  console.log(usersResult);  // "/users: 200 OK"
  console.log(ordersResult); // "/orders: 200 OK"
}
runTwoApiCallsInParallel();

