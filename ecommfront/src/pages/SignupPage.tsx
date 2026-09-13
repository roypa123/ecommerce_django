import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useSignup } from "@/hooks/useSignup";

export default function SignupPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  const { mutate, isPending, error } = useSignup();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutate({ name, email, password }, { onSuccess: () => navigate("/") });
  };

  return (
  <div className="flex min-h-screen items-center justify-center">
    <Card className="w-full max-w-sm">
        <CardHeader>
            <CardTitle>Create an account</CardTitle>
        </CardHeader>
        <CardContent>
            <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" value={name} onChange={(e)=>setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input id="email" type="email" value={email} onChange={(e)=>setEmail(e.target.value)} required/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor="password">Password</Label>
                    <Input id="password" type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                </div>
                {error && <p className="text-sm text-destructive">Signup failed. Please check your details.</p>}
                <Button type="submit" className="w-full" disabled={isPending}>
                    {isPending ? "Creating account..." : "Sign up"}

                </Button>
            </form>
        </CardContent>
    </Card>
  </div>
  );
}
