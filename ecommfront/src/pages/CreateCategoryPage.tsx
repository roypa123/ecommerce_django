import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useCreateCategory } from "@/hooks/useCreateCategory";

export default function CreateCategoryPage() {
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();
  const { mutate, isPending, error } = useCreateCategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image) return;
    mutate({ name, image }, { onSuccess: () => navigate("/dashboard") });
  };

  return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create Category</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="image">Image</Label>
            <Input
              id="image"
              type="file"
              accept="image/*"
              onChange={(e) => setImage(e.target.files?.[0] ?? null)}
              required
            />
          </div>
          {error && <p className="text-sm text-destructive">Failed to create category.</p>}
           <Button type="submit" className="w-full" disabled={isPending}>
              {isPending ? "Creating..." : "Create Category" }

           </Button>
        </form>
      </CardContent>
    </Card>
  );
}
