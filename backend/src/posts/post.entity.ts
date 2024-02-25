/* eslint-disable prettier/prettier */

import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "src/users/users.entity";

@Entity()
export class Post {
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    title: string
    
    @Column()
    content: string
    
    @ManyToOne(() => User, user => user.posts)
    author: User

    @Column()
    authorId: number
}