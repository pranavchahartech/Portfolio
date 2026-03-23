import React, { useEffect, useState, useRef } from 'react';
import './CursorTrail.css';

const CursorTrail = () => {
  const trailCount = 12; 
  const [mousePos, setMousePos] = useState({ x: -100, y: -100 }); // start offscreen
  const trailRef = useRef(Array.from({ length: trailCount }, () => ({ x: -100, y: -100 })));
  const elementsRef = useRef([]);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    let animationFrameId;

    const renderTrail = () => {
      let nextX = mousePos.x;
      let nextY = mousePos.y;

      trailRef.current.forEach((dot, index) => {
        // Interpolation
        dot.x += (nextX - dot.x) * 0.4;
        dot.y += (nextY - dot.y) * 0.4;

        if (elementsRef.current[index]) {
          const scale = (trailCount - index) / trailCount;
          elementsRef.current[index].style.transform = `translate(${dot.x}px, ${dot.y}px) scale(${scale})`;
        }

        // The next dot follows the current dot smoothly
        nextX = dot.x;
        nextY = dot.y;
      });

      animationFrameId = requestAnimationFrame(renderTrail);
    };

    renderTrail();

    return () => cancelAnimationFrame(animationFrameId);
  }, [mousePos]);

  return (
    <div className="cursor-trail-container">
      {Array.from({ length: trailCount }).map((_, index) => (
        <div
          key={index}
          ref={(el) => (elementsRef.current[index] = el)}
          className="cursor-trail-dot"
        />
      ))}
    </div>
  );
};

export default CursorTrail;
