import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useCategories } from "@/hooks/useCategories";
import { useCreateSubcategory } from "@/hooks/useCreateSubcategory";


export default function CreateSubcategoryPage() {
  const [categoryId, setCategoryId] = useState<string>("");
  const [name, setName] = useState("");
  const [image, setImage] = useState<File | null>(null);
  const navigate = useNavigate();

  const { data: categories, isLoading: categoriesLoading } = useCategories();
  const { mutate, isPending, error } = useCreateSubcategory();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!image || !categoryId) return;
    mutate(
      { category: Number(categoryId), name, image },
      { onSuccess: () => navigate("/dashboard") }
    );
  };
   return (
    <Card className="w-full max-w-sm">
      <CardHeader>
        <CardTitle>Create Subcategory</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={categoryId} onValueChange={setCategoryId} required>
              <SelectTrigger id="category" className="w-full">
                <SelectValue placeholder={categoriesLoading ? "Loading..." : "Select a category"} />
              </SelectTrigger>
              <SelectContent>
                {categories?.map((cat) => (
                  <SelectItem key={cat.id} value={String(cat.id)}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="name">Name</Label>
            <Input id="name" value={name} onChange={(e) => setName(e.target.value)} required />
          </div>
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
          {error && <p className="text-sm text-destructive">Failed to create subcategory.</p>}
          <Button type="submit" className="w-full" disabled={isPending}>
            {isPending ? "Creating..." : "Create Subcategory"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}