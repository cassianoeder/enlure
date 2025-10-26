import { Network, Shield, Brain } from "lucide-react";
import ServiceCard from "./ServiceCard";

const Services = () => {
  const services = [
    {
      icon: Network,
      title: "Infraestrutura e Redes",
      description: "Soluções acessíveis de rede para conectar sua equipe com eficiência e segurança, mesmo com orçamento limitado.",
    },
    {
      icon: Shield,
      title: "Backup e Segurança",
      description: "Proteja os dados do seu negócio com backup automatizado e segurança digital de forma simples e acessível.",
    },
    {
      icon: Brain,
      title: "Consultoria em TI",
      description: "Orientação técnica personalizada para pequenas empresas crescerem com tecnologia inteligente e custo-benefício.",
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

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} delay={index * 0.1} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
