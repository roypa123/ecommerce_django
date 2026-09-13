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
                

            </form>
        </CardContent>
    </Card>
  </div>
  );
}
