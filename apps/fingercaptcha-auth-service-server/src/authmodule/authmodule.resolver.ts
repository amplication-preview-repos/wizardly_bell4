import * as graphql from "@nestjs/graphql";
import { GenerateFingerprintDataInput } from "../authModule/GenerateFingerprintDataInput";
import { FingerprintDataOutput } from "../authModule/FingerprintDataOutput";
import { IssueSessionTokenInput } from "../authModule/IssueSessionTokenInput";
import { LoginInput } from "../authModule/LoginInput";
import { ValidateSessionTokenInput } from "../authModule/ValidateSessionTokenInput";
import { VerifyFingerprintDataInput } from "../authModule/VerifyFingerprintDataInput";
import { AuthModuleService } from "./authmodule.service";

export class AuthModuleResolver {
  constructor(protected readonly service: AuthModuleService) {}

  @graphql.Mutation(() => FingerprintDataOutput)
  async GenerateFingerprintData(
    @graphql.Args()
    args: GenerateFingerprintDataInput
  ): Promise<FingerprintDataOutput> {
    return this.service.GenerateFingerprintData(args);
  }

  @graphql.Mutation(() => IssueSessionTokenInput)
  async IssueSessionToken(
    @graphql.Args()
    args: IssueSessionTokenInput
  ): Promise<IssueSessionTokenInput> {
    return this.service.IssueSessionToken(args);
  }

  @graphql.Mutation(() => String)
  async Login(
    @graphql.Args()
    args: LoginInput
  ): Promise<string> {
    return this.service.Login(args);
  }

  @graphql.Mutation(() => IssueSessionTokenInput)
  async ValidateSessionToken(
    @graphql.Args()
    args: ValidateSessionTokenInput
  ): Promise<IssueSessionTokenInput> {
    return this.service.ValidateSessionToken(args);
  }

  @graphql.Mutation(() => FingerprintDataOutput)
  async VerifyFingerprintData(
    @graphql.Args()
    args: VerifyFingerprintDataInput
  ): Promise<FingerprintDataOutput> {
    return this.service.VerifyFingerprintData(args);
  }
}
