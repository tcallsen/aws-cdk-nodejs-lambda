#!/usr/bin/env node

const {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  AWS_CDK_STACK_NAME,
  LAMBDA_FUNCTION_NAME,
} = require("../lib/constants");

const AWS = require('aws-sdk');


/**
 * Queries AWS to find a Lambda function's ARN based on the supplied stack name and function name 
 * used when creating the Lambda with the CDK.
 *
 * @param {string} lambdaFunctionName the Lambda function's Name (defined in lib/aws-cdk-nodejs-lambda-stack.js).
 * @returns {string} Full AWS ARN for the Lambda function.
 * @throws {Error} Will throw an error if the Lambda function cannot be found.
 */
 const getLambdaFunctionArn =  async function(lambdaFunctionName) {

  const lambda = new AWS.Lambda({
    apiVersion: '2015-03-31',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION
  });

  const params = {
    FunctionVersion: 'ALL'
  };

  const results = await lambda.listFunctions(params).promise();

  for (let i = 0; i < results.Functions.length; ++i) {
    const lambdaFunction = results.Functions[i];
    // match function by CDK defined lambda function name
    if (lambdaFunction.FunctionName.includes(lambdaFunctionName)) {
      return lambdaFunction.FunctionArn;
    }
  }

  // throw exception if ARN is not found
  throw new Error(`Unable to find AWS Lambda ARN for function name '${lambdaFunctionName}'`);

}

/**
 * Queries AWS to find the ARN for a Lambda based on CDK stack name and Lambda function name.
 *
 * @throws {Error} Throws an Error if there is an issue determining the Lambda ARN.
 */
const main = async function() {

  const functionArn = await getLambdaFunctionArn(LAMBDA_FUNCTION_NAME)

  // Lambda Function ARN now available - can store as CI/CD variable, AWS SSM, or use in other CI/CD process
  console.log('functionArn', functionArn);

  return true;
}

main();