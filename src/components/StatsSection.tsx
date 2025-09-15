const StatsSection = () => {
  const stats = [
    {
      number: "1,100+",
      label: "sq ft workspace",
      sublabel: "delivered"
    },
    {
      number: "230+",
      label: "Projects",
      sublabel: "delivered"
    },
    {
      number: "25%",
      label: "Faster",
      sublabel: "than others"
    },
    {
      number: "86%",
      label: "Projects",
      sublabel: "on schedule"
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-brand-red mb-2">
                {stat.number}
              </div>
              <div className="text-foreground font-semibold">
                {stat.label}
              </div>
              <div className="text-muted-foreground text-sm">
                {stat.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;