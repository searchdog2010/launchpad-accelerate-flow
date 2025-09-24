import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Clock, Users } from "lucide-react";

const Register = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <section className="bg-gradient-to-r from-primary to-hero-end text-white py-12">
        <div className="container mx-auto px-6 text-center">
          <Badge className="mb-4 bg-white/20 text-white border-white/30">
            🚀 Free Workshop Registration
          </Badge>
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Reserve Your Seat for the Community Launch Accelerator Workshop
          </h1>
          <p className="text-xl text-white/90 max-w-3xl mx-auto">
            Join me for a live 2-hour workshop where you'll launch your revenue-generating community from scratch
          </p>
        </div>
      </section>

      <div className="container mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Registration Form */}
          <Card className="shadow-strong">
            <CardHeader>
              <CardTitle className="text-2xl text-center">Register for FREE Workshop</CardTitle>
              <p className="text-center text-muted-foreground">
                Complete the form below to secure your spot
              </p>
            </CardHeader>
            <CardContent className="p-0">
              <div className="min-h-[600px]">
                <iframe
                  src="https://link.groupfuel.io/widget/form/VHDMf0r9xJdTGuqIA27I"
                  style={{width:'100%',height:'100%',minHeight:'600px',border:'none',borderRadius:'15px'}}
                  id="inline-VHDMf0r9xJdTGuqIA27I" 
                  data-layout="{'id':'INLINE'}"
                  data-trigger-type="alwaysShow"
                  data-trigger-value=""
                  data-activation-type="alwaysActivated"
                  data-activation-value=""
                  data-deactivation-type="neverDeactivate"
                  data-deactivation-value=""
                  data-form-name="00. Launchpad Registration"
                  data-height="undefined"
                  data-layout-iframe-id="inline-VHDMf0r9xJdTGuqIA27I"
                  data-form-id="VHDMf0r9xJdTGuqIA27I"
                  title="00. Launchpad Registration"
                />
              </div>
              <script src="https://link.groupfuel.io/js/form_embed.js"></script>
            </CardContent>
          </Card>

          {/* Workshop Details */}
          <div className="space-y-8">
            {/* Workshop Info */}
            <Card className="border-l-4 border-l-primary shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  Workshop Details
                </h3>
                <div className="space-y-3">
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Duration</Badge>
                    <span>2 Hours Live Workshop</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Format</Badge>
                    <span>Live Online + Interactive</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Investment</Badge>
                    <span className="font-bold text-success">100% FREE</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Badge variant="secondary">Bonus</Badge>
                    <span>Implementation Templates</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* What You'll Walk Away With */}
            <Card className="shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <CheckCircle className="w-5 h-5 text-success" />
                  What You'll Walk Away With
                </h3>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">Your community platform selected and set up live</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">Automated onboarding sequence installed and working</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">AI-generated launch assets ready to use</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">Gamification system that converts free members to paid</span>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-4 h-4 text-success mt-1 flex-shrink-0" />
                    <span className="text-sm">Clear roadmap to scale to $10K+/month</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Social Proof */}
            <Card className="bg-testimonial shadow-medium">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <Users className="w-5 h-5 text-primary" />
                  Recent Results from Students
                </h3>
                <div className="space-y-4">
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm italic mb-2">
                      "Launched my coaching community and got 47 members in the first week using this exact system!"
                    </p>
                    <p className="text-xs text-muted-foreground">— Sarah, Life Coach</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm italic mb-2">
                      "Finally stopped overthinking and just launched. Made $2,400 in my first month!"
                    </p>
                    <p className="text-xs text-muted-foreground">— Mike, Business Consultant</p>
                  </div>
                  <div className="bg-card p-4 rounded-lg">
                    <p className="text-sm italic mb-2">
                      "The AI tools alone saved me weeks of work. My community is thriving!"
                    </p>
                    <p className="text-xs text-muted-foreground">— Jennifer, Course Creator</p>
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

export default Register;