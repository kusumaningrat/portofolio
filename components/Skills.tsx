const skillCategories = [
  {
    title: 'Cloud Platforms',
    icon: '☁️',
    skills: ['AWS', 'Azure', 'GCP', 'DigitalOcean', 'Openstack'],
  },
  {
    title: 'Orchestration',
    icon: '⚙️',
    skills: ['Kubernetes', 'Nomad', 'Docker', 'Helm'],
  },
  {
    title: 'Infrastructure as Code',
    icon: '🏗️',
    skills: ['Terraform', 'Ansible'],
  },
  {
    title: 'Monitoring & Observability',
    icon: '📊',
    skills: ['Prometheus', 'Grafana', 'Loki', 'ELK Stack', 'Prometheus', 'Alertmanager'],
  },
  {
    title: 'CI/CD',
    icon: '🔄',
    skills: ['GitHub Actions', 'GitLab CI', 'Jenkins', 'ArgoCD'],
  },
  {
    title: 'Automation & Scripting',
    icon: '🤖',
    skills: ['Bash', 'Python', 'Go'],
  },
  {
    title: 'Operating Systems',
    icon: '🐧',
    skills: ['Linux', 'Ubuntu', 'RHEL', 'CentOS'],
  },
  {
    title: 'Networking & Security',
    icon: '🔒',
    skills: ['Load Balancers', 'VPN', 'Firewalls', 'SSL/TLS', 'VPC'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary">$</span>{' '}
            <span className="text-foreground">cat skills.txt</span>
          </h2>
          <p className="text-foreground/60 font-mono">
            {'//'} Technical expertise and tools in my toolkit
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="terminal-border p-6 bg-muted/50 hover:border-primary/40 transition-all group"
            >
              <div className="mb-4 text-2xl">{category.icon}</div>
              <h3 className="text-lg font-mono font-semibold text-primary mb-4">
                {category.title}
              </h3>
              <ul className="space-y-2">
                {category.skills.map((skill, skillIndex) => (
                  <li
                    key={skillIndex}
                    className="text-sm font-mono text-foreground/80 group-hover:text-foreground transition-colors"
                  >
                    <span className="text-primary/60">-</span> {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
