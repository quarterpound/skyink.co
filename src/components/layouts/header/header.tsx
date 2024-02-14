import Link from "next/link";
import LogoGradient from "@/components/icons/logo_gradient";
import HamburgerMenu from "@/components/icons/hamburger_menu";
import ShoppingCart from "@/components/icons/shopping_cart";

const Header = () => {
  return (
    <header className="container flex h-16 md:h-32 w-full items-center justify-between py-10">
      <button role="menu" aria-label="Menu">
        <HamburgerMenu className="md:h-8 h-6 w-6 md:w-8" />
      </button>
      <Link href={"/"}>
        <LogoGradient className="w-10 h-10 md:h-24 md:w-24" />
      </Link>
      <button role="tab" aria-label="Shopping cart">
        <ShoppingCart className="md:h-8 h-6 w-6 md:w-8" />
      </button>
    </header>
  );
};

export default Header;
