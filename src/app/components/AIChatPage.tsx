import { useState, useRef, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { Send, Sparkles, ArrowLeft, MessageSquare, History } from "lucide-react";
import { artifacts } from "../data/artifacts"; 
import { ImageWithFallback } from "./figma/ImageWithFallback";

interface Message {
  id: number;
  role: "user" | "assistant";
  content: string;
}

export function AIChatPage() {
  const location = useLocation();
  const navigate = useNavigate();
  const [selectedId, setSelectedId] = useState<number>(location.state?.artifactId || 1);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // 获取当前选中的文物信息
  const artifact = artifacts.find((a) => a.id === selectedId) || artifacts[0];

  // 深度学习：DeepSeek API 配置 [cite: 35, 38]
  const DEEPSEEK_API_KEY = import.meta.env.VITE_DEEPSEEK_API_KEY;

  // 初始欢迎语
  useEffect(() => {
    if (messages.length === 0) {
      setMessages([
        {
          id: Date.now(),
          role: "assistant",
          content: `(整理了一下衣角) 游客你好，我是${artifact.name}。在这博物馆的橱窗里待久了，甚是寂寞。你是想听听${artifact.dynasty}的故事，还是想了解我的来历？`,
        },
      ]);
    }
  }, [artifact, messages.length]);

  // 自动滚动到底部
  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isTyping) return;

    const userMsg: Message = { id: Date.now(), role: "user", content: input };
    setMessages((prev) => [...prev, userMsg]);
    setInput("");
    setIsTyping(true);

    try {
      // 核心 Prompt 设计：体现 Human-Centric 和 Playful 理念 
      const systemPrompt = `
        你现在是苏州博物馆的文物：${artifact.name}。
        你的背景：来自${artifact.dynasty}，具有${artifact.personality}的性格。
        你的任务：
        1. 以第一人称（“我”、“吾”）与现代游客对话。
        2. 语气要符合身份（比如傲娇、博学或调皮）。
        3. 适当加入苏博特色或江南文化元素。
        4. 回复简短有力，保持趣味性。
      `;

      const response = await fetch("https://api.deepseek.com/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${DEEPSEEK_API_KEY}`
        },
        body: JSON.stringify({
          model: "deepseek-chat",
          messages: [
            { role: "system", content: systemPrompt },
            ...messages.map(m => ({ role: m.role, content: m.content })),
            { role: "user", content: input }
          ],
          temperature: 0.7
        })
      });

      const data = await response.json();
      
      if (data.choices && data.choices[0]) {
        const aiMsg: Message = {
          id: Date.now() + 1,
          role: "assistant",
          content: data.choices[0].message.content
        };
        setMessages((prev) => [...prev, aiMsg]);
      }
    } catch (error) {
      console.error("传音失败:", error);
      setMessages((prev) => [...prev, { 
        id: Date.now() + 1, 
        role: "assistant", 
        content: "哎呀，时空缝隙好像有点不稳，我刚才没听清你在说什么..." 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <div className="flex flex-col h-screen bg-[#F9F9F9] text-[#333]">
      {/* 顶部导航：苏博灰风格 */}
      <div className="bg-white border-b border-gray-100 p-4 sticky top-0 z-10 shadow-sm">
        <div className="flex items-center gap-3">
          <button onClick={() => navigate(-1)} className="p-1 hover:bg-gray-100 rounded-full">
            <ArrowLeft className="w-5 h-5 text-gray-600" />
          </button>
          <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-50 border border-amber-100">
            <ImageWithFallback src={artifact.image} alt={artifact.name} className="w-full h-full object-cover" />
          </div>
          <div className="flex-1">
            <h2 className="font-bold text-sm leading-tight">{artifact.name}</h2>
            <div className="flex items-center gap-1 text-[10px] text-green-500">
              <span className="relative flex h-1.5 w-1.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
              </span>
              灵识觉醒中
            </div>
          </div>
          <select 
            className="text-xs bg-gray-50 border-none rounded-lg p-1 outline-none text-gray-500"
            value={selectedId}
            onChange={(e) => {
              setSelectedId(Number(e.target.value));
              setMessages([]);
            }}
          >
            {artifacts.map(a => <option key={a.id} value={a.id}>{a.name.slice(0,4)}...</option>)}
          </select>
        </div>
      </div>

      {/* 消息区域 */}
      <div className="flex-1 overflow-y-auto p-4 space-y-6">
        <div className="text-center">
          <span className="text-[10px] bg-gray-200/50 text-gray-400 px-3 py-1 rounded-full uppercase tracking-widest">
            跨越千年的对话
          </span>
        </div>

        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === "user" ? "justify-end" : "justify-start"}`}>
            <div className={`flex gap-2 max-w-[85%] ${msg.role === "user" ? "flex-row-reverse" : "flex-row"}`}>
              {msg.role === "assistant" && (
                <div className="w-8 h-8 rounded-full bg-amber-50 flex-shrink-0 border border-amber-100 overflow-hidden">
                   <ImageWithFallback src={artifact.image} alt="avatar" className="w-full h-full object-cover" />
                </div>
              )}
              <div className={`px-4 py-3 rounded-2xl shadow-sm text-sm leading-relaxed ${
                msg.role === "user" 
                ? "bg-[#2F3E46] text-white rounded-tr-none" 
                : "bg-white text-gray-800 rounded-tl-none border border-gray-100"
              }`}>
                {msg.content}
              </div>
            </div>
          </div>
        ))}

        {isTyping && (
          <div className="flex justify-start">
             <div className="bg-white px-4 py-3 rounded-2xl rounded-tl-none shadow-sm border border-gray-100">
               <div className="flex gap-1">
                 <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                 <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                 <div className="w-1.5 h-1.5 bg-amber-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
               </div>
             </div>
          </div>
        )}
        <div ref={messagesEndRef} />
      </div>

      {/* 输入区域：毛玻璃效果 */}
      <div className="p-4 bg-white/80 backdrop-blur-md border-t border-gray-100">
        <div className="flex items-center gap-2 bg-gray-100 rounded-full px-4 py-1 border border-gray-200 focus-within:border-amber-400 transition-colors">
          <Sparkles className="text-amber-500 w-4 h-4" />
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
            placeholder={`向${artifact.name}提问...`}
            className="flex-1 bg-transparent py-3 text-sm outline-none"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`p-2 rounded-full transition-all ${
              input.trim() ? "bg-[#2F3E46] text-white scale-100" : "bg-gray-300 text-gray-500 scale-90"
            }`}
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
        <p className="text-[9px] text-gray-400 text-center mt-2">
          AI 生成内容仅供参考，请以官方历史记载为准
        </p>
      </div>
    </div>
  );
}