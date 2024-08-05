import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import * as errors from "../errors";
import { AuthModuleService } from "./authmodule.service";
import { VerifyFingerprintDataInput } from "../authModule/VerifyFingerprintDataInput";
import { FingerprintDataOutput } from "../authModule/FingerprintDataOutput";
import { IssueSessionTokenInput } from "../authModule/IssueSessionTokenInput";

@swagger.ApiTags("authModules")
@common.Controller("authModules")
export class AuthModuleController {
  constructor(protected readonly service: AuthModuleService) {}

  @common.Post("/generate-fingerprint")
  @swagger.ApiOkResponse({
    type: FingerprintDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async GenerateFingerprintData(
    @common.Body()
    body: VerifyFingerprintDataInput
  ): Promise<FingerprintDataOutput> {
        return this.service.GenerateFingerprintData(body);
      }

  @common.Post("/issue-session-token")
  @swagger.ApiOkResponse({
    type: IssueSessionTokenInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async IssueSessionToken(
    @common.Body()
    body: VerifyFingerprintDataInput
  ): Promise<IssueSessionTokenInput> {
        return this.service.IssueSessionToken(body);
      }

  @common.Post("/login")
  @swagger.ApiOkResponse({
    type: String
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async Login(
    @common.Body()
    body: VerifyFingerprintDataInput
  ): Promise<string> {
        return this.service.Login(body);
      }

  @common.Post("/validate-session-token")
  @swagger.ApiOkResponse({
    type: IssueSessionTokenInput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async ValidateSessionToken(
    @common.Body()
    body: VerifyFingerprintDataInput
  ): Promise<IssueSessionTokenInput> {
        return this.service.ValidateSessionToken(body);
      }

  @common.Post("/verify-fingerprint")
  @swagger.ApiOkResponse({
    type: FingerprintDataOutput
  })
  @swagger.ApiNotFoundResponse({
    type: errors.NotFoundException
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException
  })
  async VerifyFingerprintData(
    @common.Body()
    body: VerifyFingerprintDataInput
  ): Promise<FingerprintDataOutput> {
        return this.service.VerifyFingerprintData(body);
      }
}
