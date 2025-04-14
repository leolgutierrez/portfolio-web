"use client";

export default function Software() {
  return (
    <section id="software" className="w-full py-20 px-6 sm:px-12 bg-[#201c24]">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8 text-gray-800">
          Software que uso
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {[
            { name: "VS Code", icon: "🧑‍💻" },
            { name: "Figma", icon: "🎨" },
            { name: "Git", icon: "🔧" },
            { name: "Photoshop", icon: "🖌️" },
            { name: "Notion", icon: "📝" },
            { name: "Postman", icon: "📮" },
          ].map((tool) => (
            <div
              key={tool.name}
              className="flex flex-col items-center justify-center bg-white shadow rounded-xl p-4 hover:scale-105 transition"
            >
              <div className="text-4xl mb-2">{tool.icon}</div>
              <p className="text-sm font-medium text-gray-700">{tool.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
