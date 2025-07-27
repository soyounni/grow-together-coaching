import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { UserPlus, Calendar, MessageSquare, ThumbsUp } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      step: "01",
      icon: UserPlus,
      title: "회원가입 & 프로필 작성",
      description: "간단한 회원가입 후 관심 분야와 가능한 시간대를 설정하세요.",
      forCoach: "코칭 실습 경험과 관심 분야를 입력",
      forClient: "받고 싶은 코칭 주제와 선호 시간 입력"
    },
    {
      step: "02", 
      icon: Calendar,
      title: "세션 매칭 & 예약",
      description: "AI 매칭 시스템이 최적의 파트너를 찾아드립니다.",
      forCoach: "실습 세션을 열고 신청자를 확인",
      forClient: "원하는 세션에 신청하고 승인 대기"
    },
    {
      step: "03",
      icon: MessageSquare,
      title: "온라인 코칭 세션",
      description: "Zoom이나 Google Meet을 통해 안전한 온라인 세션을 진행합니다.",
      forCoach: "실제 코칭 기법을 연습하고 경험 축적",
      forClient: "편안한 환경에서 1:1 코칭 체험"
    },
    {
      step: "04",
      icon: ThumbsUp,
      title: "피드백 & 성장",
      description: "세션 후 상호 피드백을 작성하여 함께 성장합니다.",
      forCoach: "코칭 스킬에 대한 건설적 피드백 수령",
      forClient: "세션 경험 공유로 커뮤니티에 기여"
    }
  ];

  return (
    <section className="py-24 bg-gradient-subtle">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            어떻게 <span className="bg-gradient-hero bg-clip-text text-transparent">시작</span>하나요?
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            몇 가지 간단한 단계만 거치면 바로 성장의 여정을 시작할 수 있습니다.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <Card key={index} className="relative overflow-hidden bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300 group">
              {/* Step Number Badge */}
              <div className="absolute top-4 right-4">
                <Badge variant="outline" className="bg-primary text-primary-foreground border-primary text-sm font-bold px-3 py-1">
                  {step.step}
                </Badge>
              </div>

              <CardHeader className="text-center pt-8">
                <div className="mx-auto mb-4 w-16 h-16 bg-gradient-hero rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                  <step.icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <CardTitle className="text-xl font-bold text-foreground">
                  {step.title}
                </CardTitle>
              </CardHeader>

              <CardContent className="space-y-4">
                <p className="text-muted-foreground text-center leading-relaxed">
                  {step.description}
                </p>
                
                <div className="space-y-3 pt-4 border-t border-border/50">
                  <div className="bg-accent/30 rounded-lg p-3">
                    <div className="text-sm font-medium text-primary mb-1">🧑‍🏫 코치 지망생</div>
                    <div className="text-sm text-muted-foreground">{step.forCoach}</div>
                  </div>
                  
                  <div className="bg-accent/30 rounded-lg p-3">
                    <div className="text-sm font-medium text-primary mb-1">🌱 코칭 체험자</div>
                    <div className="text-sm text-muted-foreground">{step.forClient}</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;