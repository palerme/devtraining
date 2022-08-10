import { Course } from './entities/course.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { exists } from 'fs';

@Injectable()
export class CoursesService {
    private courses: Course[] = [
        {
            id: 1,
            name: 'Fundamentos Frameworkdo NestJS',
            description: 'Fundamentos Frameworkdo NestJS',
            tags: ['node.js', 'nestjs', 'javascript'],
        },

    ];

    findAll() {
        return this.courses;
    }

    findOne(id: string) {
        const course = this.courses.find((course: Course) => course.id === Number(id))

        if (!course) {
            throw new HttpException(`O curso ${id} não foi encontrado`, HttpStatus.NOT_FOUND);
        }

        return course;
    }

    create(createCourseDto: any) {
        this.courses.push(createCourseDto);
        return createCourseDto;
    }

    update(id: string, updateCourseDto: any) {
        const indexCourse = this.courses.findIndex(
            course => course.id === Number(id)
        );

        this.courses[indexCourse] = updateCourseDto;
    }

    remove(id: string) {
        const indexCourse = this.courses.findIndex(
            (course: Course) => course.id === Number(id)
        );
        if (indexCourse >= 0) {
            this.courses.splice(indexCourse, 1);
        }
    }

}

