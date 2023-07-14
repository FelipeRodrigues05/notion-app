import Editor from "./components/Editor";

export default function App() {
  return (
    <>
      <div className="min-h-screen text-zinc-900 bg-gradient-to-l from-slate-900 via-purple-900 to-slate-900 p-8">
        <div className="bg-zinc-800 w-[1200px] mx-auto rounded-xl min-h-[800px] shadow-sm border-black/20 overflow-hidden grid grid-cols-[16rem_1fr]">
          <aside className="bg-zinc-950 border-r p-4 border-zinc-900">
            <div className="flex gap-2 group flex-row">
              <button className="w-4 h-4 bg-zinc-500 group-hover:bg-red-500 rounded-full" />
              <button className="w-4 h-4 bg-zinc-500 group-hover:bg-yellow-500 rounded-full" />
              <button className="w-4 h-4 bg-zinc-500 group-hover:bg-green-500 rounded-full" />
            </div>
          </aside>
          <main className="p-2">
            <Editor />
          </main>
        </div>
      </div>
    </>
  );
}
