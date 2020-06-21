package TestAutomation.methods;

public interface BaseTest 
{
	MiscMethods miscmethodObj = new MiscMethods();
	AssertionMethods assertionObj = new AssertionMethods();
	ClickElementsMethods clickObj = new ClickElementsMethods();
	InputMethods inputObj = new InputMethods();
	ProgressMethods progressObj = new ProgressMethods();
	SendMailMethods sendMailobj = new SendMailMethods();
	NavigateMethods navigationObj = new NavigateMethods();
	ScreenShotMethods screenshotObj = new ScreenShotMethods();
}
