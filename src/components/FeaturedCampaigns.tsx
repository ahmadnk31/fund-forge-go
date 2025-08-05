import { CampaignCard } from "./CampaignCard";

const featuredCampaigns = [
  {
    title: "Help Maria Get Life-Saving Surgery",
    description: "Maria is a 8-year-old girl who needs urgent heart surgery. Your donation can help save her life and give her a chance at a normal childhood.",
    image: "/placeholder-campaign-1.jpg",
    raised: 45000,
    goal: 75000,
    daysLeft: 12,
    donorCount: 1240,
    category: "Medical",
    trending: true
  },
  {
    title: "Build Clean Water Wells in Rural Kenya",
    description: "Providing clean, safe drinking water to rural communities in Kenya. Each well serves 500+ people with fresh water for decades.",
    image: "/placeholder-campaign-2.jpg",
    raised: 28000,
    goal: 50000,
    daysLeft: 25,
    donorCount: 560,
    category: "Community"
  },
  {
    title: "Scholarship Fund for Underprivileged Students",
    description: "Help bright students from low-income families pursue higher education. Every dollar helps them achieve their dreams.",
    image: "/placeholder-campaign-3.jpg",
    raised: 15000,
    goal: 25000,
    daysLeft: 18,
    donorCount: 320,
    category: "Education"
  },
  {
    title: "Emergency Relief for Flood Victims",
    description: "Providing immediate relief to families affected by recent flooding. Food, shelter, and medical supplies urgently needed.",
    image: "/placeholder-campaign-4.jpg",
    raised: 67000,
    goal: 80000,
    daysLeft: 8,
    donorCount: 2100,
    category: "Emergency",
    trending: true
  },
  {
    title: "Save the Local Animal Shelter",
    description: "Our beloved animal shelter is facing closure. Help us raise funds to keep rescuing and caring for abandoned pets.",
    image: "/placeholder-campaign-5.jpg",
    raised: 32000,
    goal: 60000,
    daysLeft: 30,
    donorCount: 890,
    category: "Animals"
  },
  {
    title: "Youth Soccer Team Equipment",
    description: "Help our local youth soccer team get new equipment and uniforms. These kids deserve a chance to play and learn.",
    image: "/placeholder-campaign-6.jpg",
    raised: 8500,
    goal: 15000,
    daysLeft: 22,
    donorCount: 145,
    category: "Sports"
  }
];

export function FeaturedCampaigns() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">Featured Campaigns</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover inspiring stories and make a difference in someone's life today.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCampaigns.map((campaign, index) => (
            <CampaignCard key={index} {...campaign} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="text-primary hover:text-primary-glow font-medium text-lg">
            View All Campaigns →
          </button>
        </div>
      </div>
    </section>
  );
}