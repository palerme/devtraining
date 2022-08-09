import { Body, Controller, Get, HttpCode, HttpStatus, Param, Post, Res } from '@nestjs/common';
import { create } from 'domain';
import path from 'path';

@Controller('courses')
export class CoursesController {
    options: any;
    http: any;
    @Get('/list')
    findAll(@Res() response) {
        return response.status(200).send('Lista de cursos');
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return `Curso #${id}`;
    }

    @Post()
    @HttpCode(HttpStatus.NO_CONTENT)
    create(@Body("name") body) {
        return body;
    }
}

