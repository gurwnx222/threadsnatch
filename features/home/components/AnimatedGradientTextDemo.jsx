import { cn } from "@/lib/utils";
import { AnimatedGradientText } from "@/components/magicui/animated-gradient-text";
import { ChevronRight, Images } from "lucide-react";
import Image from "next/image";



export function AnimatedGradientTextDemo({text, img}) {
  return (
    <div className="w-36 gap-1 group relative mx-auto flex items-center justify-center rounded-full px-2 py-1 shadow-[inset_0_-6px_8px_#8fdfff1f] transition-shadow duration-500 ease-out hover:shadow-[inset_0_-4px_8px_#8fdfff3f]">
      <span
        className={cn(
          "absolute inset-0 block h-full w-full animate-gradient rounded-[inherit] bg-gradient-to-r from-[#ffaa40]/50 via-[#9c40ff]/50 to-[#ffaa40]/50 bg-[length:300%_100%] p-[1px]"
        )}
        style={{
          WebkitMask:
            "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          WebkitMaskComposite: "destination-out",
          mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
          maskComposite: "subtract",
          WebkitClipPath: "padding-box",
        }}
      />
      {img && (
        <Image src={img} alt="Rocket" width={12} height={12} />
      )}
      <AnimatedGradientText className="text-xs font-medium leading-none">
       {text}
      </AnimatedGradientText>
      <ChevronRight
        className="ml-1 size-3 stroke-neutral-500 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"
      />
    </div>
  );
}
