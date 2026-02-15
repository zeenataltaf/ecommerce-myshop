export default function AnimatedBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute w-150 h-150 bg-purple-300 rounded-full blur-3xl opacity-30 animate-pulse -top-25 -left-25" />
      <div className="absolute w-125 h-125 bg-blue-300 rounded-full blur-3xl opacity-30 animate-pulse -bottom-30 -right-30" />
    </div>
  );
}
