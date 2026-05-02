export default function BackgroundOrbs() {
  return (
    <div className="fixed top-0 left-0 w-screen h-screen -z-50 overflow-hidden">
      <div className="absolute top-0 left-0 w-[60vw] h-[60vw] bg-white rounded-full blur-3xl opacity-40 mix-blend-screen animate-float-orb" />
      <div
        className="absolute bottom-0 right-0 w-[50vw] h-[50vw] bg-slate-50 rounded-full blur-3xl opacity-40 mix-blend-screen animate-float-orb"
        style={{ animationDelay: '-5s' }}
      />
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-dark-bg rounded-full blur-3xl opacity-80 mix-blend-screen animate-float-orb"
        style={{ animationDelay: '-10s' }}
      />
    </div>
  )
}
