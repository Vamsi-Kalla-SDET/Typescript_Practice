// 1, 2, 3
class RegistrationPage {
  private nameField: string;
  private emailField: string;
  private submitButton: string;

  constructor() {
    this.nameField = "#name";
    this.emailField = "#email";
    this.submitButton = "#register-btn";
  }

  enterName(name: string): void {
    console.log(`Typing "${name}" into ${this.nameField}`);
  }

  enterEmail(email: string): void {
    console.log(`Typing "${email}" into ${this.emailField}`);
  }

  clickRegister(): void {
    console.log(`Clicking ${this.submitButton}`);
  }

  register(name: string, email: string): void {
    this.enterName(name);
    this.enterEmail(email);
    this.clickRegister();
  }
}

const registrationPage = new RegistrationPage();
registrationPage.register("Vamsi Kalla", "vamsi@example.com");
// Typing "Vamsi Kalla" into #name
// Typing "vamsi@example.com" into #email
// Clicking #register-btn

// 4.
class BasePage {
  protected url: string;

  constructor(url: string) {
    this.url = url;
  }

  navigate(): void {
    console.log(`Navigating to ${this.url}`);
  }
}

class ProfilePage extends BasePage {
  constructor() {
    super("https://staging.example.com/profile");
  }
}

const profilePage = new ProfilePage();
profilePage.navigate(); // "Navigating to https://staging.example.com/profile"

