import { Button } from "@/components/ui/button";

const BlogSection = () => {
  const blogPosts = [
    {
      title: "Top Trends in Office Space Design that Make the Modern Workplace Productive",
      date: "Sep 15, 2024",
      category: "Office Design",
      image: "🏢"
    },
    {
      title: "The Evolution of Office Design: From Traditional Offices to Co-working Spaces",
      date: "Sep 10, 2024", 
      category: "Workplace",
      image: "🏬"
    },
    {
      title: "Eco-smart Workspace Solutions for Sustainable Office Environments",
      date: "Sep 5, 2024",
      category: "Sustainability", 
      image: "🌱"
    }
  ];

  return (
    <section className="py-16 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
            Check out <span className="text-brand-red">the latest buzz</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="bg-card rounded-lg overflow-hidden shadow-sm border">
              <div className="bg-gradient-to-br from-gray-100 to-gray-200 h-48 flex items-center justify-center">
                <div className="text-6xl">{post.image}</div>
              </div>
              
              <div className="p-6">
                <div className="flex items-center text-sm text-muted-foreground mb-3">
                  <span className="bg-brand-red text-white px-2 py-1 rounded text-xs font-semibold mr-3">
                    {post.category}
                  </span>
                  <span>{post.date}</span>
                </div>
                
                <h3 className="font-bold text-lg mb-4 text-foreground line-clamp-3 leading-tight">
                  {post.title}
                </h3>
                
                <Button variant="outline" size="sm" className="text-brand-red border-brand-red hover:bg-brand-red hover:text-white">
                  Read More
                </Button>
              </div>
            </article>
          ))}
        </div>

        <div className="text-center">
          <Button className="bg-brand-red hover:bg-brand-red-hover text-white px-8">
            View All Articles
          </Button>
        </div>
      </div>
    </section>
  );
};

export default BlogSection;