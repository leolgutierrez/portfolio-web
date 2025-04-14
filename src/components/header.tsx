"use client";
import Image from "next/image";

export default function Header() {
  return (
    <>
      {/* 📱 Mobile Header (top fixed) */}
      <div className="md:hidden fixed top-3 left-2 z-[99999] w-[90vw] max-w-[413px] h-[120px] bg-white/10 backdrop-blur-md rounded-xl p-4 flex items-center justify-between shadow-lg">
        <div className="flex items-center gap-4">
          <a href="#dashboard-container">
            <Image
              src="/static/media/Leo.jpg"
              alt="Leo"
              width={48}
              height={48}
              className="rounded-full"
            />
          </a>
          <div>
            <h2 className="text-lg font-semibold">Leo Lontoya</h2>
            <p className="text-sm text-gray-300">Diseñador Web & UX/UI</p>
          </div>
        </div>
        <nav>
          <ul className="flex gap-3 text-sm text-white">
            <li><a href="#skills">Habilidades</a></li>
            <li><a href="#software">Software</a></li>
          </ul>
        </nav>
      </div>

      {/* 💻 Desktop Sidebar (left fixed) */}
      <div className="hidden md:flex fixed left-3 top-6 z-[99999] w-[280px] h-[600px] max-h-[600px] bg-[#201c24] backdrop-blur-md rounded-xl p-6 flex-col justify-between shadow-lg border border-zinc-700">
        <div className="profile">
          <div className="avatar mb-4">
            <a href="#dashboard-container">
              <Image
                src="/static/media/Leo.jpg"
                alt="Leo profile"
                width={64}
                height={64}
                className="rounded-full"
              />
            </a>
          </div>
          <div className="name mb-6">
            <h2 className="text-xl font-semibold">Leo Lontoya</h2>
            <p className="text-sm text-gray-300">Diseñador Web & UX/UI</p>
          </div>
        </div>
        <nav className="sidebar-nav">
          <ul className="space-y-3 text-white text-base">
            <li><a href="#skills">🛠 Habilidades</a></li>
            <li><a href="#software">💻 Software</a></li>
            <li><a href="#projects">📁 Proyectos</a></li>
            <li><a href="#uxui">🎨 Diseños UX/UI</a></li>
            <li><a href="#education">🎓 Educación</a></li>
            <li><a href="#experience">🧠 Experiencia</a></li>
          </ul>
        </nav>
      </div>
    </>
  );
}
