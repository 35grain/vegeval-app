import { Controller, Request, Post, UseGuards, Body } from '@nestjs/common';
import { LocalAuthGuard } from './local-auth.guard';
import { AuthService } from './auth.service';
import { UsersService, UserWithoutPassword } from 'src/users/users.service';
import { RegisterUserDto } from './dto/register-user.dto';
import * as bcrypt from 'bcrypt';
import { Public } from './public-route.decorator';

@Controller('auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly usersService: UsersService,
  ) {}

  @Public()
  @Post('register')
  async registerUser(
    @Body() CreateUserDto: RegisterUserDto,
  ): Promise<UserWithoutPassword> {
    const salt = await bcrypt.genSalt();
    const hash = await bcrypt.hash(CreateUserDto.password, salt);
    return this.usersService.createUser({
      name: CreateUserDto.name,
      email: CreateUserDto.email,
      password: hash,
    });
  }

  @Public()
  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Request() req) {
    return this.authService.login(req.user);
  }
}
