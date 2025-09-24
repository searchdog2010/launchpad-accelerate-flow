import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Shield, Download, Play } from "lucide-react";

const Payment = () => {
  const handlePurchase = () => {
    window.open("https://link.groupfuel.io/payment-link/68d35970613b1b5ef6ce3624", "_self");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-hero-end text-white py-8">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            ⚡ Workshop Recordings Upgrade
          </Badge>
          <h1 className="text-2xl md:text-4xl font-bold mb-2">
            Complete Your $17 Upgrade
          </h1>
          <p className="text-lg text-white/90">
            Lifetime access to recordings + exclusive bonuses
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Purchase Button */}
          <div className="text-center mb-12">
            <Button 
              onClick={handlePurchase}
              className="gradient-cta text-white text-xl py-8 px-12 font-bold shadow-medium hover:shadow-strong transition-all"
            >
              Complete Purchase - $17
            </Button>
            <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mt-4">
              <Shield className="w-4 h-4 text-success" />
              <span>Secure payment processing</span>
            </div>
          </div>

          {/* Order Details */}
          <div className="space-y-8">
            <Card className="border-l-4 border-l-primary shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Download className="w-5 h-5 text-primary" />
                  Your Complete Package
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-2">
                    <Play className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Full Workshop Recording</div>
                      <div className="text-sm text-muted-foreground">2+ hours of step-by-step implementation</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <Download className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">All Templates & Worksheets</div>
                      <div className="text-sm text-muted-foreground">Downloadable PDF formats</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">Community Launch Checklist</div>
                      <div className="text-sm text-muted-foreground">Step-by-step launch guide</div>
                    </div>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <div>
                      <div className="font-medium">30 AI Prompts for Content</div>
                      <div className="text-sm text-muted-foreground">Ready-to-use content templates</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Guarantee */}
            <Card className="bg-success/5 border border-success/20 shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-success">
                  <Shield className="w-5 h-5" />
                  30-Day Money-Back Guarantee
                </h3>
                <p className="text-sm text-muted-foreground">
                  If you're not completely satisfied with the workshop recordings and materials, 
                  we'll refund your $17 upgrade fee within 30 days - no questions asked. 
                  Your satisfaction is our priority.
                </p>
              </CardContent>
            </Card>

            {/* Instant Access */}
            <Card className="bg-primary/5 border border-primary/20 shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2 text-primary">
                  <Download className="w-5 h-5" />
                  Instant Access After Payment
                </h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Once your payment is processed, you'll immediately receive:
                </p>
                <div className="space-y-1 text-sm">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Download links via email</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Access to member portal</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-3 h-3 text-success" />
                    <span>Lifetime access guarantee</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Value Comparison */}
            <Card className="bg-muted shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-lg font-bold mb-3 text-center">Value Breakdown</h3>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-sm">Workshop Recording</span>
                    <span className="text-sm font-medium">$27</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Templates & Worksheets</span>
                    <span className="text-sm font-medium">$15</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">Launch Checklist</span>
                    <span className="text-sm font-medium">$10</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm">AI Content Prompts</span>
                    <span className="text-sm font-medium">$20</span>
                  </div>
                  <hr />
                  <div className="flex justify-between font-bold">
                    <span>Total Value:</span>
                    <span className="line-through text-muted-foreground">$72</span>
                  </div>
                  <div className="flex justify-between font-bold text-lg text-primary">
                    <span>Your Price:</span>
                    <span>$17</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Payment;