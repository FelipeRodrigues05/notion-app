import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import { useEffect, useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BiCog, BiDesktop } from "react-icons/bi";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";
import WebEditor from "./components/WebEditor";

export default function App() {
  const [showModal, setShowModal] = useState(false);
  const element = document.documentElement;
  const darkQuery = window.matchMedia("(prefers-color-scheme: dark)");
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "system"
  );

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
    <>
      <div className="min-h-screen lg:pt-8 bg-gradient-to-r from-purple-900 to-zinc-950">
        <div className="max-w-[75rem] max-h-[50rem] mx-auto rounded-xl shadow-sm border-black/20 overflow-hidden grid grid-cols-[8rem_1fr] md:grid-cols-[16rem_1fr] sm:grid-cols-[8rem_1fr] bg-zinc-300 dark:bg-zinc-800">
          <aside className="flex flex-col p-4 border-r bg-zinc-400 border-zinc-400 dark:border-zinc-900 dark:bg-zinc-950">
            <div className="flex gap-2 group flex-row mb-[44rem]">
              <button className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500 group-hover:bg-red-500" />
              <button className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500 group-hover:bg-yellow-500" />
              <button className="w-4 h-4 rounded-full bg-zinc-200 dark:bg-zinc-500 group-hover:bg-green-500" />
            </div>
            <button
              className="pl-2 outline-none"
              onClick={() => setShowModal(true)}
            >
              <BiCog className="w-8 h-8 text-zinc-200 hover:text-zinc-300 dark:text-zinc-500 dark:hover:text-zinc-300 active:text-zinc-100" />
            </button>
          </aside>
          <main className="max-h-screen min-h-screen p-2 overflow-y-auto scrollbar-thin scrollbar-track-zinc-300 scrollbar-thumb-zinc-400 dark:scrollbar-track-zinc-800 dark:scrollbar-thumb-zinc-600">
            <WebEditor />
          </main>
        </div>
      </div>

      <Modal open={showModal} onClose={() => setShowModal(!showModal)}>
        <Box className="absolute top-[20%] left-[35%] bg-zinc-400 dark:bg-zinc-700 p-10 rounded-lg outline-none lg:w-[45rem] lg:h-[20rem]">
          <div id="Modal_Header" className="flex flex-row justify-between">
            <p className="items-start text-xl text-zinc-200">Configurações</p>
            <button onClick={() => setShowModal(false)}>
              <AiOutlineClose className="items-end w-5 h-5 text-zinc-50 hover:text-red-500 dark:hover:text-red-500" />
            </button>
          </div>

          <hr className="my-3 border border-zinc-500 dark:border-zinc-800" />

          <div id="Modal_Body" className="flex flex-col pl-3">
            <div id="Theme" className="flex flex-row justify-between">
              <p className="items-start justify-center text-zinc-200">Tema</p>
              <div className="items-end pr-6">
                <button
                  className="p-1 text-zinc-100 hover:text-blue-500"
                  onClick={() => setTheme("dark")}
                >
                  <BsFillMoonFill className="w-5 h-5" />
                </button>
                <button
                  className="p-1 text-zinc-100 hover:text-yellow-500"
                  onClick={() => setTheme("light")}
                >
                  <BsFillSunFill className="w-6 h-6" />
                </button>
                <button
                  className="p-1 text-zinc-100 hover:text-cyan-500"
                  onClick={() => setTheme("system")}
                >
                  <BiDesktop className="w-6 h-6" />
                </button>
              </div>
            </div>

            <div id="About" className="mt-36">
              <p>Sobre</p>
            </div>
          </div>
        </Box>
      </Modal>
    </>
  );
}
