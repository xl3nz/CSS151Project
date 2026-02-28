import { useEffect, useRef, useState } from 'react';
import AdminPage from '../components/admin/AdminPage';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;

export default function Admin() {
  const wrapperRef = useRef(null);
  const [scaleX, setScaleX] = useState(1);
  const [scaleY, setScaleY] = useState(1);
  const [viewportHeight, setViewportHeight] = useState(window.innerHeight);

  useEffect(() => {
    if (!wrapperRef.current) return undefined;

    const updateScale = () => {
      const { clientWidth } = wrapperRef.current;
      const rect = wrapperRef.current.getBoundingClientRect();
      const visibleHeight = Math.max(0, window.innerHeight - rect.top);
      if (!clientWidth || !visibleHeight) return;

      setViewportHeight(visibleHeight);
      setScaleX(clientWidth / BASE_WIDTH);
      setScaleY(visibleHeight / BASE_HEIGHT);
    };

    updateScale();
    const resizeObserver = new ResizeObserver(updateScale);
    resizeObserver.observe(wrapperRef.current);
    window.addEventListener('resize', updateScale);

    return () => {
      resizeObserver.disconnect();
      window.removeEventListener('resize', updateScale);
    };
  }, []);

  const safeScaleX = Number.isFinite(scaleX) ? scaleX : 1;
  const safeScaleY = Number.isFinite(scaleY) ? scaleY : 1;

  return (
    <div className="admin-scale-wrapper" ref={wrapperRef} style={{ height: `${viewportHeight}px` }}>
      <div
        className="admin-stage"
        style={{
          width: `${BASE_WIDTH * safeScaleX}px`,
          height: `${BASE_HEIGHT * safeScaleY}px`,
        }}
      >
        <div className="admin-transform-layer" style={{ transform: `scale(${safeScaleX}, ${safeScaleY})` }}>
          <AdminPage />
        </div>
      </div>
    </div>
  );
}
