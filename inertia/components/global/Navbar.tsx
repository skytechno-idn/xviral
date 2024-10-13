import {
  Navbar as Nav,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from '@nextui-org/react'

export default function Navbar() {
  return (
    <Nav isBordered maxWidth="xl">
      <NavbarBrand>
        {/* LOGO */}
        <p className="font-bold text-inherit">ACME</p>
      </NavbarBrand>
      <NavbarContent className="hidden gap-4 sm:flex" justify="center">
        <NavbarItem>
          <Link color="foreground" href="#">
            Features
          </Link>
        </NavbarItem>
        <NavbarItem isActive>
          <Link href="#" aria-current="page">
            Customers
          </Link>
        </NavbarItem>
        <NavbarItem>
          <Link color="foreground" href="#">
            Integrations
          </Link>
        </NavbarItem>
      </NavbarContent>
      <NavbarContent justify="end" className="gap-1">
        <NavbarItem className="hidden lg:flex">
          <Button size="sm" as={Link} color="primary" href="#" variant="flat">
            Login
          </Button>
        </NavbarItem>
        <NavbarItem>
          <Button size="sm" as={Link} color="primary" href="#">
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>
    </Nav>
  )
}
