import { Link } from "react-router";
import { Clock, MapPin, Phone } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function HomePage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-full bg-white">
      {/* 博物馆主图 */}
      <div className="relative h-64">
        <ImageWithFallback
          src="https://images.unsplash.com/photo-1712565237021-030e3a216a88?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdXpob3UlMjBtdXNldW0lMjBhcmNoaXRlY3R1cmV8ZW58MXx8fHwxNzc1ODAyMzUwfDA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="苏州博物馆"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
        <div className="absolute bottom-6 left-6 text-white">
          <h1 className="text-3xl mb-2">{t('苏州博物馆')}</h1>
          <p className="text-sm opacity-90">{t('贝聿铭的建筑杰作 · 吴文化的殿堂')}</p>
        </div>
      </div>

      {/* 博物馆介绍 */}
      <div className="p-6">
        <section className="mb-8">
          <h2 className="text-xl mb-4">{t('关于博物馆')}</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('苏州博物馆成立于1960年，位于苏州古城东北街。2006年10月，由世界著名建筑大师贝聿铭设计的苏州博物馆新馆建成开放。新馆建筑融传统与现代于一体，与周边的拙政园、狮子林等古典园林相得益彰，成为"中而新、苏而新"的建筑典范。')}
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            {t('博物馆以吴地历史、吴塔国宝、吴中风雅、吴门书画四大系列为主要陈列内容，馆藏文物4万余件，其中国家一级文物近百件，精品荟萃，充分展示了苏州悠久灿烂的历史文化。')}
          </p>
          <p className="text-gray-700 leading-relaxed">
            {t('贝聿铭先生曾说："苏州博物馆的设计是我在中国最后一个作品，也是我心中最爱的作品。"这座将苏州古典园林的空间意境与现代建筑完美结合的博物馆，已成为苏州的文化新地标。')}
          </p>
        </section>

        {/* 参观信息 */}
        <section className="mb-8">
          <h2 className="text-xl mb-4">{t('参观信息')}</h2>
          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="mb-1">{t('开放时间')}</p>
                <p className="text-sm text-gray-600">{t('周二至周日 9:00-17:00（16:00停止入馆）')}</p>
                <p className="text-sm text-gray-600">{t('周一闭馆（国家法定节假日除外）')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="mb-1">{t('地址')}</p>
                <p className="text-sm text-gray-600">{t('江苏省苏州市姑苏区东北街204号')}</p>
                <p className="text-sm text-gray-500 mt-1">{t('（紧邻拙政园、狮子林）')}</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
              <div>
                <p className="mb-1">{t('咨询电话')}</p>
                <p className="text-sm text-gray-600">{t('0512-67575666')}</p>
              </div>
            </div>
          </div>
        </section>

        {/* 快速入口 */}
        <section>
          <h2 className="text-xl mb-4">{t('快速入口')}</h2>
          <div className="grid grid-cols-2 gap-4">
            <Link
              to="/artifacts"
              className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg mb-2">{t('精品文物')}</h3>
              <p className="text-sm opacity-90">{t('3D观赏珍藏')}</p>
            </Link>
            <Link
              to="/chat"
              className="bg-gradient-to-br from-purple-500 to-purple-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow"
            >
              <h3 className="text-lg mb-2">{t('AI对话')}</h3>
              <p className="text-sm opacity-90">{t('与文物互动')}</p>
            </Link>
            <Link
              to="/games"
              className="bg-gradient-to-br from-orange-500 to-orange-600 text-white p-6 rounded-xl hover:shadow-lg transition-shadow col-span-2"
            >
              <h3 className="text-lg mb-2">{t('互动游戏')}</h3>
              <p className="text-sm opacity-90">{t('趣味学习吴文化')}</p>
            </Link>
          </div>
        </section>
      </div>
    </div>
  );
}