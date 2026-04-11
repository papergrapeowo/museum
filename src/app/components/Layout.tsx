import { Outlet, Link, useLocation } from "react-router";
import { Home, Image, MessageCircle, Gamepad2, Globe } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function Layout() {
  const location = useLocation();

  const { language, setLanguage, t } = useLanguage();

  const navItems = [
    { path: "/", icon: Home, label: t('首页') },
    { path: "/artifacts", icon: Image, label: t('文物') },
    { path: "/chat", icon: MessageCircle, label: t('对话') },
    { path: "/games", icon: Gamepad2, label: t('游戏') },
  ];

  const isActive = (path: string) => {
    if (path === "/") {
      return location.pathname === "/";
    }
    return location.pathname.startsWith(path);
  };

  return (
    <div className="flex flex-col h-screen max-w-md mx-auto bg-gray-50 relative">
      {/* 主内容区域 */}
      <main className="flex-1 overflow-auto pb-16">
        <Outlet />
      </main>

      {/* 语言切换按钮 */}
      <button
        onClick={() => setLanguage(language === 'zh' ? 'en' : 'zh')}
        className="fixed right-140 bottom-40 z-20 bg-white rounded-full p-3 shadow-lg flex items-center justify-center border border-gray-200 hover:bg-gray-50 transition-colors"
        aria-label="切换语言"
      >
        <Globe className="w-5 h-5 text-blue-600" />
        <span className="ml-2 text-sm font-medium text-blue-600">
          {language === 'zh' ? 'EN' : '中文'}
        </span>
      </button>

      {/* 底部导航栏 */}
      <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 max-w-md mx-auto">
        <div className="flex justify-around items-center h-16">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center justify-center flex-1 h-full transition-colors ${
                  active ? "text-blue-600" : "text-gray-600"
                }`}
              >
                <Icon className="w-6 h-6 mb-1" />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>
    </div>
  );
}
