import { Controller } from '@nestjs/common';
import { RolesService } from './roles.service';
import { CreateRoleDto } from './dto/create.role.dto';
import { Post, Body, Get, Param } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Role } from './roles.model';

@Controller('roles')
export class RolesController {

    constructor (private rolesService: RolesService){}
    @ApiOperation({summary:"Создание роли"})
    @ApiResponse({status:200, type: Role})
    @Post()
    create(@Body() RoleDto: CreateRoleDto){
        return this.rolesService.createRole(RoleDto)
    }

    @ApiOperation({summary:"Получение всех ролей"})
    @ApiResponse({status:200, type: [Role]})
    @Get('/:value') 
    getByValue(@Param('value') value: string){
        return this.rolesService.getRoleByValue(value)
    }
}
