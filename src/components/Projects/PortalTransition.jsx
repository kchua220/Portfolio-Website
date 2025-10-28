import { useEffect, useState } from 'react';
import './PortalTransition.css';

const PortalTransition = ({ isActive, onComplete }) => {
  const [rings, setRings] = useState([]);

  useEffect(() => {
    if (isActive) {
      const newRings = Array.from({ length: 15 }, (_, i) => ({
        id: i,
        delay: i * 0.05,
        size: i * 60 + 50,
      }));
      setRings(newRings);
      
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1300);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="portal-transition">
      <div className="portal-container">
        {rings.map((ring) => (
          <div
            key={ring.id}
            className="portal-ring"
            style={{
              width: `${ring.size}px`,
              height: `${ring.size}px`,
              borderColor: `hsl(${230 + ring.id * 10}, 100%, 60%)`,
              animationDelay: `${ring.delay}s`,
              boxShadow: `0 0 20px hsl(${230 + ring.id * 10}, 100%, 60%)`,
            }}
          />
        ))}
        <div className="portal-core" />
      </div>
    </div>
  );
};

export default PortalTransition;