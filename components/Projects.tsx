const projects = [
  {
    title: 'Infra Usage Collector for Nomad',
    description:
      'A monitoring and metrics collection tool for Nomad infrastructure. Collects resource usage data, tracks job performance, and provides insights into cluster utilization for better capacity planning.',
    tech: ['Nomad', 'Python', 'Prometheus', 'Grafana', 'Docker', 'Bash'],
    github: 'https://github.com/kusumaningrat/infra-usage-collector-nomad',
    category: 'Monitoring & Automation',
  },
  {
    title: 'Nomad Deployment Workflow Automation',
    description:
      'Automated deployment workflows for Nomad clusters. Streamlines the deployment process with automated job scheduling, health checks, and rollback capabilities, reducing deployment time and errors.',
    tech: ['Nomad', 'Python', 'Bash', 'CI/CD', 'Docker', 'Automation'],
    github: 'https://github.com/kusumaningrat/Nomad-Deployment-Workflow-Automation',
    category: 'Automation',
  },
  {
    title: 'AWS VPC and EC2 Terraform Automation',
    description:
      'Infrastructure as Code solution for provisioning AWS VPC and EC2 instances using Terraform. Includes networking configuration, security groups, and automated infrastructure deployment with best practices.',
    tech: ['Terraform', 'AWS', 'VPC', 'EC2', 'Cloud Infrastructure', 'IaC'],
    github: 'https://github.com/kusumaningrat/aws-terraform-vpc-and-ec2-automation',
    category: 'Infrastructure',
  },
  {
    title: 'Deploy NestJS on Kubernetes with Helm',
    description:
      'Complete Helm chart for deploying NestJS applications on Kubernetes. Includes service definitions, ingress configuration, resource limits, and production-ready deployment patterns for scalable microservices.',
    tech: ['Kubernetes', 'Helm', 'NestJS', 'Docker', 'CI/CD', 'Microservices'],
    github: 'https://github.com/kusumaningrat/Deploy-NestJS-on-Kubernetes-with-Helm',
    category: 'Orchestration',
  },
  {
    title: 'Kubernetes Automation with Terraform and Ansible',
    description:
      'End-to-end automation for Kubernetes cluster provisioning and configuration management. Uses Terraform for infrastructure provisioning and Ansible for cluster setup, node configuration, and application deployment.',
    tech: ['Kubernetes', 'Terraform', 'Ansible', 'Automation', 'IaC', 'DevOps'],
    github: 'https://github.com/kusumaningrat/Kubernetes-Automation-with-Terraform-and-Ansible',
    category: 'Infrastructure',
  },
  {
    title: 'Doki - Docker Terminal UI',
    description:
      'A lightweight and interactive terminal UI (TUI) for managing Docker containers, images, volumes, and networks. Built with Go and tview, providing an intuitive command-line interface with real-time status updates and streamlined Docker workflows.',
    tech: ['Go', 'Docker', 'TUI', 'Terminal UI', 'CLI', 'Container Management'],
    github: 'https://github.com/kusumaningrat/doki',
    category: 'Tools & Utilities',
  },
]

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary">$</span>{' '}
            <span className="text-foreground">ls -la projects/</span>
          </h2>
          <p className="text-foreground/60 font-mono">
            {'//'} Real-world infrastructure projects and solutions
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="terminal-border p-6 bg-muted/50 hover:border-primary/40 transition-all flex flex-col group"
            >
              <div className="mb-3">
                <span className="inline-block px-2 py-1 text-xs font-mono bg-primary/20 text-primary rounded mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-mono font-bold text-primary mb-3">
                  {project.title}
                </h3>
              </div>
              <p className="text-sm text-foreground/80 mb-4 flex-grow font-mono">
                {project.description}
              </p>
              <div className="mb-4">
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="text-xs font-mono text-foreground/60 bg-border px-2 py-1 rounded"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-mono text-primary hover:text-secondary transition-colors group/link"
              >
                <span>View on GitHub</span>
                <svg
                  className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
