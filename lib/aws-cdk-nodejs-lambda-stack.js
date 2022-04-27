const { Stack, Duration } = require('aws-cdk-lib');
const lambda = require('aws-cdk-lib/aws-lambda');

class AwsCdkNodejsLambdaStack extends Stack {
  /**
   *
   * @param {Construct} scope
   * @param {string} id
   * @param {StackProps=} props
   */
  constructor(scope, id, props) {
    super(scope, id, props);

    // The code that defines your stack goes here

    const hello = new lambda.Function(this, 'getHikesLambdaFunction', {
      runtime: lambda.Runtime.NODEJS_14_X,    // execution environment
      code: lambda.Code.fromAsset('handler'), // code loaded from "handler" directory
      handler: 'index.main'                   // file is "index", function is "main"
    });

  }
}

module.exports = { AwsCdkNodejsLambdaStack }
