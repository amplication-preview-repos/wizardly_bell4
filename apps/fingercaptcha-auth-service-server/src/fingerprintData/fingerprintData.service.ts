import { Injectable } from "@nestjs/common";
import { PrismaService } from "../prisma/prisma.service";
import { FingerprintDataServiceBase } from "./base/fingerprintData.service.base";

@Injectable()
export class FingerprintDataService extends FingerprintDataServiceBase {
  constructor(protected readonly prisma: PrismaService) {
    super(prisma);
  }
}
