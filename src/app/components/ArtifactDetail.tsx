import { useParams, useNavigate, Link } from "react-router";
import { ArrowLeft, MessageCircle, Box } from "lucide-react";
import { artifacts } from "../data/artifacts";
import { ImageWithFallback } from "./figma/ImageWithFallback";
import { ArtifactModel3D } from "./ArtifactModel3D";
import { useState } from "react";

export function ArtifactDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const artifact = artifacts.find((a) => a.id === Number(id));
  const [viewMode, setViewMode] = useState<"image" | "3d">("image");

  if (!artifact) {
    return (
      <div className="flex flex-col items-center justify-center h-full">
        <p className="text-gray-600 mb-4">文物不存在</p>
        <button
          onClick={() => navigate("/artifacts")}
          className="text-blue-600"
        >
          返回文物列表
        </button>
      </div>
    );
  }

  return (
    <div className="min-h-full bg-white">
      {/* 顶部导航 */}
      <div className="sticky top-0 bg-white border-b border-gray-200 z-10">
        <div className="flex items-center justify-between p-4">
          <button
            onClick={() => navigate("/artifacts")}
            className="flex items-center gap-2 text-gray-700"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>返回</span>
          </button>
          <Link
            to="/chat"
            state={{ artifactId: artifact.id }}
            className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg"
          >
            <MessageCircle className="w-4 h-4" />
            <span>与TA对话</span>
          </Link>
        </div>
      </div>

      {/* 文物展示区 */}
      <div className="w-full h-96 bg-gray-100 relative">
        {viewMode === "image" ? (
          <ImageWithFallback
            src={artifact.image}
            alt={artifact.name}
            className="w-full h-full object-contain"
          />
        ) : (
          <ArtifactModel3D modelType={artifact.modelType} imageSrc={artifact.image} />
        )}
        
        {/* 视图切换按钮 */}
        <div className="absolute top-4 right-4 flex gap-2">
          <button
            onClick={() => setViewMode("image")}
            className={`px-4 py-2 rounded-lg transition-colors ${
              viewMode === "image"
                ? "bg-blue-600 text-white"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            📷 图片
          </button>
          <button
            onClick={() => setViewMode("3d")}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              viewMode === "3d"
                ? "bg-blue-600 text-white"
                : "bg-white/90 text-gray-700 hover:bg-white"
            }`}
          >
            <Box className="w-4 h-4" />
            3D
          </button>
        </div>
      </div>

      {/* 文物信息 */}
      <div className="p-6">
        <h1 className="text-2xl mb-4">{artifact.name}</h1>
        
        <div className="bg-gray-50 rounded-lg p-4 mb-6">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <p className="text-sm text-gray-600 mb-1">朝代</p>
              <p>{artifact.dynasty}</p>
            </div>
            <div>
              <p className="text-sm text-gray-600 mb-1">年代</p>
              <p className="text-sm">{artifact.year}</p>
            </div>
          </div>
        </div>

        <section className="mb-6">
          <h2 className="text-lg mb-3">文物介绍</h2>
          <p className="text-gray-700 leading-relaxed">{artifact.description}</p>
        </section>

        <section>
          <h2 className="text-lg mb-3">文物自述</h2>
          <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded">
            <p className="text-gray-700 leading-relaxed italic">
              "{artifact.story}"
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}