/* eslint-disable prettier/prettier */
import { Controller, Post, Get, Delete, Patch, Body, Param, ParseIntPipe } from '@nestjs/common';
import { CreateUSerDTO } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { User } from "./users.entity";
import { UpdateUSerDTO } from './dto/update-user.dt';
import { CreateProfileDTO } from './dto/create-profile.dto';

@Controller('users')
export class UsersController {

    constructor(private usersService: UsersService) { }

    @Get()
    getUser(): Promise<User[]> {
        return this.usersService.getUSers()
    }

    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number){
        return this.usersService.getUSerById(id)
    }

    @Post()
    createUSer(@Body() newUser: CreateUSerDTO) {
        return this.usersService.createUser(newUser)
    }

    @Delete(':id')
    deleteUser(@Param('id', ParseIntPipe) id: number) {
        return this.usersService.deleteUser(id)
    }

    @Patch(':id')
    updateUser(@Param('id', ParseIntPipe) id: number, @Body() user: UpdateUSerDTO) {
        return this.usersService.updateUser(id, user)
    }

    @Post('id/profile')
    createProfile(@Param('id', ParseIntPipe) id:number, @Body() profile: CreateProfileDTO) {
        this.usersService.createProfile(id, profile)
    }
}


