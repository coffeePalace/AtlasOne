export default function GridBackground() {
  const rows = 20;
  const cols = 20;

  return (
    <div
      className="fixed inset-0 -z-10 pointer-events-none opacity-20"
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(20, 1fr)",
      }}
    >
      {Array.from({ length: rows * cols }).map((_, i) => {
        const row = Math.floor(i / cols) + 1;
        const col = (i % cols) + 1;

        return (
          <div
            key={i}
            className="border border-gray-300 text-[10px] text-gray-400 flex items-center justify-center"
          >
            {row},{col}
          </div>
        );
      })}
    </div>
  );
}