import * as graphql from "@nestjs/graphql";
import * as nestAccessControl from "nest-access-control";
import * as gqlACGuard from "../auth/gqlAC.guard";
import { GqlDefaultAuthGuard } from "../auth/gqlDefaultAuth.guard";
import * as common from "@nestjs/common";
import { FingerprintDataResolverBase } from "./base/fingerprintData.resolver.base";
import { FingerprintData } from "./base/FingerprintData";
import { FingerprintDataService } from "./fingerprintData.service";

@common.UseGuards(GqlDefaultAuthGuard, gqlACGuard.GqlACGuard)
@graphql.Resolver(() => FingerprintData)
export class FingerprintDataResolver extends FingerprintDataResolverBase {
  constructor(
    protected readonly service: FingerprintDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
