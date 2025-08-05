import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Heart, 
  Share2, 
  Flag, 
  Calendar, 
  MapPin, 
  Users, 
  TrendingUp,
  DollarSign,
  Clock
} from "lucide-react";

const CampaignDetail = () => {
  const campaign = {
    title: "Help Maria Get Life-Saving Surgery",
    description: "Maria is a bright 8-year-old girl who loves to dance and dreams of becoming a teacher. Unfortunately, she was born with a rare heart condition that requires urgent surgery. Without this operation, her condition will continue to worsen.",
    raised: 45000,
    goal: 75000,
    daysLeft: 12,
    donorCount: 1240,
    category: "Medical",
    location: "Los Angeles, CA",
    created: "January 15, 2024",
    organizer: "Sarah Martinez",
    trending: true
  };

  const progress = (campaign.raised / campaign.goal) * 100;

  const recentDonations = [
    { name: "Anonymous", amount: 500, time: "2 hours ago", message: "Stay strong Maria! ❤️" },
    { name: "Jennifer K.", amount: 100, time: "4 hours ago", message: "Prayers for a successful surgery" },
    { name: "Mike Rodriguez", amount: 250, time: "6 hours ago", message: "From one parent to another" },
    { name: "Anonymous", amount: 50, time: "8 hours ago", message: "" },
    { name: "Lisa Chen", amount: 150, time: "12 hours ago", message: "Hope Maria gets better soon!" }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Campaign Image */}
            <div className="relative aspect-video bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-8xl opacity-30">❤️</div>
              </div>
              {campaign.trending && (
                <Badge className="absolute top-4 left-4 bg-warning text-warning-foreground">
                  <TrendingUp className="w-3 h-3 mr-1" />
                  Trending
                </Badge>
              )}
              <Badge className="absolute top-4 right-4 bg-background/90 text-foreground">
                {campaign.category}
              </Badge>
            </div>

            {/* Campaign Info */}
            <div className="space-y-4">
              <h1 className="text-3xl md:text-4xl font-bold leading-tight">
                {campaign.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-1">
                  <MapPin className="w-4 h-4" />
                  {campaign.location}
                </div>
                <div className="flex items-center gap-1">
                  <Calendar className="w-4 h-4" />
                  Created {campaign.created}
                </div>
                <div className="flex items-center gap-1">
                  <Users className="w-4 h-4" />
                  {campaign.donorCount} supporters
                </div>
              </div>
            </div>

            {/* Story */}
            <Card>
              <CardHeader>
                <CardTitle>Maria's Story</CardTitle>
              </CardHeader>
              <CardContent className="prose prose-gray max-w-none">
                <p className="text-foreground leading-relaxed mb-4">
                  {campaign.description}
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  The surgery costs $75,000, which includes the operation itself, hospital stay, medication, and follow-up care. Maria's family has been working tirelessly to raise funds, but they need our help to reach their goal.
                </p>
                <p className="text-foreground leading-relaxed mb-4">
                  Every dollar brings Maria one step closer to a healthy, normal life. The doctors are optimistic that with this surgery, Maria will be able to run, play, and pursue her dreams just like any other child.
                </p>
                <p className="text-foreground leading-relaxed font-medium">
                  Time is critical. The surgery needs to happen within the next few weeks. Please help Maria and her family during this difficult time.
                </p>
              </CardContent>
            </Card>

            {/* Organizer */}
            <Card>
              <CardHeader>
                <CardTitle>Campaign Organizer</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-center gap-4">
                  <Avatar className="h-12 w-12">
                    <AvatarFallback className="bg-primary text-primary-foreground">
                      SM
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="font-semibold">{campaign.organizer}</h3>
                    <p className="text-sm text-muted-foreground">Maria's aunt and legal guardian</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Organizer in {campaign.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Updates</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="border-l-2 border-primary pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Surgery Date Confirmed!</h4>
                    <span className="text-sm text-muted-foreground">2 days ago</span>
                  </div>
                  <p className="text-muted-foreground">
                    Great news! We've confirmed Maria's surgery date for next month. The medical team is ready and optimistic about the outcome.
                  </p>
                </div>
                
                <div className="border-l-2 border-muted pl-4">
                  <div className="flex justify-between items-start mb-2">
                    <h4 className="font-semibold">Thank you for your support!</h4>
                    <span className="text-sm text-muted-foreground">1 week ago</span>
                  </div>
                  <p className="text-muted-foreground">
                    We're overwhelmed by the kindness and generosity shown by our community. Maria sends her love to everyone.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Donation Card */}
            <Card className="sticky top-24">
              <CardContent className="p-6 space-y-6">
                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-2xl font-bold text-primary">
                      ${campaign.raised.toLocaleString()}
                    </span>
                    <span className="text-muted-foreground">
                      of ${campaign.goal.toLocaleString()}
                    </span>
                  </div>
                  
                  <Progress value={progress} className="h-3" />
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div>
                      <div className="text-lg font-semibold">{campaign.donorCount}</div>
                      <div className="text-sm text-muted-foreground">Donors</div>
                    </div>
                    <div>
                      <div className="text-lg font-semibold">{campaign.daysLeft}</div>
                      <div className="text-sm text-muted-foreground">Days left</div>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-primary hover:opacity-90 text-lg py-3">
                    <DollarSign className="w-5 h-5 mr-2" />
                    Donate Now
                  </Button>
                  
                  <div className="grid grid-cols-2 gap-2">
                    <Button variant="outline" className="flex-1">
                      <Heart className="w-4 h-4 mr-2" />
                      Save
                    </Button>
                    <Button variant="outline" className="flex-1">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                  </div>
                  
                  <Button variant="ghost" size="sm" className="w-full text-muted-foreground">
                    <Flag className="w-4 h-4 mr-2" />
                    Report campaign
                  </Button>
                </div>
              </CardContent>
            </Card>

            {/* Recent Donations */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Heart className="w-5 h-5 text-primary" />
                  Recent Donations
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {recentDonations.map((donation, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <div className="flex items-center gap-2">
                        <Avatar className="h-8 w-8">
                          <AvatarFallback className="text-xs bg-primary/10">
                            {donation.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-sm">{donation.name}</div>
                          <div className="text-xs text-muted-foreground">{donation.time}</div>
                        </div>
                      </div>
                      <span className="font-semibold text-primary">
                        ${donation.amount}
                      </span>
                    </div>
                    {donation.message && (
                      <p className="text-sm text-muted-foreground italic pl-10">
                        "{donation.message}"
                      </p>
                    )}
                    {index < recentDonations.length - 1 && <Separator />}
                  </div>
                ))}
                
                <Button variant="outline" className="w-full mt-4">
                  View all donations
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CampaignDetail;