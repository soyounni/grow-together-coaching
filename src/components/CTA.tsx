import { Button } from "@/components/ui/button";
import { ArrowRight, Heart, Users, Sparkles } from "lucide-react";

const CTA = () => {
  return (
    <section className="py-24 bg-gradient-hero relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 left-10 w-20 h-20 bg-primary-foreground rounded-full blur-xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-primary-foreground rounded-full blur-xl"></div>
        <div className="absolute top-1/2 left-1/3 w-16 h-16 bg-primary-foreground rounded-full blur-xl"></div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Icon */}
          <div className="inline-flex items-center justify-center w-16 h-16 bg-primary-foreground/20 backdrop-blur-sm rounded-full mb-8">
            <Sparkles className="w-8 h-8 text-primary-foreground" />
          </div>
          
          {/* Heading */}
          <h2 className="text-4xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
            오늘부터 함께
            <br className="hidden md:block" />
            성장해보세요
          </h2>
          
          {/* Subheading */}
          <p className="text-xl md:text-2xl text-primary-foreground/90 mb-12 max-w-3xl mx-auto leading-relaxed">
            코칭을 배우고 싶으신가요? 아니면 코칭을 체험해보고 싶으신가요?
            <br className="hidden md:block" />
            어떤 목적이든, GrowTogether에서 따뜻한 성장의 여정을 시작하세요.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center mb-12">
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-primary-foreground text-primary hover:bg-primary-foreground/90 border-primary-foreground hover:scale-105 transition-all duration-300 shadow-lg"
            >
              <Heart className="w-5 h-5" />
              코칭 받아보기
              <ArrowRight className="w-5 h-5" />
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="text-lg px-8 py-4 bg-transparent text-primary-foreground border-primary-foreground/50 hover:bg-primary-foreground/10 hover:scale-105 transition-all duration-300"
            >
              <Users className="w-5 h-5" />
              코치로 시작하기
            </Button>
          </div>
          
          {/* Trust indicators */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-primary-foreground/80">
            <div className="flex items-center gap-2">
              <Heart className="w-5 h-5" />
              <span>100% 무료 체험</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5" />
              <span>안전한 커뮤니티</span>
            </div>
            <div className="hidden sm:block w-px h-4 bg-primary-foreground/30"></div>
            <div className="flex items-center gap-2">
              <Sparkles className="w-5 h-5" />
              <span>즉시 시작 가능</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA;