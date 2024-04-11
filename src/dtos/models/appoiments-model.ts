import { GraphQLDateTime } from "graphql-iso-date";
import { Field, ObjectType } from "type-graphql";

//entidade a nivel de camada HTTP - tudo o que front-end vai ver

@ObjectType()
export class Appoiment{
    @Field(()=>GraphQLDateTime)
    startsAt:Date;
    @Field(()=>GraphQLDateTime)
    endsAt:Date;
}