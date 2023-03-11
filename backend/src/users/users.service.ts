import { ConflictException, Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma.service';
import { User, Prisma } from '@prisma/client';

export type UserWithoutPassword = {
  id: number;
  name: string | null;
  email: string;
  role: string;
  createdAt: Date;
  updatedAt: Date;
};

const userWithoutPassword = {
  id: true,
  name: true,
  email: true,
  role: true,
  createdAt: true,
  updatedAt: true,
};

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}

  async getUser(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<UserWithoutPassword | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
      select: userWithoutPassword,
    });
  }

  async getUserLogin(
    userWhereUniqueInput: Prisma.UserWhereUniqueInput,
  ): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: userWhereUniqueInput,
    });
  }

  async getUsers(params: {
    skip?: number;
    take?: number;
    cursor?: Prisma.UserWhereUniqueInput;
    where?: Prisma.UserWhereInput;
    orderBy?: Prisma.UserOrderByWithRelationInput;
  }): Promise<UserWithoutPassword[]> {
    const { skip, take, cursor, where, orderBy } = params;
    return this.prisma.user.findMany({
      skip,
      take,
      cursor,
      where,
      orderBy,
      select: userWithoutPassword,
    });
  }

  async createUser(data: Prisma.UserCreateInput): Promise<UserWithoutPassword> {
    if (await this.getUser({ email: data.email })) {
      throw new ConflictException('User with provided email already exists!');
    }
    return this.prisma.user.create({
      data,
      select: userWithoutPassword,
    });
  }

  async updateUser(params: {
    where: Prisma.UserWhereUniqueInput;
    data: Prisma.UserUpdateInput;
  }): Promise<UserWithoutPassword> {
    const { where, data } = params;
    return this.prisma.user.update({
      data,
      where,
      select: userWithoutPassword,
    });
  }

  async deleteUser(where: Prisma.UserWhereUniqueInput): Promise<User> {
    return this.prisma.user.delete({
      where,
    });
  }
}
