import { ApolloServer, gql } from 'apollo-server-express';
import { formatError } from 'apollo-errors';
import { makeExecutableSchema } from 'graphql-tools';
import * as path from 'path';
//如果你不想写字符串 想用graphql文件的话就要这个。
import { importSchema } from 'graphql-import';

//graphql resolvers 的全部实现入口文件
import resolvers from './models/resolvers';
//graphql Schema root文件
const typeDefs = importSchema(path.join(__dirname, 'models/schema.graphql'));

const schema = makeExecutableSchema({
    typeDefs: typeDefs,
    resolvers: resolvers
});

export default (app: any): void => {
    const server = new ApolloServer({
        schema,
        formatError
    });

    server.applyMiddleware({
        app,
        path: '/graphql'
    })
}