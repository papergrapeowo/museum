import { initializeDatabase } from '@/lib/database';

// 初始化数据库
export async function GET() {
  await initializeDatabase();
  return new Response('Database initialized successfully', { status: 200 });
}