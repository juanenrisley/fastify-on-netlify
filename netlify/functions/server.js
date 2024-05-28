const awsLambdaFastify = require('@fastify/aws-lambda')
const app = require('../../');

exports.handler = awsLambdaFastify(app);