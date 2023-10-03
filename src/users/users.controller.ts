import { Controller, Post, Body, Get, UseGuards, UsePipes } from '@nestjs/common';
import { ValidationPipe } from 'src/pipes/validation.pipe';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';
import { JwtModule } from '@nestjs/jwt';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles-auth.decorator';
import { RolesGuard } from 'src/auth/roles.guard';
import { AddRoleDto } from './dto/add-role.dto';
import { BanUserDto } from './dto/ban.dto';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService){}
    @ApiOperation({summary:"Создание пользователя"})
    @ApiResponse({status:200, type: User})
    @UsePipes(ValidationPipe)
    @Post()
    create(@Body() UserDto: CreateUserDto){
        return this.usersService.createUser(UserDto);
    }

    @ApiOperation({summary:"Получение всех пользователей"})
    @ApiResponse({status:200, type: [User]})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Get() 
    getAll(){
        return this.usersService.getAllUser()
    }

    @ApiOperation({summary:"Выдать роль"})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/role') 
    addRole(@Body() dto: AddRoleDto) {
        return this.usersService.addRole(dto)
    }

    @ApiOperation({summary:"Забанить пользователя"})
    @ApiResponse({status:200})
    @Roles("ADMIN")
    @UseGuards(RolesGuard)
    @Post('/ban') 
    ban(@Body() dto: BanUserDto) {
        return this.usersService.ban(dto)
    }


}