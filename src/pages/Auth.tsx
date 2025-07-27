import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { useAuth } from '@/hooks/useAuth';
import { useToast } from '@/hooks/use-toast';

export default function Auth() {
  const navigate = useNavigate();
  const { signUp, signIn, user } = useAuth();
  const { toast } = useToast();
  
  const [loading, setLoading] = useState(false);
  const [signUpData, setSignUpData] = useState({
    email: '',
    password: '',
    fullName: '',
    role: 'client' as 'coach' | 'client',
    experienceReason: '',
  });
  
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });

  // Redirect if already authenticated
  if (user) {
    navigate('/');
    return null;
  }

  const handleSignUp = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signUp(signUpData.email, signUpData.password, {
      fullName: signUpData.fullName,
      role: signUpData.role,
      experienceReason: signUpData.experienceReason,
    });

    if (error) {
      toast({
        title: "회원가입 실패",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "회원가입 성공!",
        description: "이메일 확인 후 로그인해주세요.",
      });
      setSignUpData({
        email: '',
        password: '',
        fullName: '',
        role: 'client',
        experienceReason: '',
      });
    }

    setLoading(false);
  };

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const { error } = await signIn(signInData.email, signInData.password);

    if (error) {
      toast({
        title: "로그인 실패",
        description: error.message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "로그인 성공!",
        description: "GrowTogether에 오신 것을 환영합니다.",
      });
      navigate('/');
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-primary flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader className="text-center">
          <CardTitle className="text-2xl font-bold bg-gradient-warm bg-clip-text text-transparent">
            GrowTogether
          </CardTitle>
          <CardDescription>
            함께 성장하는 코칭 커뮤니티
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Tabs defaultValue="signin" className="w-full">
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="signin">로그인</TabsTrigger>
              <TabsTrigger value="signup">회원가입</TabsTrigger>
            </TabsList>
            
            <TabsContent value="signin">
              <form onSubmit={handleSignIn} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signin-email">이메일</Label>
                  <Input
                    id="signin-email"
                    type="email"
                    value={signInData.email}
                    onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signin-password">비밀번호</Label>
                  <Input
                    id="signin-password"
                    type="password"
                    value={signInData.password}
                    onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "로그인 중..." : "로그인"}
                </Button>
              </form>
            </TabsContent>
            
            <TabsContent value="signup">
              <form onSubmit={handleSignUp} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="signup-email">이메일</Label>
                  <Input
                    id="signup-email"
                    type="email"
                    value={signUpData.email}
                    onChange={(e) => setSignUpData({ ...signUpData, email: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="signup-password">비밀번호</Label>
                  <Input
                    id="signup-password"
                    type="password"
                    value={signUpData.password}
                    onChange={(e) => setSignUpData({ ...signUpData, password: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="fullName">이름</Label>
                  <Input
                    id="fullName"
                    value={signUpData.fullName}
                    onChange={(e) => setSignUpData({ ...signUpData, fullName: e.target.value })}
                    required
                  />
                </div>
                
                <div className="space-y-3">
                  <Label>역할</Label>
                  <RadioGroup
                    value={signUpData.role}
                    onValueChange={(value: 'coach' | 'client') => 
                      setSignUpData({ ...signUpData, role: value })
                    }
                  >
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="client" id="client" />
                      <Label htmlFor="client">내담자 (코칭을 받고 싶어요)</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <RadioGroupItem value="coach" id="coach" />
                      <Label htmlFor="coach">코치 (코칭을 배우고 실습하고 싶어요)</Label>
                    </div>
                  </RadioGroup>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="experienceReason">
                    {signUpData.role === 'coach' 
                      ? '코칭을 배우려는 이유' 
                      : '코칭을 받고 싶은 이유'}
                  </Label>
                  <Textarea
                    id="experienceReason"
                    value={signUpData.experienceReason}
                    onChange={(e) => setSignUpData({ ...signUpData, experienceReason: e.target.value })}
                    placeholder={
                      signUpData.role === 'coach'
                        ? '예: 사람들의 성장을 돕고 싶어서, 새로운 커리어를 위해...'
                        : '예: 자기계발을 위해, 목표 달성을 위해, 관계 개선을 위해...'
                    }
                    required
                  />
                </div>
                
                <Button type="submit" className="w-full" disabled={loading}>
                  {loading ? "가입 중..." : "회원가입"}
                </Button>
              </form>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  );
}