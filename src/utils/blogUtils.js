import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export function getAllBlogPosts() {
    const blogDirectory = path.join(process.cwd(), 'src', 'blogPosts');
    const fileNames = fs.readdirSync(blogDirectory);

    const posts = fileNames.map(fileName => {
        const filePath = path.join(blogDirectory, fileName);
        const fileContents = fs.readFileSync(filePath, 'utf8');
        const { data, content } = matter(fileContents);

        return {
            id: fileName.replace(/\.md$/, ''),
            ...data,
            content,
        };
    });

    // Sort posts by createdDate, newest first
    return posts.sort((a, b) => new Date(b.createdDate) - new Date(a.createdDate));
}

export function getBlogPostById(id) {
    const filePath = path.join(process.cwd(), 'src', 'blogPosts', `${id}.md`);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    return {
        id,
        ...data,
        content,
    };
}
