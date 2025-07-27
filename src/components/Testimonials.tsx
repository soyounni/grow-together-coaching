import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star } from "lucide-react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "김민지",
      role: "코칭 수강생",
      content: "처음에는 코칭이 어떤 건지 궁금해서 신청했는데, 정말 따뜻하고 안전한 분위기에서 많은 것을 배울 수 있었어요. 저렴한 가격에 이런 경험을 할 수 있다니!",
      rating: 5,
      initials: "김민"
    },
    {
      name: "박준호",
      role: "코치 지망생",
      content: "이론만 배우다가 실제 사람들과 코칭을 연습할 수 있어서 너무 좋았습니다. 피드백도 정말 도움이 되고, 점점 자신감이 생기고 있어요.",
      rating: 5,
      initials: "박준"
    },
    {
      name: "이수연",
      role: "코칭 체험자",
      content: "혼자 고민하던 것들을 누군가와 나누고 새로운 관점을 얻을 수 있었어요. 코치분도 정말 성실하게 준비해주셔서 감동받았습니다.",
      rating: 5,
      initials: "이수"
    },
    {
      name: "최동욱",
      role: "코치 지망생", 
      content: "실습 기회가 정말 부족했는데 GrowTogether 덕분에 많은 경험을 쌓을 수 있었습니다. 커뮤니티 분위기도 정말 따뜻해요.",
      rating: 5,
      initials: "최동"
    },
    {
      name: "정예린",
      role: "코칭 체험자",
      content: "처음에는 온라인 세션이 어색할까 걱정했는데, 오히려 집에서 편안하게 받을 수 있어서 더 솔직하게 이야기할 수 있었어요.",
      rating: 5,
      initials: "정예"
    },
    {
      name: "한성민",
      role: "코치 지망생",
      content: "각 세션마다 받는 피드백이 정말 구체적이고 도움이 됩니다. 내 강점과 개선점을 명확히 알 수 있어서 성장이 빨라졌어요.",
      rating: 5,
      initials: "한성"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            함께 성장한 <span className="bg-gradient-hero bg-clip-text text-transparent">사람들의 이야기</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            실제 GrowTogether 커뮤니티 멤버들이 전하는 진솔한 후기입니다.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card/80 backdrop-blur-sm border-border/50 hover:shadow-warm transition-all duration-300 hover:-translate-y-1">
              <CardContent className="p-6">
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                  "{testimonial.content}"
                </blockquote>
                
                <div className="flex items-center gap-3">
                  <Avatar className="bg-gradient-hero">
                    <AvatarFallback className="bg-gradient-hero text-primary-foreground font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold text-foreground">{testimonial.name}</div>
                    <div className="text-sm text-muted-foreground">{testimonial.role}</div>
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

export default Testimonials;