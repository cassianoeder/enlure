import { Network, Shield, Brain, GraduationCap } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Infraestrutura e Redes",
      description: "Projetos e implementação de redes corporativas com alta disponibilidade e performance.",
    },
    {
      icon: Shield,
      title: "Backup e Segurança",
      description: "Proteção completa dos seus dados com soluções de backup automatizado e cibersegurança.",
    },
    {
      icon: Brain,
      title: "Consultoria em TI",
      description: "Análise estratégica e planejamento tecnológico para otimizar processos da sua empresa.",
    },
    {
      icon: GraduationCap,
      title: "Treinamentos e Cursos Técnicos",
      description: "Capacitação profissional em tecnologia com instrutores especializados e certificados.",
    },
  ];

  return (
    <section id="servicos" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">O que fazemos</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Oferecemos soluções completas em tecnologia para impulsionar o sucesso do seu negócio
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
