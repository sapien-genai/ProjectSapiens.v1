function Features() {
  const features = [
    {
      icon: 'auto_stories',
      title: 'Structured Learning Paths',
      description: 'Follow curated modules designed by AI experts. Each path builds on the last, ensuring solid foundations.',
      color: 'bg-primary-500',
    },
    {
      icon: 'science',
      title: 'Hands-On Labs',
      description: 'Learn by doing. Every concept comes with practical exercises and real-world projects to cement your understanding.',
      color: 'bg-accent-500',
    },
    {
      icon: 'psychology',
      title: 'Adaptive Learning',
      description: 'AI-powered insights track your progress and adapt to your learning style, keeping you motivated and on track.',
      color: 'bg-secondary-500',
    },
    {
      icon: 'groups',
      title: 'Community Support',
      description: 'Join a vibrant community of learners. Share insights, get help, and celebrate milestones together.',
      color: 'bg-error-500',
    },
  ];

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block brutal-border bg-accent-100 px-4 py-2 rounded-lg mb-6">
            <span className="text-sm font-bold text-accent-900">FEATURES</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-extrabold text-gray-900 mb-4">
            Everything You Need to Succeed
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Project Sapiens combines proven learning science with cutting-edge AI to create the ultimate learning experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="brutal-card-hover rounded-2xl p-6 space-y-4"
            >
              <div className={`w-14 h-14 ${feature.color} rounded-xl flex items-center justify-center brutal-border`}>
                <span className="material-icons text-white text-3xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-bold text-gray-900">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 brutal-card bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 sm:p-12">
          <div className="grid lg:grid-cols-3 gap-8 text-center">
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-primary-600">90</p>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Days to Mastery</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-accent-600">50+</p>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Hands-On Projects</p>
            </div>
            <div className="space-y-2">
              <p className="text-5xl font-extrabold text-secondary-600">24/7</p>
              <p className="text-sm font-semibold text-gray-600 uppercase tracking-wide">Community Access</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;
