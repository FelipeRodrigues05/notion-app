import { GearFine } from "@phosphor-icons/react";
import { useEffect, useState } from "react";
import { BsFillMoonFill, BsFillSunFill, BsWindowDesktop } from "react-icons/bs";
import Editor from "./components/Editor";
import { CustomModal } from "./components/Modal";

function App() {
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );
  const [showConfig, setShowConfig] = useState(false);

  useEffect(() => {
    switch (theme) {
      case "dark":
        element.classList.add("dark");
        localStorage.setItem("theme", "dark");
        break;
      case "light":
        element.classList.remove("dark");
        localStorage.setItem("theme", "light");
        break;
      default:
        localStorage.removeItem("theme");
        break;
    }
  }, [theme]);

  function onWindowMatch() {
    if (
      localStorage.theme == "dark" ||
      (!("theme" in localStorage) && darkQuery.matches)
    ) {
      element.classList.add("dark");
    } else {
      element.classList.remove("dark");
    }
  }

  onWindowMatch();
  return (
    <div className="min-h-screen lg:pt-8 bg-gradient-to-tl from-zinc-900 to-zinc-600">
      {/* EDITOR */}
      <div className="max-w-[75rem] max-h-[50rem] mx-auto rounded-xl shadow-sm border-black/20 overflow-hidden grid grid-cols-[8rem_1fr] md:grid-cols-[16rem_1fr] sm:grid-cols-[8rem_1fr] bg-zinc-300 dark:bg-zinc-800">
        <aside className="flex flex-col p-4 border-r bg-zinc-400 border-zinc-400 dark:border-zinc-900 dark:bg-zinc-950">
          <div className="flex gap-2 group flex-row mb-[44rem]">
            <button className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500 group-hover:bg-red-500" />
            <button className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500 group-hover:bg-yellow-500" />
            <button className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500 group-hover:bg-green-500" />
          </div>
          <div className="flex flex-col gap-1.5">
            <button
              className="text-zinc-200 hover:text-zinc-500 dark:text-zinc-500 dark:hover:text-zinc-300 w-12 h-12 flex items-center justify-center rounded-md transition duration-300 ease-in"
              onClick={() => setShowConfig(!showConfig)}
            >
              <GearFine weight="fill" className="w-10 h-10" />
            </button>
          </div>
        </aside>
        <main className="max-h-[50rem] overflow-y-auto scrollbar-thin scrollbar-track-zinc-300 scrollbar-thumb-zinc-400 dark:scrollbar-track-zinc-800 dark:scrollbar-thumb-zinc-700 pt-8">
          <Editor />
        </main>

        <CustomModal.Root
          open={showConfig}
          onCloseFunction={() => setShowConfig(!showConfig)}
        >
          <CustomModal.Header
            title="Settings"
            onCloseFunction={() => setShowConfig(!showConfig)}
          />

          <hr className="my-3 border border-zinc-500 dark:border-zinc-900" />

          <CustomModal.Body>
            <div id="Theme" className="flex flex-row justify-between">
              <p className="items-start justify-center pointer-events-none text-zinc-600 dark:text-zinc-100">
                Tema
              </p>
              <div className="items-end pr-6">
                <button
                  className="p-1 text-zinc-600 dark:text-zinc-100 hover:text-blue-500 dark:hover:text-blue-500"
                  onClick={() => setTheme("dark")}
                >
                  <BsFillMoonFill className="w-5 h-5" />
                </button>
                <button
                  className="p-1 text-zinc-600 dark:text-zinc-100 hover:text-yellow-500 dark:hover:text-yellow-500"
                  onClick={() => setTheme("light")}
                >
                  <BsFillSunFill className="w-6 h-6" />
                </button>
                <button
                  className="p-1 text-zinc-600 dark:text-zinc-100 hover:text-cyan-500 dark:hover:text-cyan-500"
                  onClick={() => setTheme("system")}
                >
                  <BsWindowDesktop className="w-6 h-6" />
                </button>
              </div>
            </div>
          </CustomModal.Body>
        </CustomModal.Root>
      </div>
    </div>
  );
}

export default App;
