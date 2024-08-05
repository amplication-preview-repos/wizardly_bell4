import { Module } from "@nestjs/common";
import { AuthModuleService } from "./authmodule.service";
import { AuthModuleController } from "./authmodule.controller";
import { AuthModuleResolver } from "./authmodule.resolver";

@Module({
  controllers: [AuthModuleController],
  providers: [AuthModuleService, AuthModuleResolver],
  exports: [AuthModuleService],
})
export class AuthModuleModule {}
