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
import { Server } from "./Server";
import { ServerCountArgs } from "./ServerCountArgs";
import { ServerFindManyArgs } from "./ServerFindManyArgs";
import { ServerFindUniqueArgs } from "./ServerFindUniqueArgs";
import { DeleteServerArgs } from "./DeleteServerArgs";
import { ServerService } from "../server.service";
@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => Server)
export class ServerResolverBase {
  constructor(
    protected readonly service: ServerService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}

  @graphql.Query(() => MetaQueryPayload)
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "read",
    possession: "any",
  })
  async _serversMeta(
    @graphql.Args() args: ServerCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => [Server])
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "read",
    possession: "any",
  })
  async servers(@graphql.Args() args: ServerFindManyArgs): Promise<Server[]> {
    return this.service.servers(args);
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @graphql.Query(() => Server, { nullable: true })
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "read",
    possession: "own",
  })
  async server(
    @graphql.Args() args: ServerFindUniqueArgs
  ): Promise<Server | null> {
    const result = await this.service.server(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => Server)
  @nestAccessControl.UseRoles({
    resource: "Server",
    action: "delete",
    possession: "any",
  })
  async deleteServer(
    @graphql.Args() args: DeleteServerArgs
  ): Promise<Server | null> {
    try {
      return await this.service.deleteServer(args);
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