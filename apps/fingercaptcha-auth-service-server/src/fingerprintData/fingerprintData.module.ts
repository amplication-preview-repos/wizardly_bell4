import { Module, forwardRef } from "@nestjs/common";
import { AuthModule } from "../auth/auth.module";
import { FingerprintDataModuleBase } from "./base/fingerprintData.module.base";
import { FingerprintDataService } from "./fingerprintData.service";
import { FingerprintDataController } from "./fingerprintData.controller";
import { FingerprintDataResolver } from "./fingerprintData.resolver";

@Module({
  imports: [FingerprintDataModuleBase, forwardRef(() => AuthModule)],
  controllers: [FingerprintDataController],
  providers: [FingerprintDataService, FingerprintDataResolver],
  exports: [FingerprintDataService],
})
export class FingerprintDataModule {}
