// 1.
interface LoginTestData {
  username: string;
  password: string;
  otp?: string;
}

// 2.
const validLogin: LoginTestData = {
  username: "vamsi_qa",
  password: "Test@123",
};

// 3.
const mfaLogin: LoginTestData = {
  username: "vamsi_qa",
  password: "Test@123",
  otp: "482913",
};

// 4.
interface BugReport {
  id: number;
  title: string;
  severity: string;
  readonly reportedBy: string;
}

const bug1: BugReport = {
  id: 101,
  title: "Payment gateway timeout on submit",
  severity: "Critical",
  reportedBy: "Vamsi",
};

// bug1.reportedBy = "Someone Else";
// Error: Cannot assign to 'reportedBy' because it is a read-only property.