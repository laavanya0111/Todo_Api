import { Controller, 
    Get,
    Param,
    Put,
    Delete,
    Body,
    Post,
} from '@nestjs/common';
import { TodoService } from './todo.service';
import { Todo } from '@prisma/client';
@Controller('todo')
export class TodoController {
    constructor(private readonly todoService: TodoService) {}

  @Get()
  async getAllTodo(): Promise<Todo[]>{
    return this.todoService.getAllTodo();
  }

  @Post()
  async create(@Body() postData: Todo): Promise<Todo>{
    return this.todoService.createTodo(postData);
  }

  @Get(':id')
  async getTodo(@Param('id') id: number): Promise<Todo | null>{
    return this.todoService.getTodo(id);
  }

  @Put(':id')
  async updateTodo(@Param('id') id: Number): Promise<Todo>{
    return this.todoService.updateTodo(id);
  }

  @Delete(':id')
  async deleteTodo(@Param('id') id: Number): Promise<Todo>{
    return this.todoService.deleteTodo(id);
  }
}
