"use client";

import { input } from "@/styles/global";
import { useLocale } from "next-intl";
import Image from "next/image";
import { useRouter } from "next/navigation";

type Props = {};

export const Search = (props: Props) => {
  const router = useRouter();
  const locale = useLocale();

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const name = formData.get("search") as string;
    if (name) {
      router.push(`/${locale}/list?name=${name}`);
    }
  };
  return (
    <form
      className="flex flex-1 bg-gray-200 h-10 items-center justify-between gap-4 px-2 py-4 rounded-md"
      onSubmit={(e) => handleSearch(e)}
    >
      <input
        className={`${input} flex-1 bg-transparent outline-none text-sm text-black placeholder:text-black`}
        type="text"
        name="search"
        placeholder="Search"
      />
      <button>
        <Image width={20} height={20} src={"/search.png"} alt="search" />
      </button>
    </form>
  );
};
