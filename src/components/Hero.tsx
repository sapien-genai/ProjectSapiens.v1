function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary-50 via-white to-accent-50 py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="inline-block brutal-border bg-secondary-100 px-4 py-2 rounded-lg">
              <span className="text-sm font-bold text-secondary-900">90-DAY CHALLENGE</span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold text-gray-900 leading-tight">
              Master AI in{' '}
              <span className="text-primary-600">90 Days</span>
            </h1>

            <p className="text-xl text-gray-700 leading-relaxed">
              Transform from curious beginner to confident AI practitioner.
              Project Sapiens gives you a structured, hands-on learning path
              designed to build real skills—fast.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <button className="brutal-card-hover bg-primary-500 text-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                <span className="material-icons">rocket_launch</span>
                Start Your Journey
              </button>
              <button className="brutal-card-hover bg-white px-8 py-4 rounded-xl font-bold text-lg flex items-center justify-center gap-2">
                <span className="material-icons">play_circle</span>
                Watch Demo
              </button>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <div className="flex -space-x-2">
                  <div className="w-10 h-10 rounded-full bg-primary-200 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-accent-200 border-2 border-white"></div>
                  <div className="w-10 h-10 rounded-full bg-secondary-200 border-2 border-white"></div>
                </div>
                <p className="text-sm font-semibold text-gray-600">
                  <span className="text-primary-600 font-bold">2,500+</span> learners
                </p>
              </div>
              <div className="h-8 w-px bg-gray-300"></div>
              <div className="flex items-center gap-2">
                <span className="material-icons text-accent-500">verified</span>
                <p className="text-sm font-semibold text-gray-600">
                  <span className="text-accent-600 font-bold">98%</span> completion rate
                </p>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="brutal-card bg-gradient-to-br from-primary-100 to-accent-100 rounded-2xl p-8 space-y-4">
              <div className="space-y-3">
                <div className="brutal-border bg-white rounded-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-accent-500 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white">check_circle</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Week 1-3</p>
                    <p className="text-sm text-gray-600">AI Foundations</p>
                  </div>
                </div>

                <div className="brutal-border bg-white rounded-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-primary-500 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white">code</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Week 4-8</p>
                    <p className="text-sm text-gray-600">Hands-on Projects</p>
                  </div>
                </div>

                <div className="brutal-border bg-white rounded-xl p-4 flex items-center gap-3">
                  <div className="w-12 h-12 bg-secondary-500 rounded-lg flex items-center justify-center">
                    <span className="material-icons text-white">emoji_events</span>
                  </div>
                  <div>
                    <p className="font-bold text-gray-900">Week 9-12</p>
                    <p className="text-sm text-gray-600">Real-World Applications</p>
                  </div>
                </div>
              </div>

              <div className="pt-4">
                <div className="flex items-center justify-between mb-2">
                  <p className="text-sm font-bold text-gray-700">Your Progress</p>
                  <p className="text-sm font-bold text-primary-600">35%</p>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-3 brutal-border">
                  <div className="bg-gradient-to-r from-primary-500 to-accent-500 h-full rounded-full" style={{ width: '35%' }}></div>
                </div>
              </div>
            </div>

            <div className="absolute -top-4 -right-4 w-24 h-24 bg-secondary-400 rounded-full brutal-border opacity-80"></div>
            <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent-400 rounded-full brutal-border opacity-80"></div>
          </div>
        </div>
      </div>

      <div className="absolute top-0 left-0 w-full h-full pointer-events-none overflow-hidden">
        <div className="absolute top-20 left-10 w-20 h-20 bg-primary-200 rounded-lg rotate-12 opacity-30"></div>
        <div className="absolute top-40 right-20 w-16 h-16 bg-accent-200 rounded-lg -rotate-12 opacity-30"></div>
        <div className="absolute bottom-20 left-1/4 w-24 h-24 bg-secondary-200 rounded-lg rotate-45 opacity-30"></div>
      </div>
    </section>
  );
}

export default Hero;
