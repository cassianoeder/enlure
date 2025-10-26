import { Shield, Zap, Link2 } from "lucide-react";

const Trust = () => {
  const features = [
    {
      icon: Shield,
      title: "Segurança",
      description: "Proteção de ponta a ponta",
    },
    {
      icon: Zap,
      title: "Performance",
      description: "Alta disponibilidade garantida",
    },
    {
      icon: Link2,
      title: "Integração",
      description: "Soluções sob medida",
    },
  ];

  return (
    <section id="consultoria" className="py-20 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
              Tecnologia acessível para pequenas empresas
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Entendemos os desafios de pequenas e micro empresas. Por isso, oferecemos soluções tecnológicas eficientes, com preços justos e atendimento humanizado para fazer seu negócio crescer com segurança.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {features.map((feature, index) => (
              <div
                key={index}
                className="text-center animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="bg-primary/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                  <feature.icon className="text-primary" size={32} />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Trust;
