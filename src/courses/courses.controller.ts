import { UpdateCourseDto } from './dto/update-course.dto';
import { CoursesService } from './courses.service';
import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { create } from 'domain';
import path from 'path';
import { CreateCourseDto } from './dto/create-course.dto';

@Controller('courses')
export class CoursesController {

    constructor(private readonly coursesService: CoursesService) { }

    @Get()
    findAll() {
        return this.coursesService.findAll()
    }

    @Get(':id')
    findOne(@Param('id') id: number) {
        return this.coursesService.findOne(id);
    }

    @Post()
    create(@Body() createCourseDto: CreateCourseDto) {
        return this.coursesService.create(createCourseDto);
    }

    @Patch(':id')
    update(@Param('id') id: number, @Body() updateCourseDto: UpdateCourseDto) {
        return this.coursesService.update(id, updateCourseDto);
    }

    @Delete(':id')
    remove(@Param('id') id: number) {
        return this.coursesService.remove(id);
    }
}

