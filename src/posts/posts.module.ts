import { Module } from '@nestjs/common';
import { PostsService } from './posts.service';
import { PostsController } from './posts.controller';
import { Sequelize } from 'sequelize';
import { SequelizeModule } from '@nestjs/sequelize';
import { UserRoles } from 'src/roles/user-roles.model';
import { Post } from './posts.model';
import { Role } from 'src/roles/roles.model';
import { User } from 'src/users/users.model';
import { FilesModule } from 'src/files/files.module';

@Module({
  providers: [PostsService],
  controllers: [PostsController],
  imports: [
    SequelizeModule.forFeature([User, Role, UserRoles, Post]),
    FilesModule
  ]

})
export class PostsModule {}
