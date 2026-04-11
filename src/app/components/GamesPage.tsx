import { Link } from "react-router";
import { Puzzle, HelpCircle } from "lucide-react";
import { useLanguage } from "../contexts/LanguageContext";

export function GamesPage() {
  const { t } = useLanguage();
  const games = [
    {
      id: "puzzle",
      name: "文物拼图",
      description: "将打乱的文物图片拼回完整",
      icon: Puzzle,
      color: "from-blue-500 to-blue-600",
      path: "/games/puzzle",
    },
    {
      id: "guess",
      name: "猜猜文物",
      description: "根据线索猜测文物名称",
      icon: HelpCircle,
      color: "from-green-500 to-green-600",
      path: "/games/guess",
    },
  ];

  return (
    <div className="min-h-full bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b border-gray-200 p-6">
        <h1 className="text-2xl">{t('互动游戏')}</h1>
        <p className="text-sm text-gray-600 mt-1">{t('在游戏中学习吴文化知识')}</p>
      </div>

      {/* 游戏列表 */}
      <div className="p-6 space-y-4">
        {games.map((game) => {
          const Icon = game.icon;
          return (
            <Link
              key={game.id}
              to={game.path}
              className={`block bg-gradient-to-br ${game.color} text-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow`}
            >
              <div className="flex items-start gap-4">
                <div className="w-16 h-16 bg-white/20 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Icon className="w-8 h-8" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl mb-2">{t(game.name)}</h3>
                <p className="text-sm opacity-90">{t(game.description)}</p>
                </div>
              </div>
            </Link>
          );
        })}
      </div>

      {/* 提示信息 */}
      <div className="px-6 pb-6">
        <div className="bg-amber-50 border border-amber-200 rounded-xl p-4">
          <p className="text-sm text-amber-800">
            {t('💡 提示：通过游戏可以更好地记住文物的特征和历史背景哦！')}
          </p>
        </div>
      </div>
    </div>
  );
}