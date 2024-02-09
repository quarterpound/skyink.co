import Link from "next/link";
import LogoIcon from "../icons/logo";
import {
  Bars3Icon,
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";

const Header = () => {
  return (
    <header className="flex justify-between items-center py-10 md:px-10 px-6 mx-auto">
      <Bars3Icon className="w-6 h-6" />
      <LogoIcon className="w-[150px]" />
      <div className="flex gap-4">
        <MagnifyingGlassIcon className="w-6 h-6" />
        <Link href={"/cart"}>
          <ShoppingCartIcon className="w-6 h-6" />
        </Link>
      </div>
    </header>
  );
};

export default Header;
