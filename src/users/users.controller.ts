import { Controller, Get, Param, UseGuards, Request } from '@nestjs/common';
import { UsersService, UserWithoutPassword } from './users.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { Roles } from 'src/auth/roles/roles.decorator';
import { Role } from 'src/auth/roles/role.enum';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Roles(Role.Admin)
  @Get()
  async getUsers(@Param() params): Promise<UserWithoutPassword[]> {
    return this.usersService.getUsers(params);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  async getProfile(@Request() req): Promise<UserWithoutPassword> {
    return this.usersService.getUser({ id: req.user.id });
  }
}
