import Link from "next/link";
import { Button } from "../ui/button";
import { ReactNode } from "react";
import { cn } from "@/lib/utils";

export const EmailContact = ({ rgpd = false, dsi = false, text, underline = false }: { rgpd?: boolean; dsi?: boolean; text?: string; underline?: boolean }) => {
    const email = rgpd ? "secretaire.general@telecom-etude.fr" : dsi ? "info.telecom-paris.fr" : "contact@telecom-etude.fr";
    return (
        <BtnLink underline={underline} href={"mailto:" + email}>
            {text || email}
        </BtnLink>
    );
};

export const BtnLink = ({ children, href, underline = false }: { children: ReactNode; href: string; underline?: boolean }) => (
    <Button variant="link" className={cn("py-0 px-0 text-inherit underline-offset-1", underline && "underline")}>
        <Link href={href}>{children}</Link>
    </Button>
);
