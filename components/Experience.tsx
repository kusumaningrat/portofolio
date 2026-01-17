const experiences = [
  {
    company: 'Glynac AI',
    role: 'DevOps Engineer',
    period: '2025 August - Present',
    achievements: [
      'Architected and deployed scalable infrastructure for AI/ML workloads using Nomad and Docker, supporting high-throughput model inference',
      'Designed and implemented CI/CD pipelines for 30+ microservices using GitHub Actions, enabling rapid deployment of ML models and APIs',
      'Built comprehensive observability stack with Prometheus, Grafana, and Loki for real-time monitoring of AI services, model performance, and infrastructure metrics',
      'Optimized container orchestration and resource allocation for GPU-intensive workloads, improving model inference latency by 40%',
      'Developed automation scripts using Python to streamline ML model deployment workflows and reduce manual intervention',
      'Implemented infrastructure-as-code practices with Terraform to manage multi-cloud AI infrastructure across development and production environments',
      'Configured and maintained high-availability Nomad clusters with zero-downtime deployments for critical AI services',
      'Established monitoring and alerting for model serving endpoints, ensuring 99.9% uptime for production AI applications',
    ],
  },
  {
    company: 'Informasi Teknologi Indonesia',
    role: 'DevOps Engineer',
    period: 'July 2024 – July 2025',
    achievements: [
      'Deployed and managed highly available Kubernetes clusters on Tencent Cloud',
      'Implemented Istio for traffic management, service discovery, and security in Kubernetes',
      'Configured Istio Gateways and VirtualServices to optimize API traffic flow and security',
      'Deployed KubeStack monitoring solutions to track Kubernetes cluster health, workloads, and performance',
      'Created Grafana dashboards for real-time monitoring of Pods, Nodes, and Network traffic',
      'Implemented centralized logging and monitoring with Prometheus, Alertmanager, and Loki',
      'Configured Kubernetes Metrics Server, HPA, and KEDA for auto-scaling based on CPU, memory utilization, and event-driven triggers',
      'Designed and optimized Jenkins CI/CD pipelines, reducing deployment time through automation',
    ],
  },
  {
    company: 'Castellum Digital Indonesia',
    role: 'DevOps Engineer',
    period: 'Oct 2023 – Dec 2024',
    achievements: [
      'Designed and implemented District Health Information Software (DHIS2) architecture for both development and production environments',
      'Managed and configured Google Cloud Platform (GCP), including Compute Engine, Cloud Storage, and Container Registry',
      'Configured and optimized Java application performance for DHIS2, improving efficiency and response time',
      'Implemented GitLab for version control and enabled CI/CD pipelines to automate software deployments',
      'Deployed and managed Docker containers for various services including Backend, Frontend, Redis, and DHIS2',
      'Configured Nginx as a reverse proxy and load balancer to efficiently distribute traffic and enhance application availability',
      'Utilized centralized monitoring tools such as Prometheus, Grafana, Alertmanager, and Node Exporter',
      'Created comprehensive technical documentation, including Root Cause Analysis (RCA), technical reports, and wiki pages',
    ],
  },
  {
    company: 'Boer Technology',
    role: 'Cloud Engineer',
    period: 'Oct 2023 – Dec 2024',
    achievements: [
      'Deployed and managed private cloud infrastructure using OpenStack and automated VM provisioning with Terraform and Ansible',
      'Built and maintained highly available Kubernetes clusters on OpenStack using kubeadm',
      'Deployed and managed monitoring solutions with Prometheus, Grafana, and VictoriaMetrics',
      'Integrated Prometheus and VictoriaMetrics for monitoring OpenStack and Kubernetes workloads',
      'Integrated Ceph as the backend storage for OpenStack Nova, enhancing storage reliability and scalability',
      'Utilized Terraform as Infrastructure as Code (IaC) to provision and manage virtual machines on KVM',
      'Monitored and optimized Ceph cluster performance, ensuring low-latency storage operations',
      'Assisted clients with instance migrations, cloud performance optimization, and security hardening',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-mono">
            <span className="text-primary">$</span>{' '}
            <span className="text-foreground">tail -f experience.log</span>
          </h2>
          <p className="text-foreground/60 font-mono">
            {'//'} Professional journey and impact
          </p>
        </div>
        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-primary/30 transform md:-translate-x-1/2"></div>

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className={`relative flex items-start ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                  }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-primary rounded-full transform -translate-x-1/2 border-4 border-background"></div>

                {/* Content */}
                <div
                  className={`ml-12 md:ml-0 md:w-[calc(50%-2rem)] ${index % 2 === 0 ? 'md:mr-auto md:pr-8' : 'md:ml-auto md:pl-8'
                    }`}
                >
                  <div className="terminal-border p-6 bg-muted/50 hover:border-primary/40 transition-all">
                    <div className="mb-3">
                      <h3 className="text-xl font-mono font-bold text-primary mb-1">
                        {exp.role}
                      </h3>
                      <p className="text-foreground/80 font-mono text-sm">
                        {exp.company} <span className="text-primary/60">|</span>{' '}
                        <span className="text-foreground/60">{exp.period}</span>
                      </p>
                    </div>
                    <ul className="space-y-2 mt-4">
                      {exp.achievements.map((achievement, achIndex) => (
                        <li
                          key={achIndex}
                          className="text-sm text-foreground/80 font-mono flex items-start"
                        >
                          <span className="text-primary mr-2 mt-1">▸</span>
                          <span>{achievement}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
