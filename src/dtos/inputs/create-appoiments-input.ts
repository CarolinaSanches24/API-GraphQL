import { Field, InputType } from "type-graphql";

@InputType()
export class CreateAppoimentInput{

    @Field()
    customerId:String;
    @Field()
    startsAt:Date;

    @Field()
    endsAt:Date;


}