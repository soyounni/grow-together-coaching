import { Heart } from "lucide-react";

const Footer = () => {
  return (
    <footer className="py-12 bg-foreground text-background">
      <div className="container mx-auto px-6">
        <div className="text-center">
          {/* Logo */}
          <div className="flex items-center justify-center gap-2 mb-6">
            <Heart className="w-6 h-6 text-primary-glow" />
            <h3 className="text-2xl font-bold">GrowTogether</h3>
          </div>
          
          {/* Description */}
          <p className="text-background/80 mb-8 max-w-2xl mx-auto">
            코칭을 배우고 싶은 사람들과 코칭을 체험하고 싶은 사람들을 연결하는 
            따뜻한 성장 커뮤니티입니다.
          </p>
          
          {/* Links */}
          <div className="flex flex-wrap justify-center gap-8 mb-8 text-sm">
            <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
              서비스 소개
            </a>
            <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
              이용약관
            </a>
            <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
              개인정보처리방침
            </a>
            <a href="#" className="text-background/80 hover:text-primary-glow transition-colors">
              문의하기
            </a>
          </div>
          
          {/* Copyright */}
          <div className="border-t border-background/20 pt-6">
            <p className="text-background/60 text-sm">
              © 2024 GrowTogether. Made with{" "}
              <Heart className="w-4 h-4 inline text-primary-glow" />{" "}
              for everyone's growth.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;