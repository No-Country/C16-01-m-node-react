/* eslint-disable prettier/prettier */
import { Body, Controller, Post, Get } from '@nestjs/common';
import { CreatePostDTO } from './dto/create-post.dto';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {

    constructor(private postService: PostsService) { }

    @Post()
    createPost(@Body() post: CreatePostDTO) {
        this.postService.createPost(post);
    }

    @Get()
    getPost() {
        return this.postService.getPosts();
    }
}
