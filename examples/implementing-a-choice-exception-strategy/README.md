# Implementing an Exception Strategy

This example illustrates the concept of error handling in WSO2 Enterprise Integrator. This particular example deals with exception strategy.

### Example use case

The WSO2 Project reads a CSV file and returns exception messages for two types of error: 

* The request specifies an invalid path.
* The request specifies a file that read permissions are not granted on.

<img width="70%" src="../../resources/images/implementing-a-choice-exception-strategy-use-case.png">

### Set up and run the example

1. Open the Implementing a Exception Strategy example project in Integration Studio [Clone the GitHub repository and Import Exception Strategy example (File->Import) ] 

<img width="70%" src="../../resources/images/implementing-a-choice-exception-strategy.png">

2. Run the example project as a Micro-Integrator application(Right click on the project and select Run->Run on Micro-Integrator)

3. In your browser, access the URL `http://localhost:8290/file?filePath=invalidPath`. This message specifies an invalid path, and the application returns this error message:
		
		{
		  "message": "Your path is invalid"
		}

5. In your browser, access the URL `http://localhost:8290/file?filePath=path`, substituing the path to the file `input.csv`(which is in the Resource directory in this GitHub repository) for the `path` variable. The application returns the following payload:

		[
		  {
		    "orderId": "1",
		    "name": "T-shirt",
		    "pricePerUnit": "25.0",
		    "units": "2"
		  },
		  {
		    "orderId": "2",
		    "name": "Jacket",
		    "pricePerUnit": "40.5",
		    "units": "3"
		  }
		]

6. In your browser, access the URL `http://localhost:8290/file?filePath=path`, replacing the `path` variable this time with the path to a file that does not allow read access. The application returns the following error message:
       
		{
		  "message": "Access to file denied"
		}



### Go further
       
* Read the documentation about handling exceptions [here](https://docs.wso2.com/display/EI660/Error+Handling).
   
   
