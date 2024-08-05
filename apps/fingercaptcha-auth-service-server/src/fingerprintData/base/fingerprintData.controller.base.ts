/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as common from "@nestjs/common";
import * as swagger from "@nestjs/swagger";
import { isRecordNotFoundError } from "../../prisma.util";
import * as errors from "../../errors";
import { Request } from "express";
import { plainToClass } from "class-transformer";
import { ApiNestedQuery } from "../../decorators/api-nested-query.decorator";
import * as nestAccessControl from "nest-access-control";
import * as defaultAuthGuard from "../../auth/defaultAuth.guard";
import { FingerprintDataService } from "../fingerprintData.service";
import { AclValidateRequestInterceptor } from "../../interceptors/aclValidateRequest.interceptor";
import { AclFilterResponseInterceptor } from "../../interceptors/aclFilterResponse.interceptor";
import { FingerprintDataCreateInput } from "./FingerprintDataCreateInput";
import { FingerprintData } from "./FingerprintData";
import { FingerprintDataFindManyArgs } from "./FingerprintDataFindManyArgs";
import { FingerprintDataWhereUniqueInput } from "./FingerprintDataWhereUniqueInput";
import { FingerprintDataUpdateInput } from "./FingerprintDataUpdateInput";

@swagger.ApiBearerAuth()
@common.UseGuards(defaultAuthGuard.DefaultAuthGuard, nestAccessControl.ACGuard)
export class FingerprintDataControllerBase {
  constructor(
    protected readonly service: FingerprintDataService,
    protected readonly rolesBuilder: nestAccessControl.RolesBuilder
  ) {}
  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Post()
  @swagger.ApiCreatedResponse({ type: FingerprintData })
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "create",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async createFingerprintData(
    @common.Body() data: FingerprintDataCreateInput
  ): Promise<FingerprintData> {
    return await this.service.createFingerprintData({
      data: data,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get()
  @swagger.ApiOkResponse({ type: [FingerprintData] })
  @ApiNestedQuery(FingerprintDataFindManyArgs)
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "read",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fingerprintDataItems(
    @common.Req() request: Request
  ): Promise<FingerprintData[]> {
    const args = plainToClass(FingerprintDataFindManyArgs, request.query);
    return this.service.fingerprintDataItems({
      ...args,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
  }

  @common.UseInterceptors(AclFilterResponseInterceptor)
  @common.Get("/:id")
  @swagger.ApiOkResponse({ type: FingerprintData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "read",
    possession: "own",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async fingerprintData(
    @common.Param() params: FingerprintDataWhereUniqueInput
  ): Promise<FingerprintData | null> {
    const result = await this.service.fingerprintData({
      where: params,
      select: {
        createdAt: true,
        id: true,
        updatedAt: true,
      },
    });
    if (result === null) {
      throw new errors.NotFoundException(
        `No resource was found for ${JSON.stringify(params)}`
      );
    }
    return result;
  }

  @common.UseInterceptors(AclValidateRequestInterceptor)
  @common.Patch("/:id")
  @swagger.ApiOkResponse({ type: FingerprintData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "update",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async updateFingerprintData(
    @common.Param() params: FingerprintDataWhereUniqueInput,
    @common.Body() data: FingerprintDataUpdateInput
  ): Promise<FingerprintData | null> {
    try {
      return await this.service.updateFingerprintData({
        where: params,
        data: data,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }

  @common.Delete("/:id")
  @swagger.ApiOkResponse({ type: FingerprintData })
  @swagger.ApiNotFoundResponse({ type: errors.NotFoundException })
  @nestAccessControl.UseRoles({
    resource: "FingerprintData",
    action: "delete",
    possession: "any",
  })
  @swagger.ApiForbiddenResponse({
    type: errors.ForbiddenException,
  })
  async deleteFingerprintData(
    @common.Param() params: FingerprintDataWhereUniqueInput
  ): Promise<FingerprintData | null> {
    try {
      return await this.service.deleteFingerprintData({
        where: params,
        select: {
          createdAt: true,
          id: true,
          updatedAt: true,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new errors.NotFoundException(
          `No resource was found for ${JSON.stringify(params)}`
        );
      }
      throw error;
    }
  }
}
