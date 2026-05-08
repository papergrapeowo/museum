import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// 允许的域名白名单
const allowedOrigins = [
  'https://hyhyh11715.github.io',  // GitHub Pages 域名
  'http://localhost:5174',          // 本地开发
  'http://localhost:3000',          // 后端本地
];

export function middleware(request: NextRequest) {
  const origin = request.headers.get('origin');
  
  // 如果 origin 在白名单中，允许访问；否则允许所有来源（用于测试）
  const allowedOrigin = allowedOrigins.includes(origin || '') 
    ? origin 
    : '*';

  const response = NextResponse.next();

  response.headers.set('Access-Control-Allow-Origin', allowedOrigin);
  response.headers.set('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
  response.headers.set('Access-Control-Allow-Headers', 'Content-Type, Authorization');
  response.headers.set('Access-Control-Max-Age', '86400');

  return response;
}

export const config = {
  matcher: '/api/:path*',
};