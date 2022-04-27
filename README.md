# Sample API Gateway / Node.js Lambda created with CDK

This is a sample project that defines a Node.js Lambda function that is accessible via API Gateway. The stack is defined and deployed using AWS CDK.

When envoking the Lambda, either directly or via API Gateway, a static list of hikes is returned in JSON format. This list is defined in the [handler function](handler/index.js).

## Local Execution

This Lambda can be executed locally with [SAM](https://aws.amazon.com/serverless/sam/) / Docker using the following command:

```
cdk synth > template.yml && sam local invoke -t cdk.out/GeoSampleStack.template.json getHikesLambdaFunction
```

## Deployment

This stack can be deployed to AWS with the following command:

```
cdk deploy
```

**Note:** CDK bootstrap must be executed once prior to the first deployment. To bootstrap, execute: 

```
cdk bootstrap
```

## Repo Archetype

This repository was initialized in April 2022 with the following CDK command:

```
cdk init app --language javascript
```