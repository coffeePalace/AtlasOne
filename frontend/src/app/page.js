import GridBackground from "../components/GridBackground";

export default function Home() {
  return (
    <main className="min-h-[200vh] text-black px-6">
      <GridBackground />

  {/* rest of your code */}

      {/* Header */}
      <header className="w-full py-6 bg-white">
        <h1 className="text-lg font-bold tracking-wide">
          ATLAS ONE
        </h1>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center text-center pt-16 pb-16 bg-[#f9fafb]">

        <div className="mb-8">
          <p className="text-xl italic font-medium">
            मौन चौकस
          </p>
          <p className="text-sm italic opacity-60 mt-1">
            (Silent and Secure)
          </p>
        </div>

        <p className="max-w-xl text-base leading-relaxed opacity-80">
          <span className="font-semibold">Managed IT services.</span><br /><br />
          We ensure your systems operate with <span className="italic">precision</span>, 
          <span className="font-semibold"> reliability</span>, and 
          <span className="italic"> uninterrupted continuity</span>—every single day.
        </p>

      </section>

      {/* Services Section */}
      <section className="w-full max-w-5xl mx-auto py-32 bg-[#f1f5f9] rounded-xl mt-10">
        
        <h2 className="text-3xl font-bold mb-10 text-center">
          Services
        </h2>

        <div className="space-y-12 text-center opacity-70">
          <p className="italic">Service modules will be deployed here.</p>
        </div>

      </section>

      {/* Extra Section (for testing layout) */}
      <section className="w-full max-w-5xl mx-auto py-32 bg-[#fef3c7] rounded-xl mt-10 text-center">
        <p className="italic opacity-60">Future section (e.g., Clients / Dashboard)</p>
      </section>

    </main>
  );
}