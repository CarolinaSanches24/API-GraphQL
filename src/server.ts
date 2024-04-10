import "reflect-metadata";
import {ApolloServer} from 'apollo-server';
import { buildSchema } from "type-graphql";
import { AppoimentsResolver } from "./resolvers/appoiments-resolver";
import path from 'node:path';


async function bootstrap(){
    const schema = await buildSchema({
        resolvers:[
            AppoimentsResolver,
        ],
        emitSchemaFile:path.resolve(__dirname, 'schema.gql')
    });

    const server = new ApolloServer({
        schema,

    })
    const {url} = await server.listen();
    console.log(`HTTP server running on ${url}`)
}

bootstrap()