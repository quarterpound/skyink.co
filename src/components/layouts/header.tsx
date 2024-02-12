import Link, { LinkProps } from "next/link";
import LogoGradient from "@/components/icons/logo_gradient";
import { AnchorHTMLAttributes } from "react";
import { cn } from "@/utils/tailwind";

const NavLink = ({
  className,
  ...props
}: LinkProps & AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <Link {...props} className={cn("uppercase", className)} />
);

const Header = () => {
  return (
    <header className="container flex h-32 w-full items-center justify-between py-10">
      <nav className="flex gap-5">
        <NavLink href={"/shop"} className="uppercase">
          Shop
        </NavLink>
        <NavLink href={"/about"} className="uppercase">
          About
        </NavLink>
      </nav>
      <Link href={"/"}>
        <LogoGradient className="h-24 w-fit" />
      </Link>
      <nav>
        <NavLink href={"/cart"} className="uppercase">
          Cart
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
