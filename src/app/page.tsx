import Software from "@/components/software"
import Header from "@/components/header";

export default function Home() {
  return (
    <>
      <Header />
      <main className="min-h-screen">
        <Software />
      </main>
    </>
  );
}
