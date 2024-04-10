import { Query, Resolver, Mutation, Arg } from "type-graphql";
import { CreateAppoimentInput } from "../dtos/inputs/create-appoiments-input";
import { Appoiment } from "../dtos/models/appoiments-model";

@Resolver()
export class AppoimentsResolver {
  @Query(() => String)
  async helloWorld() {
    return "hello World";
  }

  @Mutation(() => Appoiment)
  async createAppoiment(@Arg("data") data: CreateAppoimentInput) {
    const appoiment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };
    return appoiment;
  }
}