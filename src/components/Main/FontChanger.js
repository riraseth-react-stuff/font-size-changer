import { useContext } from 'react';
import { FontContext } from '../../context/FontContext';

const FontChanger = () => {
  const { fontSize, handleChange, showModal, handleClick, showComponent } =
    useContext(FontContext);

  return (
    showComponent && (
      <div className="font-changer border-10">
        <span className="font-changer__close" onClick={handleClick}>
          &#x274C;
        </span>
        <div className="font-changer__controls">
          <span className="font-changer__text">FONT SIZE: {fontSize}%</span>
          <button
            className="font-changer__button font-changer__button--minus"
            onClick={() => handleChange('decrement')}
          >
            -
          </button>
          <button
            className="font-changer__button font-changer__button--plus"
            onClick={() => handleChange('increment')}
          >
            +
          </button>
          {showModal && (
            <div className="font-changer__limit">osiagnięto limit</div>
          )}
        </div>
      </div>
    )
  );
};

export default FontChanger;
