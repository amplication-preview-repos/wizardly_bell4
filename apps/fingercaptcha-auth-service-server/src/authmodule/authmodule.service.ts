import { Injectable } from "@nestjs/common";
import { GenerateFingerprintDataInput } from "../authModule/GenerateFingerprintDataInput";
import { FingerprintDataOutput } from "../authModule/FingerprintDataOutput";
import { IssueSessionTokenInput } from "../authModule/IssueSessionTokenInput";
import { LoginInput } from "../authModule/LoginInput";
import { ValidateSessionTokenInput } from "../authModule/ValidateSessionTokenInput";
import { VerifyFingerprintDataInput } from "../authModule/VerifyFingerprintDataInput";

@Injectable()
export class AuthModuleService {
  constructor() {}
  async GenerateFingerprintData(args: GenerateFingerprintDataInput): Promise<FingerprintDataOutput> {
    throw new Error("Not implemented");
  }
  async IssueSessionToken(args: IssueSessionTokenInput): Promise<IssueSessionTokenInput> {
    throw new Error("Not implemented");
  }
  async Login(args: LoginInput): Promise<string> {
    throw new Error("Not implemented");
  }
  async ValidateSessionToken(args: ValidateSessionTokenInput): Promise<IssueSessionTokenInput> {
    throw new Error("Not implemented");
  }
  async VerifyFingerprintData(args: VerifyFingerprintDataInput): Promise<FingerprintDataOutput> {
    throw new Error("Not implemented");
  }
}
