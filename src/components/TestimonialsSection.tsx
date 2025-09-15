const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Mitchell",
      company: "Tech Innovations Ltd",
      text: "91 Square Feet transformed our outdated office into a modern, collaborative workspace. The attention to detail and professional approach exceeded our expectations.",
      rating: 5
    },
    {
      name: "David Chen",
      company: "Retail Plus Group",
      text: "The retail fitout for our flagship store was completed on time and within budget. Our sales have increased by 40% since the redesign.",
      rating: 5
    },
    {
      name: "Maria Rodriguez", 
      company: "Financial Services Corp",
      text: "Professional service from start to finish. They understood our corporate requirements and delivered a space that reflects our brand perfectly.",
      rating: 5
    }
  ];

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Read why our <span className="text-brand-red">clients love us</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-card border rounded-lg p-6">
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <span key={i} className="text-yellow-400 text-lg">★</span>
                ))}
              </div>
              
              <p className="text-muted-foreground mb-6 italic">
                "{testimonial.text}"
              </p>
              
              <div className="border-t pt-4">
                <div className="font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-sm text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <div className="flex justify-center items-center space-x-8 opacity-60">
            <div className="text-2xl font-bold">OpenSpace</div>
            <div className="text-2xl font-bold">DeskShare</div>
            <div className="text-2xl font-bold">INTERIO</div>
            <div className="text-2xl font-bold">zouk</div>
            <div className="text-2xl font-bold">Routific</div>
            <div className="text-2xl font-bold">zepto</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;