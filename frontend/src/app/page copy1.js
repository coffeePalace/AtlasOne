export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-slate-100 via-gray-100 to-slate-200 text-gray-800 flex flex-col items-center justify-center px-6">

      <h1 className="text-5xl font-semibold tracking-wide mb-2">
        ATLAS ONE
      </h1>

      <div className="mb-6 text-center">
        <p className="text-lg text-gray-600 italic">
          मौन चौकस
        </p>
        <p className="text-sm text-gray-500">
          (Silent and Secure)
        </p>
      </div>

      <p className="text-center max-w-xl text-gray-600 mb-10 leading-relaxed">
        Managed IT services.<br />
        We ensure your tech & IT systems run reliably—every single day, without disruption.
      </p>

      <button className="px-6 py-3 bg-gray-800 text-white rounded-lg hover:bg-gray-700 transition shadow-sm">
        Enter Command Center
      </button>

    </main>
  );
}