import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Download, Mail, Calendar, Users } from "lucide-react";

const Confirmation = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Success Header */}
      <section className="bg-gradient-to-r from-success to-feature text-white py-16">
        <div className="container mx-auto px-6 text-center">
          <CheckCircle className="w-20 h-20 mx-auto mb-6" />
          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            🎉 Payment Successful!
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto mb-6">
            Welcome to your Community Launch Accelerator Workshop + Recording Package
          </p>
          <Badge className="bg-white/20 text-white border-white/30 text-lg px-4 py-2">
            Order #WS-2024-001
          </Badge>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto space-y-12">
          
          {/* Quick Access */}
          <Card className="border-l-4 border-l-success shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <Download className="w-6 h-6 text-success" />
                Instant Access - Available Now
              </CardTitle>
              <p className="text-muted-foreground">
                Your purchase is complete! Access all your materials immediately below.
              </p>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <Button 
                  size="lg" 
                  className="w-full gradient-cta text-white font-bold py-4"
                  asChild
                >
                  <a href="#" target="_blank">
                    📹 Watch Workshop Recording
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="w-full py-4"
                  asChild
                >
                  <a href="#" target="_blank">
                    📁 Download All Materials
                  </a>
                </Button>
              </div>
              
              <div className="bg-success/10 p-4 rounded-lg">
                <h4 className="font-bold mb-2 text-success">✅ Check your email now!</h4>
                <p className="text-sm text-muted-foreground">
                  We've sent download links and access instructions to your email address. 
                  If you don't see it in a few minutes, check your spam folder.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* What's Included Recap */}
          <Card className="shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Your Complete Package</CardTitle>
              <p className="text-muted-foreground">Everything you need to launch and scale your community</p>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Complete Workshop Recording (2+ Hours)</h4>
                      <p className="text-sm text-muted-foreground">HD quality, step-by-step implementation</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">All Workshop Templates</h4>
                      <p className="text-sm text-muted-foreground">Downloadable PDFs, ready to use</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Community Launch Checklist</h4>
                      <p className="text-sm text-muted-foreground">Never miss a crucial step</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">30 AI Content Prompts</h4>
                      <p className="text-sm text-muted-foreground">Generate engaging posts instantly</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibnal">Platform Comparison Guide</h4>
                      <p className="text-sm text-muted-foreground">Choose the perfect platform</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-success mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="font-semibold">Lifetime Access</h4>
                      <p className="text-sm text-muted-foreground">Watch and re-watch anytime</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Live Workshop Reminder */}
          <Card className="bg-primary/5 border border-primary/20 shadow-medium">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Calendar className="w-6 h-6 text-primary" />
                Don't Forget: You're Also Registered for the LIVE Workshop
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-bold mb-3">Live Workshop Details:</h4>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Date</Badge>
                      <span>Thursday, January 18th, 2024</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Time</Badge>
                      <span>2:00 PM - 4:00 PM EST</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Badge variant="secondary">Format</Badge>
                      <span>Live on Zoom</span>
                    </div>
                  </div>
                </div>
                <div>
                  <h4 className="font-bold mb-3">Why Attend Live:</h4>
                  <ul className="space-y-1 text-sm text-muted-foreground">
                    <li>• Ask questions in real-time</li>
                    <li>• Get personalized feedback</li>
                    <li>• Network with other entrepreneurs</li>
                    <li>• Bonus live-only content</li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Next Steps */}
          <Card className="bg-muted shadow-medium">
            <CardHeader>
              <CardTitle className="text-2xl">Recommended Next Steps</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">1</span>
                  <div>
                    <h4 className="font-semibold">Watch the Recording</h4>
                    <p className="text-sm text-muted-foreground">Get familiar with the process before the live workshop</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">2</span>
                  <div>
                    <h4 className="font-semibold">Download the Templates</h4>
                    <p className="text-sm text-muted-foreground">Have everything ready to implement during the live session</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">3</span>
                  <div>
                    <h4 className="font-semibold">Join the Live Workshop</h4>
                    <p className="text-sm text-muted-foreground">Implement everything live with support and accountability</p>
                  </div>
                </div>
                <div className="flex items-start gap-3 p-4 bg-card rounded-lg">
                  <span className="bg-primary text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">4</span>
                  <div>
                    <h4 className="font-semibold">Launch Your Community</h4>
                    <p className="text-sm text-muted-foreground">Go live and start building your member base</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Support */}
          <Card className="border-l-4 border-l-accent shadow-medium">
            <CardContent className="p-6">
              <div className="flex items-center gap-3 mb-4">
                <Mail className="w-6 h-6 text-accent" />
                <h3 className="text-xl font-bold">Questions or Need Help?</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                We're here to help! If you have any questions about accessing your materials or 
                attending the workshop, don't hesitate to reach out.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline" asChild>
                  <a href="mailto:support@workshopacademy.com">
                    📧 Email Support
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#" target="_blank">
                    💬 Live Chat
                  </a>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Confirmation;