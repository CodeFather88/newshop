import { Controller, Post, Body, Get } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create.user.dto';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { User } from './users.model';

@ApiTags('Пользователи')
@Controller('users')
export class UsersController {

    constructor (private usersService: UsersService){}
    @ApiOperation({summary:"Создание пользователя"})
    @ApiResponse({status:200, type: User})
    @Post()
    create(@Body() UserDto: CreateUserDto){
        return this.usersService.createUser(UserDto);
    }

    @ApiOperation({summary:"Получение всех пользователей"})
    @ApiResponse({status:200, type: [User]})
    @Get() 
    getAll(){
        return this.usersService.getAllUser()
    }


}
