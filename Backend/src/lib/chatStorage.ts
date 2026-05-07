// 对话记录存储（内存存储）

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
  timestamp: number;
}

interface ChatRecord {
  artifactId: number;
  messages: Message[];
  updatedAt: number;
}

// 存储所有对话记录
const chatRecords: Map<string, ChatRecord> = new Map();

// 生成 key：用户ID + 文物ID
function generateChatKey(artifactId: number): string {
  return `artifact_${artifactId}`;
}

// 保存对话记录
export function saveChatRecord(artifactId: number, messages: Message[]) {
  const key = generateChatKey(artifactId);
  chatRecords.set(key, {
    artifactId,
    messages: [...messages],
    updatedAt: Date.now()
  });
}

// 获取对话记录
export function getChatRecord(artifactId: number): Message[] {
  const key = generateChatKey(artifactId);
  const record = chatRecords.get(key);
  return record ? record.messages : [];
}

// 清除对话记录
export function clearChatRecord(artifactId: number) {
  const key = generateChatKey(artifactId);
  chatRecords.delete(key);
}

// 清除所有对话记录
export function clearAllChatRecords() {
  chatRecords.clear();
}