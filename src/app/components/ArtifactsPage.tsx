import { Link } from "react-router";
import { artifacts } from "../data/artifacts";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { useLanguage } from "../contexts/LanguageContext";

export function ArtifactsPage() {
  const { t } = useLanguage();
  return (
    <div className="min-h-full bg-gray-50">
      {/* 页面标题 */}
      <div className="bg-white border-b border-gray-200 p-6">
        <h1 className="text-2xl">{t('精品文物')}</h1>
        <p className="text-sm text-gray-600 mt-1">{t('共收录 {count} 件珍贵文物', { count: artifacts.length })}</p>
      </div>

      {/* 文物列表 */}
      <div className="p-4 space-y-4">
        {artifacts.map((artifact) => (
          <Link
            key={artifact.id}
            to={`/artifacts/${artifact.id}`}
            className="block bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
          >
            <div className="flex gap-4">
              <div className="w-32 h-32 flex-shrink-0">
                <ImageWithFallback
                  src={artifact.image}
                  alt={artifact.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 py-3 pr-4">
                <h3 className="text-lg mb-1">{t(artifact.name)}</h3>
                <p className="text-sm text-gray-600 mb-2">
                  {t(artifact.dynasty)} · {t(artifact.year)}
                </p>
                <p className="text-sm text-gray-700 line-clamp-2">
                  {t(artifact.description)}
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
