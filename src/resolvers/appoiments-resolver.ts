import {
  Query,
  Resolver,
  Mutation,
  Arg,
  FieldResolver,
  Root,
} from "type-graphql";
import { CreateAppoimentInput } from "../dtos/inputs/create-appoiments-input";
import { Appoiment } from "../dtos/models/appoiments-model";
import { Customer } from "../dtos/models/customer.model";

@Resolver(() => Appoiment)
export class AppoimentsResolver {
  @Query(() => [Appoiment])
  async appoiments() {
    return [
      {
        startsAt: new Date(),
        endsAt: new Date(),
      },
    ];
  }

  @Mutation(() => Appoiment)
  async createAppoiment(@Arg("data") data: CreateAppoimentInput) {
    const appoiment = {
      startsAt: data.startsAt,
      endsAt: data.endsAt,
    };
    return appoiment;
  }

  @FieldResolver(() => Customer)
  async customer(@Root() appoiment: Appoiment) {
    console.log(appoiment);

    return {
      name: "Jonh Doe",
    };
  }
}
