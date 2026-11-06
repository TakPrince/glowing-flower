export default function Flower({ id, stemLeavesCount }) {
  return (
    <div className={`flower flower--${id}`}>
      <div className={`flower__leafs flower__leafs--${id}`}>
        <div className="flower__leaf flower__leaf--1" />
        <div className="flower__leaf flower__leaf--2" />
        <div className="flower__leaf flower__leaf--3" />
        <div className="flower__leaf flower__leaf--4" />
        <div className="flower__white-circle" />

        {Array.from({ length: 8 }, (_, i) => (
          <div key={i + 1} className={`flower__light flower__light--${i + 1}`} />
        ))}
      </div>
      <div className="flower__line">
        {Array.from({ length: stemLeavesCount }, (_, i) => (
          <div key={i + 1} className={`flower__line__leaf flower__line__leaf--${i + 1}`} />
        ))}
      </div>
    </div>
  );
}
