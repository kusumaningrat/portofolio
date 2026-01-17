export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm font-mono text-foreground/60 mb-4 md:mb-0">
            © {new Date().getFullYear()} Kusuma Ningrat@2026.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://github.com/kusumaningrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors text-sm font-mono"
            >
              GitHub
            </a>
            <a
              href="https://linkedin.com/in/kusumaningrat"
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-primary transition-colors text-sm font-mono"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
