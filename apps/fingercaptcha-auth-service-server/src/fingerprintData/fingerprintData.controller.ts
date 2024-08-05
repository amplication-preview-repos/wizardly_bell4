import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as nestAccessControl from "nest-access-control";
import { FingerprintDataService } from "./fingerprintData.service";
import { FingerprintDataControllerBase } from "./base/fingerprintData.controller.base";

@swagger.ApiTags("fingerprintData")
@common.Controller("fingerprintData")
export class FingerprintDataController extends FingerprintDataControllerBase {
  constructor(
    protected readonly service: FingerprintDataService,
    @nestAccessControl.InjectRolesBuilder()
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {
    super(service, rolesBuilder);
  }
}
