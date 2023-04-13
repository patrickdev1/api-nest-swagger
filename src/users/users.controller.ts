/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { CrudController } from '@nestjsx/crud/lib/interfaces';
import { User } from './user.entity';
import { UsersService } from './users.service';

@Crud({
    model: {
        type: User
    }
    
    
})
@Controller('users')
export class UsersController implements CrudController<User> {
    constructor(public service: UsersService) {}
}
