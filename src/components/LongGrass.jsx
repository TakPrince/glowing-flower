export default function LongGrass({ id, delays }) {
  return (
    <div className={`long-g long-g--${id}`}>
      {delays.map((d, index) => (
        <div key={index} className="grow-ans" style={{ '--d': d }}>
          <div className={`leaf leaf--${index}`} />
        </div>
      ))}
    </div>
  );
}
