import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { 
  Plus, 
  Eye, 
  Edit, 
  Share2, 
  BarChart3, 
  Heart, 
  DollarSign,
  Users,
  Calendar,
  TrendingUp
} from "lucide-react";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("campaigns");

  const userCampaigns = [
    {
      id: 1,
      title: "Help Maria Get Life-Saving Surgery",
      raised: 45000,
      goal: 75000,
      donors: 1240,
      daysLeft: 12,
      status: "active",
      views: 15420,
      shares: 89
    },
    {
      id: 2,
      title: "Emergency Relief for Flood Victims",
      raised: 67000,
      goal: 80000,
      donors: 2100,
      daysLeft: 0,
      status: "completed",
      views: 28930,
      shares: 156
    }
  ];

  const donationHistory = [
    {
      campaign: "Help Maria Get Life-Saving Surgery",
      amount: 100,
      date: "2024-01-20",
      organizer: "Sarah Martinez"
    },
    {
      campaign: "Build Clean Water Wells",
      amount: 50,
      date: "2024-01-18",
      organizer: "Water For All Foundation"
    },
    {
      campaign: "Youth Soccer Team Equipment",
      amount: 25,
      date: "2024-01-15",
      organizer: "Coach Johnson"
    }
  ];

  const totalRaised = userCampaigns.reduce((sum, campaign) => sum + campaign.raised, 0);
  const totalDonors = userCampaigns.reduce((sum, campaign) => sum + campaign.donors, 0);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
            <div>
              <h1 className="text-3xl font-bold mb-2">Your Dashboard</h1>
              <p className="text-muted-foreground">
                Manage your campaigns and track your impact
              </p>
            </div>
            <Button className="bg-gradient-primary hover:opacity-90 mt-4 md:mt-0">
              <Plus className="w-4 h-4 mr-2" />
              Start New Campaign
            </Button>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Raised</p>
                    <p className="text-2xl font-bold text-primary">
                      ${totalRaised.toLocaleString()}
                    </p>
                  </div>
                  <DollarSign className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Total Supporters</p>
                    <p className="text-2xl font-bold text-primary">
                      {totalDonors.toLocaleString()}
                    </p>
                  </div>
                  <Users className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Active Campaigns</p>
                    <p className="text-2xl font-bold text-primary">
                      {userCampaigns.filter(c => c.status === 'active').length}
                    </p>
                  </div>
                  <TrendingUp className="w-8 h-8 text-primary" />
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground">Success Rate</p>
                    <p className="text-2xl font-bold text-success">84%</p>
                  </div>
                  <BarChart3 className="w-8 h-8 text-success" />
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Main Content */}
          <Tabs value={activeTab} onValueChange={setActiveTab}>
            <TabsList className="mb-6">
              <TabsTrigger value="campaigns">My Campaigns</TabsTrigger>
              <TabsTrigger value="donations">My Donations</TabsTrigger>
              <TabsTrigger value="saved">Saved Campaigns</TabsTrigger>
            </TabsList>

            <TabsContent value="campaigns" className="space-y-6">
              {userCampaigns.map((campaign) => {
                const progress = (campaign.raised / campaign.goal) * 100;
                
                return (
                  <Card key={campaign.id} className="overflow-hidden">
                    <CardContent className="p-6">
                      <div className="flex flex-col lg:flex-row gap-6">
                        {/* Campaign Image */}
                        <div className="w-full lg:w-48 h-32 bg-gradient-to-r from-primary/20 to-primary-glow/20 rounded-lg flex items-center justify-center">
                          <div className="text-4xl opacity-30">🎯</div>
                        </div>

                        {/* Campaign Details */}
                        <div className="flex-1 space-y-4">
                          <div className="flex flex-col md:flex-row justify-between items-start">
                            <div>
                              <h3 className="text-xl font-semibold mb-2">{campaign.title}</h3>
                              <Badge variant={campaign.status === 'active' ? 'default' : 'secondary'}>
                                {campaign.status === 'active' ? 'Active' : 'Completed'}
                              </Badge>
                            </div>
                            
                            <div className="flex gap-2 mt-4 md:mt-0">
                              <Button variant="outline" size="sm">
                                <Eye className="w-4 h-4 mr-2" />
                                View
                              </Button>
                              <Button variant="outline" size="sm">
                                <Edit className="w-4 h-4 mr-2" />
                                Edit
                              </Button>
                              <Button variant="outline" size="sm">
                                <Share2 className="w-4 h-4 mr-2" />
                                Share
                              </Button>
                            </div>
                          </div>

                          {/* Progress */}
                          <div className="space-y-2">
                            <div className="flex justify-between text-sm">
                              <span className="font-medium text-primary">
                                ${campaign.raised.toLocaleString()} raised
                              </span>
                              <span className="text-muted-foreground">
                                of ${campaign.goal.toLocaleString()}
                              </span>
                            </div>
                            <Progress value={progress} className="h-2" />
                          </div>

                          {/* Stats */}
                          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                            <div>
                              <span className="text-muted-foreground">Donors:</span>
                              <span className="font-medium ml-1">{campaign.donors}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Views:</span>
                              <span className="font-medium ml-1">{campaign.views.toLocaleString()}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Shares:</span>
                              <span className="font-medium ml-1">{campaign.shares}</span>
                            </div>
                            <div>
                              <span className="text-muted-foreground">Days left:</span>
                              <span className="font-medium ml-1">
                                {campaign.daysLeft > 0 ? campaign.daysLeft : 'Ended'}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </TabsContent>

            <TabsContent value="donations" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Your Donation History
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {donationHistory.map((donation, index) => (
                      <div key={index} className="flex items-center justify-between p-4 border rounded-lg">
                        <div>
                          <h4 className="font-medium">{donation.campaign}</h4>
                          <p className="text-sm text-muted-foreground">
                            by {donation.organizer} • {donation.date}
                          </p>
                        </div>
                        <div className="text-right">
                          <span className="text-lg font-semibold text-primary">
                            ${donation.amount}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">Total Donated:</span>
                      <span className="text-xl font-bold text-primary">
                        ${donationHistory.reduce((sum, d) => sum + d.amount, 0)}
                      </span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="saved" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="w-5 h-5 text-primary" />
                    Saved Campaigns
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="text-center py-12">
                    <Heart className="w-12 h-12 mx-auto text-muted-foreground mb-4" />
                    <h3 className="text-lg font-semibold mb-2">No saved campaigns yet</h3>
                    <p className="text-muted-foreground mb-4">
                      Start exploring campaigns and save the ones you care about
                    </p>
                    <Button className="bg-gradient-primary hover:opacity-90">
                      Explore Campaigns
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Dashboard;