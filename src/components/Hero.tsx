import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-subtle">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src="/lovable-uploads/6fd635f9-c6f8-41fd-a8a2-2c535ddfc24c.png"
          alt="Connection and growth"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-subtle/80"></div>
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-accent/50 backdrop-blur-sm text-accent-foreground px-4 py-2 rounded-full text-sm font-medium mb-8 shadow-soft">
            <Heart className="w-4 h-4 text-primary" />
            함께 성장하는 코칭 커뮤니티
          </div>
          
          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 leading-tight">
            <span className="block">성장하고 싶은</span>
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              모든 사람들을
            </span>
            <span className="block">연결합니다</span>
          </h1>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto leading-relaxed">
            코칭을 배우고 싶은 분들과 저렴하게 코칭을 체험하고 싶은 분들을 
            <br className="hidden md:block" />
            안전하고 따뜻한 온라인 공간에서 만날 수 있도록 도와드립니다.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button variant="hero" size="lg" className="text-lg px-8 py-4">
              코칭 체험하기
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button variant="warm" size="lg" className="text-lg px-8 py-4">
              <Users className="w-5 h-5" />
              코치로 참여하기
            </Button>
          </div>
          
          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-2xl mx-auto">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">성장 세션</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">200+</div>
              <div className="text-muted-foreground">활발한 멤버</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">4.8★</div>
              <div className="text-muted-foreground">평균 만족도</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;