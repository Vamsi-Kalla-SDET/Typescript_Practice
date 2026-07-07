// 1. bugData.ts
export interface Bug {
  id: number;
  title: string;
  severity: string;
}

export const criticalBug: Bug = {
  id: 101,
  title: "Payment gateway crashes on submit",
  severity: "Critical",
};

export const minorBug: Bug = {
  id: 102,
  title: "Tooltip text slightly misaligned",
  severity: "Minor",
};

// 2. BugReporter.ts
import { Bug } from "./bugData";

export class BugReporter {
  report(bug: Bug): void {
    console.log(`Bug #${bug.id}: ${bug.title} (${bug.severity})`);
  }
}

// 3. main.ts
import { Bug, criticalBug, minorBug } from "./bugData";
import { BugReporter } from "./BugReporter";

const reporter = new BugReporter();
reporter.report(criticalBug); // "Bug #101: Payment gateway crashes on submit (Critical)"
reporter.report(minorBug);    // "Bug #102: Tooltip text slightly misaligned (Minor)"

// 4. Default export version
// BugReporter.ts
import { Bug } from "./bugData";

export default class BugReporter {
  report(bug: Bug): void {
    console.log(`Bug #${bug.id}: ${bug.title} (${bug.severity})`);
  }
}

// main.ts - import line changes (no curly braces, can rename freely)
import BugReporter from "./BugReporter";