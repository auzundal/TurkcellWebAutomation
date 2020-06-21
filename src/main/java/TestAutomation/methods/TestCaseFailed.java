package TestAutomation.methods;

import java.io.IOException;

import static TestAutomation.methods.BaseTest.screenshotObj;

public class TestCaseFailed extends Exception
{
	/**
	 * Added serializable varibale to remove warning
	 */
	private static final long serialVersionUID = 1L;
	String message=null;
	public TestCaseFailed() 
	{
		super();
	}
	 
	public TestCaseFailed(String message) throws IOException {
		super(message);
		screenshotObj.takeScreenShot();
	    this.message = message;
	}
	 
}
