import { DatabaseModule } from './../database/database.module';
import { CoursesService } from './courses.service';
import { Module } from '@nestjs/common';
import { CoursesController } from './courses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { Course } from './entities/course.entity';



@Module({
    imports: [DatabaseModule],
    controllers: [CoursesController],
    providers: [CoursesService],
})
export class CoursesModule {}
