import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Navigation } from "@/components/Navigation";
import { Footer } from "@/components/Footer";
import { Progress } from "@/components/ui/progress";
import { 
  Upload, 
  DollarSign, 
  Calendar, 
  Target, 
  FileText, 
  Camera,
  CheckCircle
} from "lucide-react";

const CreateCampaign = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-3xl md:text-4xl font-bold mb-4">
              Start Your Campaign
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Turn your cause into action. Create a campaign that inspires people to support your mission.
            </p>
          </div>

          {/* Progress Bar */}
          <Card className="mb-8">
            <CardContent className="p-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-medium">Step {currentStep} of {totalSteps}</span>
                <span className="text-sm text-muted-foreground">{Math.round(progress)}% Complete</span>
              </div>
              <Progress value={progress} className="h-2" />
              
              <div className="flex justify-between mt-4 text-sm">
                <span className={currentStep >= 1 ? "text-primary font-medium" : "text-muted-foreground"}>
                  Basic Info
                </span>
                <span className={currentStep >= 2 ? "text-primary font-medium" : "text-muted-foreground"}>
                  Story & Media
                </span>
                <span className={currentStep >= 3 ? "text-primary font-medium" : "text-muted-foreground"}>
                  Goal & Timeline
                </span>
                <span className={currentStep >= 4 ? "text-primary font-medium" : "text-muted-foreground"}>
                  Review & Launch
                </span>
              </div>
            </CardContent>
          </Card>

          {/* Step Content */}
          <Card>
            <CardContent className="p-8">
              {currentStep === 1 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <FileText className="w-12 h-12 mx-auto text-primary mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Tell us about your campaign</h2>
                    <p className="text-muted-foreground">
                      Start with the basics - we'll help you create something amazing.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <Label htmlFor="title">Campaign Title *</Label>
                      <Input 
                        id="title"
                        placeholder="Give your campaign a compelling title"
                        className="mt-2"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Make it clear and emotional - this is what people see first
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="category">Category *</Label>
                      <Select>
                        <SelectTrigger className="mt-2">
                          <SelectValue placeholder="Choose a category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="medical">Medical</SelectItem>
                          <SelectItem value="education">Education</SelectItem>
                          <SelectItem value="emergency">Emergency</SelectItem>
                          <SelectItem value="community">Community</SelectItem>
                          <SelectItem value="animals">Animals & Pets</SelectItem>
                          <SelectItem value="sports">Sports</SelectItem>
                          <SelectItem value="creative">Creative Projects</SelectItem>
                          <SelectItem value="other">Other</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label htmlFor="location">Location</Label>
                      <Input 
                        id="location"
                        placeholder="City, State"
                        className="mt-2"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="summary">Short Summary *</Label>
                      <Textarea 
                        id="summary"
                        placeholder="Briefly describe what your campaign is about (2-3 sentences)"
                        className="mt-2"
                        rows={3}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        This appears in search results and social media previews
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 2 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Camera className="w-12 h-12 mx-auto text-primary mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Share your story</h2>
                    <p className="text-muted-foreground">
                      Help people connect with your cause through compelling content.
                    </p>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <Label htmlFor="cover-image">Cover Image *</Label>
                      <div className="mt-2 border-2 border-dashed border-border rounded-lg p-8 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-8 h-8 mx-auto text-muted-foreground mb-4" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Click to upload or drag and drop
                        </p>
                        <p className="text-xs text-muted-foreground">
                          PNG, JPG up to 10MB. Recommended: 1200x630px
                        </p>
                      </div>
                    </div>

                    <div>
                      <Label htmlFor="story">Your Story *</Label>
                      <Textarea 
                        id="story"
                        placeholder="Tell your story in detail. Why is this important? How will donations help? Be specific and personal."
                        className="mt-2 min-h-[200px]"
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Include specific details about how the money will be used
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="additional-media">Additional Photos/Videos</Label>
                      <div className="mt-2 border-2 border-dashed border-border rounded-lg p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                        <Upload className="w-6 h-6 mx-auto text-muted-foreground mb-2" />
                        <p className="text-sm text-muted-foreground">
                          Add more photos or videos to tell your story
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 3 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <Target className="w-12 h-12 mx-auto text-primary mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Set your goal</h2>
                    <p className="text-muted-foreground">
                      How much do you need to raise and when do you need it?
                    </p>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <Label htmlFor="goal">Fundraising Goal *</Label>
                      <div className="relative mt-2">
                        <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          id="goal"
                          type="number"
                          placeholder="50000"
                          className="pl-10"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Set a realistic goal based on your actual needs
                      </p>
                    </div>

                    <div>
                      <Label htmlFor="deadline">Campaign Deadline</Label>
                      <div className="relative mt-2">
                        <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground w-4 h-4" />
                        <Input 
                          id="deadline"
                          type="date"
                          className="pl-10"
                        />
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        Optional: Set an end date for urgency
                      </p>
                    </div>

                    <div className="md:col-span-2">
                      <Label htmlFor="budget">How will the money be used? *</Label>
                      <Textarea 
                        id="budget"
                        placeholder="Break down exactly how donations will be spent. For example:&#10;• Surgery costs: $50,000&#10;• Hospital stay: $15,000&#10;• Medications: $5,000&#10;• Recovery care: $5,000"
                        className="mt-2"
                        rows={6}
                      />
                      <p className="text-sm text-muted-foreground mt-1">
                        Transparency builds trust - be specific about costs
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {currentStep === 4 && (
                <div className="space-y-6">
                  <div className="text-center mb-6">
                    <CheckCircle className="w-12 h-12 mx-auto text-success mb-4" />
                    <h2 className="text-2xl font-bold mb-2">Review & Launch</h2>
                    <p className="text-muted-foreground">
                      Almost there! Review your campaign before going live.
                    </p>
                  </div>

                  <div className="space-y-4">
                    <Card className="border-l-4 border-l-primary">
                      <CardContent className="p-4">
                        <h3 className="font-semibold mb-2">Campaign Preview</h3>
                        <div className="text-sm space-y-1">
                          <p><span className="font-medium">Title:</span> Help Maria Get Life-Saving Surgery</p>
                          <p><span className="font-medium">Category:</span> Medical</p>
                          <p><span className="font-medium">Goal:</span> $75,000</p>
                          <p><span className="font-medium">Location:</span> Los Angeles, CA</p>
                        </div>
                      </CardContent>
                    </Card>

                    <div className="bg-muted/30 rounded-lg p-6">
                      <h3 className="font-semibold mb-4">Before you launch:</h3>
                      <div className="space-y-3">
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">I have read and agree to the Terms of Service</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">I understand that FundRaise charges a 2.9% + $0.30 fee per donation</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">I will provide updates to donors about the campaign progress</span>
                        </label>
                        <label className="flex items-center space-x-3">
                          <input type="checkbox" className="rounded" />
                          <span className="text-sm">All information provided is truthful and accurate</span>
                        </label>
                      </div>
                    </div>

                    <div className="bg-success/10 border border-success/20 rounded-lg p-4">
                      <h4 className="font-semibold text-success mb-2">🎉 Ready to launch!</h4>
                      <p className="text-sm text-success/80">
                        Your campaign will be live immediately after you click "Launch Campaign"
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Navigation Buttons */}
              <div className="flex justify-between pt-8 border-t">
                <Button 
                  variant="outline" 
                  onClick={prevStep}
                  disabled={currentStep === 1}
                >
                  Previous
                </Button>
                
                {currentStep < totalSteps ? (
                  <Button 
                    onClick={nextStep}
                    className="bg-gradient-primary hover:opacity-90"
                  >
                    Continue
                  </Button>
                ) : (
                  <Button className="bg-gradient-primary hover:opacity-90">
                    Launch Campaign
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default CreateCampaign;