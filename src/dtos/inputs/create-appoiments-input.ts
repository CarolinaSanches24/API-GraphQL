import { IsString, IsNotEmpty } from "class-validator";
import { Field, InputType } from "type-graphql";
import { GraphQLDateTime } from "graphql-iso-date";

@InputType()
export class CreateAppoimentInput {
  @Field()
  @IsString()
  @IsNotEmpty()
  customerId: string;

  @Field(() => GraphQLDateTime)
  startsAt: Date;

  @Field(() => GraphQLDateTime)
  endsAt: Date;
}
