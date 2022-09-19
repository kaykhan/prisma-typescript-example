import type { AWS } from "@serverless/typescript";

const serverlessConfiguration: AWS = {
  service: "app1",
  frameworkVersion: "3",
  provider: {
    name: "aws",
    runtime: "nodejs14.x",
    apiGateway: {
      minimumCompressionSize: 1024,
      shouldStartNameWithService: true,
    },
    environment: {
      AWS_NODEJS_CONNECTION_REUSE_ENABLED: "1",
      NODE_OPTIONS: "--enable-source-maps --stack-trace-limit=1000",
    },
  },
  // import the function via paths
  functions: {
    functionone: {
      handler: "handler.FunctionOne",
      timeout: 300,
      layers: [{ Ref: "PrismaLambdaLayer" }],
    },
    functiontwo: {
      handler: "handler.FunctionTwo",
      timeout: 300,
      layers: [{ Ref: "PrismaLambdaLayer" }],
    },
  },
  layers: {
    prisma: {
      path: ".prisma-layer",
      description: "Layer for prisma clients",
      package: {
        patterns: [
          "!nodejs/node_modules/@prisma/engines/*",
          "!nodejs/node_modules/.prisma/**/libquery_engine-*",
          "nodejs/node_modules/.prisma/**/libquery_engine-rhel-openssl-1.0.x.so.node",
          "!nodejs/prisma/**",
          "nodejs/prisma/*.db",
          "nodejs/node_modules/.prisma/client/schema.prisma",
        ],
      },
    },
  },

  package: {
    individually: true,
  },
};

module.exports = serverlessConfiguration;
