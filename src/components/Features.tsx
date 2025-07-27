import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { MessageCircle, Users, Star, BookOpen, Video, Heart } from "lucide-react";

const Features = () => {
  const features = [
    {
      icon: Users,
      title: "1:1 매칭 시스템",
      description: "시간대와 관심 주제를 기반으로 최적의 코치와 내담자를 연결해드립니다.",
      color: "text-primary"
    },
    {
      icon: Video,
      title: "온라인 실습 세션",
      description: "Zoom, Google Meet을 통한 안전하고 편리한 온라인 코칭 세션을 제공합니다.",
      color: "text-primary-glow"
    },
    {
      icon: Star,
      title: "피드백 시스템",
      description: "매 세션 후 상호 피드백을 통해 지속적인 성장과 신뢰도를 구축합니다.",
      color: "text-primary"
    },
    {
      icon: MessageCircle,
      title: "따뜻한 커뮤니티",
      description: "성장 일기, 고민 나누기, 자유로운 소통이 가능한 안전한 공간입니다.",
      color: "text-primary-glow"
    },
    {
      icon: BookOpen,
      title: "성장 리소스",
      description: "코칭 도구, 추천 도서, 성찰 질문 등 유용한 자료를 공유합니다.",
      color: "text-primary"
    },
    {
      icon: Heart,
      title: "저렴한 비용",
      description: "실습 기반의 세션으로 부담 없는 가격에 양질의 코칭을 경험하세요.",
      color: "text-primary-glow"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            <span className="bg-gradient-hero bg-clip-text text-transparent">
              GrowTogether
            </span>
            가 특별한 이유
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            코칭을 배우고 싶은 분들과 코칭을 받고 싶은 분들, 
            모두에게 가치 있는 경험을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="group hover:shadow-warm transition-all duration-300 hover:-translate-y-2 bg-card border-border/50">
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-subtle rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground text-center leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;