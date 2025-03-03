"use client";
import Hero from "@/components/Hero";
import { useParams } from "next/navigation";

const ProductPage = () => {
  const params = useParams();
  const id = Array.isArray(params.id) ? params.id[0] : params.id;

  return (
    <div className="min-h-screen">
      <Hero id={id as string}/>
    </div>
  );
};

export default ProductPage;
