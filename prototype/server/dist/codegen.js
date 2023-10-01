"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    schema: 'schema.graphql',
    generates: {
        './src/resolvers-types.ts': {
            config: {
                useIndexSignature: true,
            },
            plugins: ['typescript', 'typescript-resolvers'],
        },
    },
};
exports.default = config;
