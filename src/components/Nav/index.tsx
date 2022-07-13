import { h } from "preact"
import { useState } from "preact/hooks"

const Nav = () => {
  const [open, setOpen] = useState(false)
  return (
    <div class="flex justify-between align-middle text-white xl:p-16 p-8">
      <a href="/" class="font-josefin-sans text-4xl font-bold">
        <span class="text-white">MK</span>
      </a>
      <button onClick={() => setOpen((val) => !val)} class="xl:hidden block">
        <img src="/assets/menu.svg" class="h-10  w-10 -translate-y-1" />
      </button>
      <nav
        class={`xl:flex align-middle gap-6 font-josefin-sans text-2xl font-bold ${
          open ? "flex" : "hidden"
        }`}
      >
        <a href="/">
          <span class="text-white hover:text-gray-300">Home</span>
        </a>
        <a href="/projects">
          <span class="text-white hover:text-gray-300">Projekty</span>
        </a>
        <a href="/about">
          <span class="text-white hover:text-gray-300">O mnie</span>
        </a>
      </nav>
    </div>
  )
}

export default Nav
