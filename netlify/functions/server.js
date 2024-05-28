const awsLambdaFastify = require('@fastify/aws-lambda')
const init = require('../../app');

exports.handler = awsLambdaFastify(init());