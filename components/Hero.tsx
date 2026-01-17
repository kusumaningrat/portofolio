export default function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-16"
    >
      <div className="max-w-4xl mx-auto text-center">
        <div className="mb-6">
          <span className="text-primary font-mono text-sm md:text-base">
            {'$>'} whoami
          </span>
        </div>
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6">
          <span className="text-primary font-mono">Cloud & </span>{' '}
          <span className="text-primary font-mono">DevOps</span>{' '}
          <span className="text-foreground">Engineer</span>
        </h1>
        <p className="text-lg md:text-xl text-foreground/80 mb-8 max-w-2xl mx-auto font-mono">
          {'//'} Building scalable infrastructure, automating deployments, and{' '}
          <br className="hidden md:block" />
          maintaining cloud-native systems with{' '}
          <span className="text-primary">precision</span> and{' '}
          <span className="text-secondary">innovation</span>.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-12">
          <a
            href="https://github.com/kusumaningrat"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 bg-primary text-background font-mono font-semibold rounded hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
          >
            <span className="flex items-center gap-2">
              GitHub
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
          <a
            href="https://www.linkedin.com/in/kusumaningrat"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 border-2 border-primary text-primary font-mono font-semibold rounded hover:bg-primary/10 transition-all"
          >
            <span className="flex items-center gap-2">
              LinkedIn
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
          <a
            href="https://medium.com/@kusumaningrat"
            target="_blank"
            rel="noopener noreferrer"
            className="group px-8 py-3 bg-primary text-background font-mono font-semibold rounded hover:bg-primary/90 transition-all hover:shadow-lg hover:shadow-primary/50"
          >
            <span className="flex items-center gap-2">
              Medium
              <svg
                className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </span>
          </a>
        </div>
        <div className="mt-16 text-foreground/40 font-mono text-xs md:text-sm">
          <span className="animate-pulse-slow">■</span> Infrastructure as Code{' '}
          <span className="animate-pulse-slow">■</span> CI/CD Pipelines{' '}
          <span className="animate-pulse-slow">■</span> Observability{' '}
          <span className="animate-pulse-slow">■</span> Cloud Native
        </div>
      </div>
    </section>
  )
}
