/* eslint-disable prettier/prettier */
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UsersService } from 'src/users/users.service';
import { Post } from './post.entity';
import { Repository } from 'typeorm';
import { CreatePostDTO } from './dto/create-post.dto';

@Injectable()
export class PostsService {

    constructor(
        @InjectRepository(Post) private postRepository: Repository<Post>,
        private usersService: UsersService) { }

    createPost(post: CreatePostDTO) {
        const userFound = this.usersService.getUSerById(post.authorId);

        if (!userFound) {
            return new HttpException('User not found', HttpStatus.NOT_FOUND);
        }

        const newPost = this.postRepository.create(post);
        return this.postRepository.save(newPost);
    }

    getPosts() {
        this.postRepository.find({
            relations: ['author']
        });
    }
}
