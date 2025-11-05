function CTA() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-gray-900 to-gray-800 relative overflow-hidden">
      <div className="max-w-4xl mx-auto text-center relative z-10">
        <h2 className="text-4xl sm:text-5xl font-extrabold text-white mb-6">
          Ready to Transform Your Future?
        </h2>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Join thousands of learners who are building AI skills that matter.
          Start your journey today—no credit card required.
        </p>
        <button className="brutal-card-hover bg-secondary-400 text-gray-900 px-10 py-5 rounded-xl font-bold text-xl flex items-center justify-center gap-3 mx-auto">
          <span className="material-icons text-2xl">rocket_launch</span>
          Start Learning Now
        </button>
        <p className="text-sm text-gray-400 mt-6">
          Free access to Week 1 content • No credit card required
        </p>
      </div>

      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 left-10 w-32 h-32 bg-primary-500 rounded-full opacity-10 blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-40 h-40 bg-accent-500 rounded-full opacity-10 blur-2xl"></div>
      </div>
    </section>
  );
}

export default CTA;
