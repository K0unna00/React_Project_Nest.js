import { Injectable } from '@nestjs/common';
import { Blog } from 'src/models/blog';
import blogsJson from './blogs.json';

const blogs = blogsJson.blogs;

@Injectable()
export class BlogService {
  getBlogs(): Blog[] {
    return blogs;
  }

  getBlogById(id: number): Blog {
    return blogs.find((x) => x.id == id);
  }
}
