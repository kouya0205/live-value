export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <h1 className="relative text-5xl uppercase font-bold text-gray-300 tracking-widest">
        <span className="absolute top-0 left-0 w-0 h-full overflow-hidden text-black animate-loading">
          作成中 ...
        </span>
        作成中...
      </h1>
    </div>
  );
}
