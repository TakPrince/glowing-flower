export default function GrowingGrass({ id }) {
  return (
    <div className="growing-grass">
      <div className={`flower__grass flower__grass--${id}`}>
        <div className="flower__grass--top" />
        <div className="flower__grass--bottom" />
        {Array.from({ length: 8 }, (_, i) => (
          <div key={i + 1} className={`flower__grass__leaf flower__grass__leaf--${i + 1}`} />
        ))}
        <div className="flower__grass__overlay" />
      </div>
    </div>
  );
}
