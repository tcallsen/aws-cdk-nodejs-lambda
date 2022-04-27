// AWS Deployment Information
exports.AWS_REGION = process.env.CDK_DEPLOY_REGION || process.env.CDK_DEFAULT_REGION;
exports.AWS_ACCESS_KEY_ID = process.env.AWS_ACCESS_KEY_ID;
exports.AWS_SECRET_ACCESS_KEY = process.env.AWS_SECRET_ACCESS_KEY;

// defines the CDK stack name in bin/aws-cdk-nodejs-lambda.js
exports.AWS_CDK_STACK_NAME = 'GeoSampleStack';

// defines the lambda function name in lib/aws-cdk-nodejs-lambda-stack.js 
exports.LAMBDA_FUNCTION_NAME = 'getHikesLambdaFunction';

// defines the REST API name in lib/aws-cdk-nodejs-lambda-stack.js
exports.API_GATEWAY_REST_API_NAME = 'getHikesRestApi';
