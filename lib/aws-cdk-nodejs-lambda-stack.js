const { Stack } = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');
const apigateway = require("aws-cdk-lib/aws-apigateway");

const { LAMBDA_FUNCTION_NAME, API_GATEWAY_REST_API_NAME } = require('./constants');

class AwsCdkNodejsLambdaStack extends Stack {

  /**
   * Defines a sample stack that includes a Lambda function that is accessible via API Gateway.
   * 
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    const getHikesLambdaFunction = new lambda.Function(this, LAMBDA_FUNCTION_NAME, {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('handler'), // code loaded from "handler" directory
      handler: 'index.main'                   // file is "index", function is "main"
    });

    const getHikesApi = new apigateway.RestApi(this, 'getHikesRestApiId', {
      restApiName: API_GATEWAY_REST_API_NAME,
      description: "This service returns a static list of hikes in JSON format."
    });

    const getHikesIntegration = new apigateway.LambdaIntegration(getHikesLambdaFunction, {
      requestTemplates: { "application/json": '{ "statusCode": "200" }' }
    });

    getHikesApi.root.addMethod("GET", getHikesIntegration);

  }
}

module.exports = { AwsCdkNodejsLambdaStack }
