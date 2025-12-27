import { useEffect, useState } from 'react';
import './PortalTransition.css';

const PortalTransition = ({ isActive, onComplete }) => {
  const [shards, setShards] = useState([]);

  useEffect(() => {
    if (isActive) {
      // Create visible glass shards
      const newShards = Array.from({ length: 20 }, (_, i) => {
        const angle = (Math.PI * 2 * i) / 20;
        const distance = 400 + Math.random() * 300;
        
        return {
          id: i,
          flyX: Math.cos(angle) * distance,
          flyY: Math.sin(angle) * distance,
          rotate: Math.random() * 360 - 180,
          width: 80 + Math.random() * 60,
          height: 80 + Math.random() * 60,
          delay: i * 0.02,
        };
      });
      setShards(newShards);
      
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 800);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="portal-transition">
      <div className="portal-container">
        {/* Center flash */}
        <div className="flash-center" />
        
        {/* Expanding ring */}
        <div className="shatter-ring" />
        
        {/* Glass shards */}
        {shards.map((shard) => (
          <div
            key={shard.id}
            className="glass-shard"
            style={{
              width: `${shard.width}px`,
              height: `${shard.height}px`,
              left: '50%',
              top: '50%',
              transform: 'translate(-50%, -50%)',
              '--fly-x': `${shard.flyX}px`,
              '--fly-y': `${shard.flyY}px`,
              '--rotate': `${shard.rotate}deg`,
              animationDelay: `${shard.delay}s`,
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default PortalTransition;