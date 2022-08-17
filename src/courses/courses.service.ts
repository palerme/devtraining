import { UpdateCourseDto } from './dto/update-course.dto';
import { CreateCourseDto } from './dto/create-course.dto';
import { Inject, Injectable, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';

import { Course } from './entities/course.entity';
import { CoursesController } from './courses.controller';

@Injectable()
export class CoursesService {
  constructor(
    @Inject('DATA_SOURCE')
    private readonly courseRepository: Repository<Course>,
  ) {}
  findAll() {
    return this.courseRepository.find();
  }

  async findOne(id: number) {
    const course = await this.courseRepository.findOne({ where: { id } });

    if (!course) {
      throw new NotFoundException(`O curso ${id} não foi encontrado`);
    }

    return course;
  }

  create(createCourseDto: CreateCourseDto) {
    const course = this.courseRepository.create(createCourseDto);
    return this.courseRepository.save(course);
  }

  async update(id: number, updateCourseDto: UpdateCourseDto) {
    const course = await this.courseRepository.preload({
      id: id,
      ...updateCourseDto,
    });
    if (!course) {
      throw new NotFoundException(`O curso ${id} não foi encontrado`);
    }
    return this.courseRepository.save(course);
  }

  async remove(id: number) {
    const course = await this.courseRepository.findOne({ where: { id } });
    if (!course) {
      throw new NotFoundException(`O curso ${id} não foi encontrado`);
    }
    return this.courseRepository.remove(course);
  }
}
