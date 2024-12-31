"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/app/_components/ui/button";
import { Card } from "@/app/_components/ui/card";

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-6 py-16 sm:py-24">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
        {/* 텍스트 콘텐츠 */}
        <div className="max-w-2xl text-center md:text-left">
          <h1 className="text-3xl sm:text-5xl font-bold leading-tight mb-6 tracking-tight">
            세상 쉬운 영상기획
            <br />
            이젠 이즐리로 하세요
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground mb-8">
            이즐리는 영상기획툴을 제공합니다
          </p>
          <Button
            asChild
            size="lg"
            className="bg-[#FF6B2B] text-white hover:bg-[#e55a1f]"
          >
            <a
              href="https://easily-dashboard.jojicompany.com/dashboard/proposal/create"
              target="_blank"
              rel="noopener noreferrer"
            >
              기획안 만들기
            </a>
          </Button>
        </div>

        {/* 이미지 콘텐츠 */}
        <Card className="relative w-full max-w-md h-64 sm:h-80 md:w-[500px] md:h-[300px] mx-auto md:mx-0">
          <Image
            src="/placeholder.svg?height=300&width=500"
            alt="Easily Beta"
            fill
            className="object-contain p-4"
          />
        </Card>
      </div>
    </div>
  );
}
