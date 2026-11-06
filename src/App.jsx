import { useEffect } from 'react';
import Flower from './components/Flower';
import GrowingGrass from './components/GrowingGrass';
import LongGrass from './components/LongGrass';

const longGrassConfigs = [
  { id: 0, delays: ['3s', '2.2s', '3.4s', '3.6s'] },
  { id: 1, delays: ['3.6s', '3.8s', '4s', '4.2s'] },
  { id: 2, delays: ['4s', '4.2s', '4.4s', '4.6s'] },
  { id: 3, delays: ['4s', '4.2s', '3s', '3.6s'] },
  { id: 4, delays: ['4s', '4.2s', '3s', '3.6s'] },
  { id: 5, delays: ['4s', '4.2s', '3s', '3.6s'] },
  { id: 6, delays: ['4.2s', '4.4s', '4.6s', '4.8s'] },
  { id: 7, delays: ['3s', '3.2s', '3.5s', '3.6s'] },
];

export default function App() {
  useEffect(() => {
    document.body.classList.add('not-loaded');
    const timer = setTimeout(() => {
      document.body.classList.remove('not-loaded');
    }, 1000);

    return () => {
      clearTimeout(timer);
      document.body.classList.remove('not-loaded');
    };
  }, []);

  return (
    <>
      <div className="night" />
      <div className="moon" />
      <div className="flowers">
        {/* Main Flowers */}
        <Flower id={1} stemLeavesCount={6} />
        <Flower id={2} stemLeavesCount={4} />
        <Flower id={3} stemLeavesCount={4} />

        {/* Ambient Flora */}
        <div className="grow-ans" style={{ '--d': '1.2s' }}>
          <div className="flower__g-long">
            <div className="flower__g-long__top" />
            <div className="flower__g-long__bottom" />
          </div>
        </div>

        <GrowingGrass id={1} />
        <GrowingGrass id={2} />

        <div className="grow-ans" style={{ '--d': '2.4s' }}>
          <div className="flower__g-right flower__g-right--1">
            <div className="leaf" />
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-right flower__g-right--2">
            <div className="leaf" />
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '2.8s' }}>
          <div className="flower__g-front">
            {Array.from({ length: 8 }, (_, i) => (
              <div
                key={i + 1}
                className={`flower__g-front__leaf-wrapper flower__g-front__leaf-wrapper--${i + 1}`}
              >
                <div className="flower__g-front__leaf" />
              </div>
            ))}
            <div className="flower__g-front__line" />
          </div>
        </div>

        <div className="grow-ans" style={{ '--d': '3.2s' }}>
          <div className="flower__g-fr">
            <div className="leaf" />
            {Array.from({ length: 8 }, (_, i) => (
              <div key={i + 1} className={`flower__g-fr__leaf flower__g-fr__leaf--${i + 1}`} />
            ))}
          </div>
        </div>

        {/* Long Grass Background Elements */}
        {longGrassConfigs.map((cfg) => (
          <LongGrass key={cfg.id} id={cfg.id} delays={cfg.delays} />
        ))}
      </div>
    </>
  );
}
