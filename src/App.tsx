import WebEditor from "./components/WebEditor";

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-gradient-to-l from-slate-900 via-purple-900 to-slate-900 text-zinc-600 dark:text-zinc-900">
        <div className="max-w-[75rem] max-h-[50rem] mx-auto rounded-xl shadow-sm border-black/20 overflow-hidden grid grid-cols-[8rem_1fr] md:grid-cols-[16rem_1fr] sm:grid-cols-[8rem_1fr] bg-zinc-300 dark:bg-zinc-800">
          <aside className="border-r p-4 bg-zinc-400 border-zinc-400 dark:border-zinc-900 dark:bg-zinc-950">
            <div className="flex gap-2 group flex-row">
              <button className="w-4 h-4 bg-zinc-200 dark:bg-zinc-500 group-hover:bg-red-500 rounded-full" />
              <button className="w-4 h-4 bg-zinc-200 dark:bg-zinc-500 group-hover:bg-yellow-500 rounded-full" />
              <button className="w-4 h-4 bg-zinc-200 dark:bg-zinc-500 group-hover:bg-green-500 rounded-full" />
            </div>
          </aside>
          <main className="p-2 max-h-screen min-h-full overflow-y-auto scrollbar-thin scrollbar-track-zinc-300 scrollbar-thumb-zinc-400 dark:scrollbar-track-zinc-800 dark:scrollbar-thumb-zinc-600">
            <WebEditor />
          </main>
        </div>
      </div>
    </>
  );
}
