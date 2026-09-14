import { useProducts } from "@/hooks/useProducts";
import { useCategories } from "@/hooks/useCategories";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Skeleton } from "@/components/ui/skeleton";

export default function DashboardPage() {
  const { data: products, isLoading, error } = useProducts();
  const { data: categories } = useCategories();

  const getSubcategoryPath = (subcategoryId: number) => {
    for (const category of categories ?? []) {
      const sub = category.subcategories.find((s) => s.id === subcategoryId);
      if (sub) return `${category.name} > ${sub.name}`;
    }
    return null;
  };

  return (
    <div>
      <h2 className="text-2xl font-bold">Welcome back 👋</h2>
      <p className="text-muted-foreground mt-2">This is your dashboard.</p>

      <h3 className="text-xl font-semibold mt-8 mb-4">Products</h3>

      {isLoading && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <Skeleton key={i} className="h-64 w-full rounded-lg" />
          ))}
        </div>
      )}

      {error && (
        <p className="text-sm text-destructive">Failed to load products.</p>
      )}

      {!isLoading && !error && products?.length === 0 && (
        <p className="text-sm text-muted-foreground">No products yet.</p>
      )}

      {!isLoading && !error && products && products.length > 0 && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden">
              <img
                src={product.image}
                alt={product.title}
                className="h-40 w-full object-cover"
              />
              <CardHeader>
                <div className="flex items-start justify-between gap-2">
                  <CardTitle className="text-base">{product.title}</CardTitle>
                  <Badge variant="secondary">₹{product.price}</Badge>
                </div>
              </CardHeader>
              <CardContent>
                {getSubcategoryPath(product.subcategory) && (
                  <p className="text-xs text-muted-foreground mb-2">
                    {getSubcategoryPath(product.subcategory)}
                  </p>
                )}
                <p className="text-sm text-muted-foreground line-clamp-3">
                  {product.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
