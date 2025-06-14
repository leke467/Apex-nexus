import { useEffect, useState } from 'react';

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [clicked, setClicked] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const updatePosition = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const handleDown = () => setClicked(true);
    const handleUp = () => setClicked(false);

    const handleMouseOver = (e) => {
      const target = e.target;
      const isLink = 
        target.tagName.toLowerCase() === 'a' || 
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') || 
        target.closest('button') ||
        target.classList.contains('cursor-hover');
        
      setIsHovering(isLink);
    };

    window.addEventListener('mousemove', updatePosition);
    window.addEventListener('mousedown', handleDown);
    window.addEventListener('mouseup', handleUp);
    document.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', updatePosition);
      window.removeEventListener('mousedown', handleDown);
      window.removeEventListener('mouseup', handleUp);
      document.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  const cursorStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
    transform: `scale(${clicked ? 0.8 : isHovering ? 1.5 : 1})`,
  };

  const dotStyle = {
    left: `${position.x}px`,
    top: `${position.y}px`,
  };

  return (
    <>
      <div className="custom-cursor" style={cursorStyle}></div>
      <div className="cursor-dot" style={dotStyle}></div>
    </>
  );
}

export default CustomCursor;