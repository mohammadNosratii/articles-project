import { Input } from "@nextui-org/react";
import Search from "../../../assets/icons/Search";

export default function SearchInput({ register }) {
  return (
    <Input
      {...register}
      label="برای سرچ تایپ کنید ..."
      radius="lg"
      classNames={{
        label: "dark:text-white hover:text-black text-xs",
        innerWrapper: "bg-transparent",
        inputWrapper: [
          "h-6",
          "shadow-xl",
          "bg-gray-300",
          "dark:bg-gray-800",
          "backdrop-blur-xl",
          "backdrop-saturate-200",
          "hover:bg-[#E38A39]",
          "dark:hover:bg-default/60",
          "group-data-[focus=true]:shadow-normal",
          "dark:group-data-[focus=true]:bg-default/60",
          "!cursor-text",
        ],
      }}
      endContent={
        <button type="submit">
          <Search className="text-black/50 mb-0.5 dark:text-white/90 text-slate-400 pointer-events-none flex-shrink-0" />
        </button>
      }
    />
  );
}
