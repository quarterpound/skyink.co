import Link from "next/link";
import LogoGradient from "@/components/icons/logo_gradient";
import HamburgerMenu from "@/components/icons/hamburger_menu";
import ShoppingCart from "@/components/icons/shopping_cart";

const Header = () => {
  return (
    <header className="container flex h-32 w-full items-center justify-between py-10">
      <button role="menu" aria-label="Menu">
        <HamburgerMenu className="h-8 w-8" />
      </button>
      <Link href={"/"}>
        <LogoGradient className="h-24 w-24" />
      </Link>
      <button role="tab" aria-label="Shopping cart">
        <ShoppingCart className="h-8 w-8" />
      </button>
    </header>
  );
};

export default Header;
