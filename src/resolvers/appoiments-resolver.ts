import { Query, Resolver , Mutation} from "type-graphql";

@Resolver()
export class AppoimentsResolver{
    @Query(()=>String)
    async helloWorld(){
        return 'hello World'
    }

    @Mutation(()=>Boolean)
    async createAppoiment(){
        return true
    }




}