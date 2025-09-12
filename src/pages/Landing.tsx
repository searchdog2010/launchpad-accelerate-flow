import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { CheckCircle, Star, Users, TrendingUp, Clock, Shield } from "lucide-react";
import { useNavigate } from "react-router-dom";

const Landing = () => {
  const navigate = useNavigate();

  const handleJoinWorkshop = () => {
    navigate("/register");
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-hero-start via-primary to-hero-end">
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="relative container mx-auto px-6 py-20 text-center">
          <Badge className="mb-6 bg-white/20 text-white border-white/30 hover:bg-white/30">
            🚀 Live Workshop - Limited Seats Available
          </Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
            Coaches & Course Creators: Launch Your Community in Just 2 Hours
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-4xl mx-auto leading-relaxed">
            Even If You're Starting From Scratch
          </p>
          <Button 
            size="lg" 
            variant="secondary"
            onClick={handleJoinWorkshop}
            className="text-xl px-12 py-6 bg-white text-primary hover:bg-white/90 shadow-strong"
          >
            JOIN THE WORKSHOP! 🎯
          </Button>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
            Still stuck trying to figure out the "right" way to launch your community?
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            In this 2-hour live workshop, you'll walk away with a fully set up, optimized, 
            and launch-ready community designed to attract members, skyrocket engagement, 
            and convert free members into paying customers.
          </p>
          <Button 
            size="lg" 
            onClick={handleJoinWorkshop}
            className="gradient-cta text-white text-lg px-10 py-5 shadow-medium hover:shadow-strong transition-all"
          >
            JOIN THE WORKSHOP!
          </Button>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
            The Fastest Way to Launch a Revenue-Generating Community
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-16">
            You don't need months of planning, a big audience, or tech wizardry.
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            <Card className="border-0 shadow-medium hover:shadow-strong transition-all">
              <CardContent className="p-6">
                <CheckCircle className="w-8 h-8 text-feature mb-4" />
                <h3 className="font-bold text-lg mb-2">Choose the right model for your community</h3>
                <p className="text-muted-foreground">(Free, Paid, or Hybrid)</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium hover:shadow-strong transition-all">
              <CardContent className="p-6">
                <TrendingUp className="w-8 h-8 text-feature mb-4" />
                <h3 className="font-bold text-lg mb-2">Pick the best platform for your goals</h3>
                <p className="text-muted-foreground">— no more "platform paralysis"</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium hover:shadow-strong transition-all">
              <CardContent className="p-6">
                <Clock className="w-8 h-8 text-feature mb-4" />
                <h3 className="font-bold text-lg mb-2">Create launch assets in under 10 minutes</h3>
                <p className="text-muted-foreground">with AI</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium hover:shadow-strong transition-all">
              <CardContent className="p-6">
                <Users className="w-8 h-8 text-feature mb-4" />
                <h3 className="font-bold text-lg mb-2">Set up automated onboarding</h3>
                <p className="text-muted-foreground">that converts new members into paying clients</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium hover:shadow-strong transition-all">
              <CardContent className="p-6">
                <Star className="w-8 h-8 text-feature mb-4" />
                <h3 className="font-bold text-lg mb-2">Install a gamification model</h3>
                <p className="text-muted-foreground">that keeps engagement sky-high</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-medium hover:shadow-strong transition-all">
              <CardContent className="p-6 text-center">
                <Button 
                  onClick={handleJoinWorkshop}
                  className="w-full gradient-cta text-white font-bold py-4"
                >
                  JOIN THE WORKSHOP!
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Credibility Section */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Listen to Me?</h2>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$209K</div>
              <p className="text-white/90">Generated in revenue from community launches</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">$18K/month</div>
              <p className="text-white/90">Recurring revenue from Skool community</p>
            </div>
            <div>
              <div className="text-4xl font-bold text-primary mb-2">🏆 Winner</div>
              <p className="text-white/90">Skool Games affiliate competition</p>
            </div>
          </div>
          <p className="text-xl text-white/90 mb-8 max-w-4xl mx-auto">
            Over the last 8 months, I've generated these results using the exact system I'll walk you through. 
            This isn't theory. It's the same proven system I've used to grow thriving, profitable communities 
            — and I'll hand it to you step by step.
          </p>
          <Button 
            size="lg" 
            variant="outline"
            onClick={handleJoinWorkshop}
            className="bg-white/10 text-white border-white/30 hover:bg-white/20 text-lg px-10 py-5"
          >
            JOIN THE WORKSHOP!
          </Button>
        </div>
      </section>

      {/* What You'll Get */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-16">
            What You'll Get Inside the Workshop
          </h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <Card className="border-l-4 border-l-feature shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">✅ Community Model Selector (Interactive Exercise)</h3>
                <p className="text-muted-foreground">Quickly identify whether you should launch Free, Paid, or Hybrid.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-feature shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">✅ Platform Clarity Guide (Cheat Sheet)</h3>
                <p className="text-muted-foreground">No more guessing which platform fits your business.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-feature shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">✅ AI-Powered Asset Builder (Tool Walkthrough)</h3>
                <p className="text-muted-foreground">Generate all your launch content in under 10 minutes.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-feature shadow-medium">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">✅ Onboarding Automation Blueprint (Templates)</h3>
                <p className="text-muted-foreground">Pre-written DM sequences, welcome posts, and checkpoint messages.</p>
              </CardContent>
            </Card>

            <Card className="border-l-4 border-l-feature shadow-medium md:col-span-2">
              <CardContent className="p-8">
                <h3 className="text-xl font-bold mb-3">✅ Gamification Framework (Plug-and-Play Levels)</h3>
                <p className="text-muted-foreground">Drive member engagement and naturally lead people into your paid offers.</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleJoinWorkshop}
              className="gradient-cta text-white text-xl px-12 py-6 shadow-strong hover:shadow-medium transition-all"
            >
              JOIN THE WORKSHOP!
            </Button>
          </div>
        </div>
      </section>

      {/* Quick Wins */}
      <section className="py-20 bg-testimonial">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Quick Wins You'll Walk Away With
          </h2>
          <p className="text-xl text-center text-muted-foreground mb-12">
            By the end of the workshop, you'll already have:
          </p>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <Card className="text-center p-6 shadow-medium">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-bold mb-2">Your community set up and live</h3>
            </Card>
            <Card className="text-center p-6 shadow-medium">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-bold mb-2">A working onboarding flow installed</h3>
            </Card>
            <Card className="text-center p-6 shadow-medium">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-bold mb-2">Your first members ready to join</h3>
            </Card>
            <Card className="text-center p-6 shadow-medium">
              <CheckCircle className="w-12 h-12 text-success mx-auto mb-4" />
              <h3 className="font-bold mb-2">An engagement system proven to convert</h3>
            </Card>
          </div>

          <div className="text-center">
            <Button 
              size="lg" 
              onClick={handleJoinWorkshop}
              className="gradient-cta text-white text-xl px-12 py-6 shadow-strong"
            >
              JOIN THE WORKSHOP!
            </Button>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="py-20 bg-card">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Why This Works</h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-4xl mx-auto">
            Most people overcomplicate community launches: endless planning, courses that never get finished, 
            and platforms that stall growth.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <Card className="p-8 shadow-medium border-0">
              <h3 className="text-xl font-bold text-feature mb-4">Launch first → validate fast</h3>
            </Card>
            <Card className="p-8 shadow-medium border-0">
              <h3 className="text-xl font-bold text-feature mb-4">Use AI to do the heavy lifting</h3>
            </Card>
            <Card className="p-8 shadow-medium border-0">
              <h3 className="text-xl font-bold text-feature mb-4">Build in monetization from Day 1</h3>
            </Card>
          </div>

          <p className="text-xl text-muted-foreground mb-8">
            That's why this system has helped me and my clients launch profitable communities without wasting months.
          </p>

          <Button 
            size="lg" 
            onClick={handleJoinWorkshop}
            className="gradient-cta text-white text-xl px-12 py-6 shadow-strong"
          >
            JOIN THE WORKSHOP!
          </Button>
        </div>
      </section>

      {/* Investment Section */}
      <section className="py-20 bg-gradient-to-br from-secondary via-secondary-hover to-accent text-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Your Investment</h2>
          <p className="text-xl text-white/90 mb-4">This workshop could easily be priced at $197+.</p>
          <p className="text-xl text-white/90 mb-8">But you can get full access today for:</p>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 max-w-md mx-auto mb-8">
            <div className="text-6xl font-bold text-primary mb-4">FREE</div>
            <p className="text-xl text-white/90 mb-6">Complete Workshop Access</p>
            <Button 
              size="lg" 
              onClick={handleJoinWorkshop}
              className="w-full bg-primary hover:bg-primary-hover text-white font-bold text-xl py-4 shadow-strong"
            >
              JOIN THE WORKSHOP!
            </Button>
          </div>

          <div className="flex items-center justify-center gap-2 mb-8">
            <Shield className="w-6 h-6 text-success" />
            <p className="text-white/90">
              Risk-Free Guarantee: If you attend and don't walk away with your community fully set up 
              and ready to launch, I'll refund you 100% — no questions asked.
            </p>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-primary text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
            Ready to Launch Your Community?
          </h2>
          <Button 
            size="lg" 
            onClick={handleJoinWorkshop}
            className="bg-white text-primary hover:bg-white/90 text-xl px-12 py-6 font-bold shadow-strong mb-8"
          >
            Yes! Save My Seat for the Workshop
          </Button>
          
          <p className="text-white/90 text-lg mb-4">
            Seats are limited to keep this interactive and implementation-focused.
          </p>
          <p className="text-white/90 text-lg">
            Don't wait — secure your spot before early bird pricing disappears.
          </p>
        </div>
      </section>

      {/* Next Step */}
      <section className="py-16 bg-muted text-center">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold mb-4">Next Step After the Workshop</h2>
          <p className="text-muted-foreground mb-8 max-w-3xl mx-auto">
            Once your community is launched, the next step is scaling it to $10K+/month with ads 
            and our Community Funnel Framework. But first — let's get your community live.
          </p>
          <Button 
            size="lg" 
            onClick={handleJoinWorkshop}
            className="gradient-cta text-white text-lg px-10 py-5"
          >
            Join the Community Launch Accelerator Workshop Now
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Landing;