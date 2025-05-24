import { Button } from "@heroui/button";
import { Link } from "react-router-dom";
import { subtitle } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";

export default function NotFoundPage() {
  return (
    <DefaultLayout>
    <div className="container mx-auto px-6 flex flex-col items-center justify-center min-h-[calc(100vh-200px)]">
      <div className="text-center">
        <h1 className="text-8xl font-bold text-primary">404</h1>
        <h2 className="text-3xl font-semibold mt-4 mb-2">Страница не найдена</h2>
        <p className={subtitle()}>
          Страница, которую вы искали, не найдена. Вернитесь на главную страницу.{" "}
        </p>
        <div className="mt-8">
          <Button
            as={Link}
            to="/"
            color="primary"
            variant="solid"
            size="lg"
            className="font-medium"
          >
            На главную
          </Button>
        </div>
      </div>
    </div>
    </DefaultLayout>
  );
}
