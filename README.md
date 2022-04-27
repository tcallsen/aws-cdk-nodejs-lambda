# Sample API Gateway / Node.js Lambda created with CDK

This is a sample project that defines a Node.js Lambda function that is accessible via API Gateway. The stack is defined and deployed using AWS CDK.

When envoking the Lambda, either directly or via API Gateway, a static list of hikes is returned in JSON format. This list is defined in the [handler function](handler/index.js).

## Local Execution

This Lambda can be executed locally with [SAM](https://aws.amazon.com/serverless/sam/) / Docker using the following command:

```
cdk synth > template.yml && sam local invoke -t cdk.out/GeoSampleStack.template.json getHikesLambdaFunction
```

To stand up the API Gateway endpoint locally (accessible from `http://127.0.0.1:3000`), execute the following command:

```
cdk synth > template.yml && sam local start-api -t ./cdk.out/GeoSampleStack.template.json
```

## Deployment to AWS

This stack can be deployed to AWS with the following command:

```
cdk deploy
```

**Note:** CDK bootstrap must be executed once prior to the first deployment. To bootstrap, execute: 

```
cdk bootstrap
```

## Deployed AWS Resource Locations (ARN and URL)

Two npm `postdeploy` scripts are included that query AWS for the locations of deployed resouces. These URLs/ARNs can be passed to downstream consumers of these services via CI/CD variables or other configuration.

1. [getDeployedLambdaARN.js](postdeploy/getDeployedLambdaARN.js) - determines the ARN for the deployed Lambda function based on the stack and function names set during CDK definition.
2. [getDeployedApiGatewayRestApiUrl.js](postdeploy/getDeployedApiGatewayRestApiUrl.js) - returns the URL for the deployed API Gateway REST API used to invoke this Lambda function.

## Repo Archetype

This repository was initialized in April 2022 with the following CDK command:

```
cdk init app --language javascript
```