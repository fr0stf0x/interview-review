import React, { useRef, useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

function Portal(props) {
  const rootElement = useRef(document.querySelector(props.to));
  const element = useRef(document.createElement(props.tag));

  useEffect(() => {
    element.current.className = props.className || '';

    rootElement.current.appendChild(element.current);

    return () => {
      rootElement.current.removeChild(element.current);
    };
  }, [props.className]);

  return ReactDOM.createPortal(props.children, element.current);
}

const getDefaultSize = (props) => Math.max(
  props.minSize, Math.min(props.defaultSize, props.maxSize),
);

const Drawer = ({
  isOpen, toggle, className = '', placement, zIndex = 1000, children, tag = 'div', destroyOnClose,
  minSize = 300,
  maxSize = 1000,
  header,
  defaultSize = 350,
}) => {
  const [size, setSize] = useState(getDefaultSize({ minSize, maxSize, defaultSize }));

  const getContainerStyle = () => {
    if (['top', 'bottom'].includes(placement)) {
      return {
        height: size,
      };
    }

    return {
      width: size,
    };
  };

  function resize(event) {
    const browserWidth = window.innerWidth;
    const browserHeight = window.innerHeight;

    switch (placement) {
      case 'top':
        if (minSize <= event.clientY && event.clientY <= maxSize) {
          setSize(event.clientY);
        }
        break;
      case 'right':
        if (minSize <= (browserWidth - event.clientX)
        && (browserWidth - event.clientX) <= maxSize) {
          setSize(browserWidth - event.clientX);
        }
        break;
      case 'bottom':
        if (minSize <= (browserHeight - event.clientY)
         && (browserHeight - event.clientY) <= maxSize) {
          setSize((browserHeight - event.clientY));
        }
        break;
      case 'left':
        if (minSize <= event.clientX && event.clientX <= maxSize) {
          setSize(event.clientX);
        }
        break;
    }
  }

  function stopResize() {
    window.removeEventListener('mousemove', resize);
    window.removeEventListener('mouseup', stopResize);
  }

  function onMouseDownResize() {
    window.addEventListener('mouseup', stopResize);
    window.addEventListener('mousemove', resize);
  }

  const renderBody = () => {
    if (destroyOnClose) {
      return isOpen && children;
    }

    return children;
  };

  return (
    <Portal to="body" tag={tag}>
      <div
        className={`drawer ${placement} ${isOpen ? 'open' : ''}`}
        style={{ zIndex }}
      >
        <div className={'mask'} onClick={toggle}></div>
        <div
          className={`wrapper ${className}`}
          style={getContainerStyle()}
        >
          <div className="content">
            <button className="absolute top-0 right-0" onClick={toggle}>
              <i className="fas fa-window-close" />
            </button>
            <div className={'resize'}>
              <i
                className={'fas fa-arrows-alt-h'}
                onMouseDown={onMouseDownResize}
              />
            </div>
            {header && (
              <div className='drawer-header relative'>
                {header}
              </div>
            )}
            <div className='drawer-body'>
              {renderBody()}
            </div>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default Drawer;
