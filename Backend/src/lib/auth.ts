import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key';

// 默认管理员账户（密码123456）
const DEFAULT_ADMIN = {
  id: 1,
  name: 'admin',
  email: 'admin',
  password: '$2a$10$YourHashedPasswordHere' // 这个占位符会被替换
};

// 预先生成 admin 密码的哈希值
const ADMIN_PASSWORD_HASH = bcrypt.hashSync('123456', 10);
DEFAULT_ADMIN.password = ADMIN_PASSWORD_HASH;

// 模拟用户数据（用于本地开发）
const mockUsers: Array<{id: number; name: string; email: string; password: string}> = [
  { ...DEFAULT_ADMIN }
];

export async function hashPassword(password: string): Promise<string> {
  const salt = await bcrypt.genSalt(10);
  return await bcrypt.hash(password, salt);
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

export function generateToken(userId: number): string {
  return jwt.sign({ userId }, JWT_SECRET, { expiresIn: '7d' });
}

export function verifyToken(token: string): { userId: number } | null {
  try {
    return jwt.verify(token, JWT_SECRET) as { userId: number };
  } catch {
    return null;
  }
}

// 模拟数据库操作（用于本地开发）
export const mockDb = {
  findUserByEmail: (email: string) => {
    return mockUsers.find(u => u.email === email);
  },
  findUserById: (id: number) => {
    return mockUsers.find(u => u.id === id);
  },
  createUser: (name: string, email: string, password: string) => {
    const newUser = {
      id: mockUsers.length + 1,
      name,
      email,
      password
    };
    mockUsers.push(newUser);
    return newUser;
  }
};