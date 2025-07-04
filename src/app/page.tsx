import CSS_TypingInput from "@/components/CSS_TypingInput";
import DragDropDemo from "@/components/DragnDrop";
import Web_Introduction from "@/components/Home/Web_Introduction";

export default function Home() {
  return (
    <div className="max-w-[90%] lg:max-w-[85%] mx-auto grid gap-10">
      <Web_Introduction />
      <DragDropDemo />
      <CSS_TypingInput />
    </div>
  );
}
