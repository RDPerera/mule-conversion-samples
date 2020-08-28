# Mule Conversion Samples

This repository contains a set of WSO2 Integration Samples for developers with prior experience in MuleSoft products. To make things easier we have created a set of samples similar to what you see in [Mulesoft Anypoint Examples](https://github.com/mulesoft/anypoint-examples) repository.

In addition, we have integration samples covering the API management as well as streaming integration capabilities in [WSO2 Integration Samples](https://github.com/wso2/integration-studio-examples) repository.

## Before you begin
 
- Clone or download this repository.
    ```bash
    $ git clone https://github.com/wso2/integration-studio-examples
    ```
- Download [WSO2 Integration Studio](https://wso2.com/integration/integration-studio/). We will be using WSO2 Integration studio to develop our integration use cases.

> __NOTE__: Each sample resides in its own directory with a README.md file with sample description and supporting material to follow along each example.

## Samples Overview

Following are the examples covered in this repository. You can try out these examples in any order you prefer.

> __NOTE__: In this set of examples we showcase implementation of MuleSoft Anypoint examples using WSO2 technologies without any major deviations from the original samples. In some cases this might not be the best approach doing the same thing with WSO2 technologies. Once you go through this samples we highly recommend you to refer WSO2 Documentation as well as [WSO2 Integration Samples](https://github.com/wso2/integration-studio-examples) repository for more in depth tutorials to get familiarize with the WSO2 approach to integration use cases.

- [Hello World](examples/hello-world/README.md)

### Services

- [HTTP Request Response With Logger](examples/http-request-response-with-logger/README.md)
- [Rest API With APIkit](examples/rest-api-with-apikit/README.md)
- [Proxying A REST API](examples/proxying-a-rest-api/README.md)
- [Proxying A SOAP API](examples/proxying-a-soap-api/README.md)
- [Exposing A Restful Resource Using The HTTP Connector](examples/exposing-a-restful-resource-using-the-http-connector/README.md)
- [XML Only Soap Webservice](examples/xml-only-soap-webservice/README.md)
- [Web Service Consumer](examples/web-service-consumer/README.md)

### Mediation Patterns 
- [Content Based Routing](examples/content-based-routing/README.md)
- [Scatter Gather Flow Control](examples/scatter-gather-flow-control/README.md)
- [Service Orchestration And Choice Routing](examples/service-orchestration-and-choice-routing/README.md)
- [Filtering A Message](examples/filtering-a-message/README.md)
- [Foreach Processing And Choice Routing](examples/foreach-processing-and-choice-routing/README.md)

### Message Transformation

- [Addition Using Javascript Transformer](examples/addition-using-javascript-transformer/README.md)
- [Dataweave 2 Basics](examples/dataweave-2-basics/README.md)
- [Dataweave With Flowreflookup](examples/dataweave-with-flowreflookup/README.md)

### Error Handling

- [Implementing A Choice Exception Strategy](examples/implementing-a-choice-exception-strategy/README.md)
- [Retry Mechanism Example](examples/retry-mechanism-example/README.md)

### Unit Testing

- [Testing APIkit With Munit](examples/testing-apikit-with-munit/README.md)
- [Unit Test Short Tutorial](examples/unittest-short-tutorial/README.md)

### SaaS Integrations

- [Authenticating Salesforce Using Oauth2](examples/authenticating-salesforce-using-oauth2/README.md)
- [Salesforce Data Retrieval](examples/salesforce-data-retrieval/README.md)
- [Cache Scope With Salesforce Contacts](examples/cache-scope-with-salesforce-contacts/README.md)
- [Import Contacts Asynchronously](examples/import-contacts-asynchronously/README.md)
- [Import Contacts Into Salesforce](examples/import-contacts-into-salesforce/README.md)
- [Sending A CSV Through Email Using SMTP](examples/sending-a-csv-through-email-using-smtp/README.md)

### Database Integration

- [Querying A Mysql Database](examples/querying-a-mysql-database/README.md)
- [Querying A Database And Attaching Results To An Email](examples/querying-a-db-and-attaching-results-to-an-email/README.md)
- [Importing A CSV File Into Mongo DB](examples/Importing-a-csv-file-into-mongo-db/README.md)

### Messaging

- [Sending JSON Data To An AMQP Queue](examples/sending-json-data-to-a-amqp-queue/README.md)
- [Sending JSON Data To A JMS Queue](examples/sending-json-data-to-a-jms-queue/README.md)
- [JMS Message Rollback And Redelivery](examples/jms-message-rollback-and-redelivery/README.md)
- [Kafka Producer Consumer](examples/kafka-producer-consumer/README.md)

### Auth and User Management

- [Extracting Data From LDAP Directory](examples/extracting-data-from-LDAP-directory/README.md)
- [OAuth2 Authorization Code Using The HTTP Connector](examples/oauth2-authorization-code-using-the-http-connector/README.md)

### Miscellaneous

- [Upload To FTP After Converting JSON To XML](examples/upload-to-ftp-after-converting-json-to-xml/README.md)
- [HTTP Multipart Request](examples/http-multipart-request/README.md)
- [Legacy Modernization](examples/legacy-modernization/README.md)
- [Login Form Using The HTTP Connector](examples/login-form-using-the-http-connector/README.md)

## What's Next?

In Anypoint examples repository, there were no samples to showcase the strong API Management and Streaming Integration capabilities. Hence WSO2 API Management and Streaming Integration capabilities are not covered in these examples. Following are a set of tutorials and samples that coveres the API Management and Streaming Integration capabilities of WSO2 product stack.

### Full Lifecycle API Managemenet

To learn about full lifecycle API Management with WSO2 API manager follow the tutorial in [WSO2 Integration Samples](https://github.com/wso2/integration-studio-examples/blob/master/api-management/README.md) repository

### ETL, CDC, and Streaming Integration

To learn about ETL, CDC and Streaming integration capabilities of WSO2 Streaming Integrator runtime try out  the samples in [WSO2 Integration Samples](https://github.com/wso2/integration-studio-examples/blob/master/streaming-integration/README.md) repository

----

> __NOTICE:__ "MuleSoft" and Mulesoft's "Anypoint Platform" are trademarks of MuleSoft, Inc. All product, company names and marks mentioned herein are the property of their respective owners and are mentioned for identification purposes only.