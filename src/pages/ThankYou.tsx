import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Play, Download, Star, Clock, Users } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ThankYou = () => {
  const navigate = useNavigate();

  const handleUpgradeRecordings = () => {
    navigate("/payment");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Success Header */}
      <section className="bg-gradient-to-r from-success to-feature text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <CheckCircle className="w-16 h-16 mx-auto mb-4" />
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            🎉 You're In! Welcome to the Workshop
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Your seat is reserved for the Community Launch Accelerator Workshop
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Confirmation Details */}
          <div className="space-y-8">
            <Card className="border-l-4 border-l-success shadow-strong">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CheckCircle className="w-6 h-6 text-success" />
                  Registration Confirmed
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="bg-success/10 p-4 rounded-lg">
                  <h3 className="font-bold mb-2">What's Next:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Workshop details sent to your email</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Zoom link and calendar invite included</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Prep materials available in your inbox</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-success" />
                      <span>Reminder sent 24 hours before</span>
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Date</Badge>
                    <span>Thursday, January 18th, 2024</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Time</Badge>
                    <span>2:00 PM - 4:00 PM EST</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Format</Badge>
                    <span>Live on Zoom (interactive)</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What to Expect */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Workshop Agenda
                </h3>
                <div className="space-y-4">
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">Hour 1: Foundation & Strategy</h4>
                    <p className="text-sm text-muted-foreground">Choose your model, pick your platform, set up your community live</p>
                  </div>
                  <div className="border-l-2 border-primary pl-4">
                    <h4 className="font-semibold">Hour 2: Implementation & Launch</h4>
                    <p className="text-sm text-muted-foreground">Build assets with AI, install automation, launch your community</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Special Upgrade Offer */}
          <Card className="shadow-strong border-2 border-primary">
            <CardHeader className="bg-primary/5">
              <div className="text-center">
                <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                  ⚡ Special Workshop Upgrade
                </Badge>
                <CardTitle className="text-2xl">Get the Workshop Recordings + Bonuses</CardTitle>
                <p className="text-muted-foreground mt-2">
                  Can't make it live or want to review the material? Get everything recorded plus exclusive bonuses.
                </p>
              </div>
            </CardHeader>
            <CardContent className="p-6">
              <div className="text-center mb-6">
                <div className="flex items-center justify-center gap-2 mb-2">
                  <span className="text-2xl line-through text-muted-foreground">$47</span>
                  <span className="text-4xl font-bold text-primary">$17</span>
                </div>
                <p className="text-sm text-muted-foreground">One-time upgrade fee</p>
              </div>

              <div className="space-y-3 mb-6">
                <h4 className="font-bold flex items-center gap-2">
                  <Play className="w-4 h-4 text-primary" />
                  What's Included:
                </h4>
                <div className="space-y-2">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Complete workshop recording (2+ hours)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">All templates and worksheets (downloadable)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Bonus: Community Launch Checklist</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Bonus: 30 AI Prompts for Community Content</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-0.5 flex-shrink-0" />
                    <span className="text-sm">Lifetime access to all materials</span>
                  </div>
                </div>
              </div>

              <Button 
                onClick={handleUpgradeRecordings}
                className="w-full gradient-cta text-white font-bold text-lg py-4 shadow-medium hover:shadow-strong transition-all mb-4"
              >
                Yes! Upgrade for $17 Now
              </Button>

              <div className="text-center">
                <p className="text-xs text-muted-foreground mb-2">
                  ✅ 30-day money-back guarantee
                </p>
                <p className="text-xs text-muted-foreground">
                  This upgrade is optional. You're already registered for the free live workshop!
                </p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Social Proof Section */}
        <section className="mt-16">
          <Card className="bg-testimonial shadow-medium">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold text-center mb-8 flex items-center justify-center gap-2">
                <Users className="w-6 h-6 text-primary" />
                What Past Attendees Are Saying
              </h3>
              <div className="grid md:grid-cols-3 gap-6">
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm italic mb-3">
                    "The workshop was incredible! I set up my community during the session and had 25 members by the end of the week. The recordings helped me implement everything perfectly."
                  </p>
                  <p className="text-xs text-muted-foreground">— Alex M., Fitness Coach</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm italic mb-3">
                    "Best investment ever! The templates alone saved me weeks of work. Having the recordings to reference was a game-changer for my implementation."
                  </p>
                  <p className="text-xs text-muted-foreground">— Sarah K., Business Coach</p>
                </div>
                
                <div className="bg-card p-6 rounded-lg shadow-soft">
                  <div className="flex items-center gap-1 mb-3">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                  <p className="text-sm italic mb-3">
                    "I missed the live session but got the recordings. Still managed to launch my community and make $1,800 in the first month using the exact blueprint!"
                  </p>
                  <p className="text-xs text-muted-foreground">— Marcus T., Marketing Consultant</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default ThankYou;