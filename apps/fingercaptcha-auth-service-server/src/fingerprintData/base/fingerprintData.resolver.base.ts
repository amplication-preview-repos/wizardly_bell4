/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FingerprintData } from "./FingerprintData";
import { FingerprintDataCountArgs } from "./FingerprintDataCountArgs";
import { FingerprintDataFindManyArgs } from "./FingerprintDataFindManyArgs";
import { FingerprintDataFindUniqueArgs } from "./FingerprintDataFindUniqueArgs";
import { DeleteFingerprintDataArgs } from "./DeleteFingerprintDataArgs";
import { FingerprintDataService } from "../fingerprintData.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FingerprintData)
export class FingerprintDataResolverBase {
  constructor(
    protected readonly service: FingerprintDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "read",
    possession: "any",
  })
  async _fingerprintDataItemsMeta(
    @graphql.Args() args: FingerprintDataCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [FingerprintData])
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "read",
    possession: "any",
  })
  async fingerprintDataItems(
    @graphql.Args() args: FingerprintDataFindManyArgs
  ): Promise<FingerprintData[]> {
    return this.service.fingerprintDataItems(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => FingerprintData, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "read",
    possession: "own",
  })
  async fingerprintData(
    @graphql.Args() args: FingerprintDataFindUniqueArgs
  ): Promise<FingerprintData | null> {
    const result = await this.service.fingerprintData(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => FingerprintData)
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "delete",
    possession: "any",
  })
  async deleteFingerprintData(
    @graphql.Args() args: DeleteFingerprintDataArgs
  ): Promise<FingerprintData | null> {
    try {
      return await this.service.deleteFingerprintData(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }
}