#!/usr/bin/env node

const {
  AWS_REGION,
  AWS_ACCESS_KEY_ID,
  AWS_SECRET_ACCESS_KEY,
  API_GATEWAY_REST_API_NAME,
} = require("../lib/constants");

const AWS = require('aws-sdk');

/**
 * Retrieves the URL for a REST API defined inside API Gateway. 
 *
 * @param {string} restApiName REST API name used in the CDK Stack when defining the API.
 * @returns {string} URL for the REST API.
 * @throws {Error} Will throw an error if the REST API cannot be found.
 */
const getApiGatewayRestApiUrl =  async function(restApiName) {

  const apigateway = new AWS.APIGateway({
    apiVersion: '2015-07-09',
    accessKeyId: AWS_ACCESS_KEY_ID,
    secretAccessKey: AWS_SECRET_ACCESS_KEY,
    region: AWS_REGION
  });

  // find restApiId - uses older verion of AWS SDK
  //  https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html
  const restApiResults = await apigateway.getRestApis().promise();
  const restApi = restApiResults.items.find(api => api.name === restApiName );

  // get rest api resourceId
  if (restApi && restApi.id) {

    // return execute-api structured URL - no method but documented a few places
    //  - https://docs.aws.amazon.com/apigateway/latest/developerguide/getting-started.html
    //  - https://docs.aws.amazon.com/AWSJavaScriptSDK/latest/AWS/APIGateway.html#getResources-property
    return `https://${restApi.id}.execute-api.${AWS_REGION}.amazonaws.com/prod`

  }

  // throw an error if no API is found
  throw new Error(`unable to find REST API named '${restApiName}' in API Gateway`);

}

/**
 * Queries AWS to find the URL a REST API hosted inside AWS API Gateway.
 *
 * @throws {Error} Throws an Error if there is an issue determining the REST API URL.
 */
const main = async function() {

  const restApiUrl = await getApiGatewayRestApiUrl(API_GATEWAY_REST_API_NAME);

  // REST API URL now available - can store as CI/CD variable, AWS SSM, or use in other CI/CD process
  console.log('restApiUrl', restApiUrl);

  return true;
}

main();