import { useRef, useState, useEffect } from "react";
import { RotateCw, Maximize2, ZoomIn, ZoomOut } from "lucide-react";

interface ArtifactModel3DProps {
  modelType: "vase" | "jade" | "painting" | "embroidery" | "inkstone";
  imageSrc: string;
}

export function ArtifactModel3D({ modelType, imageSrc }: ArtifactModel3DProps) {
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  const [lastPosition, setLastPosition] = useState({ x: 0, y: 0 });
  const [autoRotate, setAutoRotate] = useState(true);
  const [scale, setScale] = useState(1);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  // 自动旋转效果
  useEffect(() => {
    if (!autoRotate || isDragging) return;

    const interval = setInterval(() => {
      setRotateY((prev) => (prev + 0.5) % 360);
    }, 30);

    return () => clearInterval(interval);
  }, [autoRotate, isDragging]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setAutoRotate(false);
    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;

    const deltaX = e.clientX - lastPosition.x;
    const deltaY = e.clientY - lastPosition.y;

    setRotateY((prev) => prev + deltaX * 0.5);
    setRotateX((prev) => Math.max(-80, Math.min(80, prev - deltaY * 0.5)));

    setLastPosition({ x: e.clientX, y: e.clientY });
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const delta = e.deltaY > 0 ? -0.1 : 0.1;
    setScale((prev) => Math.max(0.5, Math.min(2, prev + delta)));
  };

  const toggleFullscreen = () => {
    if (!document.fullscreenElement) {
      containerRef.current?.requestFullscreen();
      setIsFullscreen(true);
    } else {
      document.exitFullscreen();
      setIsFullscreen(false);
    }
  };

  const zoomIn = () => {
    setScale((prev) => Math.min(2, prev + 0.2));
  };

  const zoomOut = () => {
    setScale((prev) => Math.max(0.5, prev - 0.2));
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full h-full bg-gradient-to-b from-gray-900 to-gray-800 rounded-xl overflow-hidden select-none"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onWheel={handleWheel}
      style={{ cursor: isDragging ? 'grabbing' : 'grab' }}
    >
      {/* 3D 展示区域 */}
      <div className="w-full h-full flex items-center justify-center perspective-1000">
        <div
          className="relative transition-transform duration-100"
          style={{
            transform: `
              scale(${scale})
              rotateX(${rotateX}deg)
              rotateY(${rotateY}deg)
            `,
            transformStyle: 'preserve-3d',
          }}
        >
          {/* 主要面 - 正面 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: 'translateZ(100px)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-white/20">
              <img
                src={imageSrc}
                alt="文物"
                className="w-full h-full object-contain"
                draggable={false}
              />
            </div>
          </div>

          {/* 背面 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: 'translateZ(-100px) rotateY(180deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-64 h-64 bg-white/10 backdrop-blur-sm rounded-xl shadow-2xl p-4 border border-white/20">
              <img
                src={imageSrc}
                alt="文物"
                className="w-full h-full object-contain transform scale-x-[-1]"
                draggable={false}
              />
            </div>
          </div>

          {/* 左侧面 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: 'translateX(-100px) rotateY(-90deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-64 h-64 bg-gradient-to-r from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10" />
          </div>

          {/* 右侧面 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: 'translateX(100px) rotateY(90deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-64 h-64 bg-gradient-to-l from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10" />
          </div>

          {/* 顶面 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: 'translateY(-100px) rotateX(90deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-64 h-64 bg-gradient-to-b from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10" />
          </div>

          {/* 底面 */}
          <div
            className="absolute inset-0 flex items-center justify-center"
            style={{
              transform: 'translateY(100px) rotateX(-90deg)',
              backfaceVisibility: 'hidden',
            }}
          >
            <div className="w-64 h-64 bg-gradient-to-t from-blue-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl shadow-2xl border border-white/10" />
          </div>
        </div>
      </div>

      {/* 光效 */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-0 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"
          style={{
            transform: `translateY(${rotateX * 2}px) translateX(${rotateY}px)`,
          }}
        />
        <div
          className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"
          style={{
            transform: `translateY(-${rotateX * 2}px) translateX(-${rotateY}px)`,
          }}
        />
      </div>

      {/* 控制按钮 */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full z-10">
        <button
          onClick={() => setAutoRotate(!autoRotate)}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          title={autoRotate ? "停止旋转" : "自动旋转"}
        >
          <RotateCw
            className={`w-5 h-5 text-white ${autoRotate ? "animate-spin" : ""}`}
            style={{ animationDuration: "3s" }}
          />
        </button>
        <button
          onClick={zoomOut}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          title="缩小"
        >
          <ZoomOut className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={zoomIn}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          title="放大"
        >
          <ZoomIn className="w-5 h-5 text-white" />
        </button>
        <button
          onClick={toggleFullscreen}
          className="p-2 bg-white/10 hover:bg-white/20 rounded-full transition-colors"
          title="全屏"
        >
          <Maximize2 className="w-5 h-5 text-white" />
        </button>
      </div>

      {/* 提示文字 */}
      <div className="absolute top-4 left-1/2 transform -translate-x-1/2 bg-black/50 backdrop-blur-sm px-4 py-2 rounded-full z-10">
        <p className="text-white text-sm">🖱️ 拖动旋转 · 滚轮缩放</p>
      </div>

      {/* 信息显示 */}
      <div className="absolute top-4 right-4 bg-black/50 backdrop-blur-sm px-3 py-1.5 rounded-full z-10">
        <p className="text-white text-xs">
          缩放: {Math.round(scale * 100)}%
        </p>
      </div>
    </div>
  );
}
