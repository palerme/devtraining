import { Injectable } from '@nestjs/common';
import { DataSource } from "typeorm";

import { Course } from "./courses/entities/course.entity";

export const coursesProviders = [
    {
        provider: 'COURSES_REPOSITORY',
        usefactory: (datasource: DataSource) => datasource.getRepository(Course),
        inject: [DataSource],

    }

]