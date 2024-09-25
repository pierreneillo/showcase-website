import { MdOpenInNew } from "react-icons/md";
import Image from "next/image";
import { StaticImport } from "next/dist/shared/lib/get-img-props";

import { getDictionary } from "@/locales/dictionaries";
import { LocaleParams } from "@/locales/config";

import { Block } from "@/components/styles/blocks";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Paragraphs } from "@/components/styles/texts";
import { BtnLink } from "@/components/telecom-etude/contact";

import Bain from "@/../public/images/companies/partners/bain.svg";
import BearingPoint from "@/../public/images/companies/partners/bearingpoint.svg";
import KPMG from "@/../public/images/companies/partners/kpmg.svg";

interface PartnerProps {
    title: string;
    logo: StaticImport;
    text: string;
    url: string;
}

function Partner({ title, logo, text, url }: PartnerProps) {
    return (
        <section className="p-4">
            <Card>
                <CardHeader>
                    <CardTitle className="w-full text-center">{title}</CardTitle>
                    <CardDescription className="flex justify-center">
                        <BtnLink href={url} target="blank" className="flex items-center space-x-1">
                            <>Link</>
                            <MdOpenInNew />
                        </BtnLink>
                    </CardDescription>
                    <Separator />
                </CardHeader>
                <CardContent>
                    <Image src={logo} alt={title + " logo"} width={400} />
                    <Separator className="my-6" />
                    <p>{text}</p>
                </CardContent>
            </Card>
        </section>
    );
}

export default function Partners({ params: { locale } }: LocaleParams) {
    const t = getDictionary(locale).pages.partners;
    return (
        <Block>
            <header className="w-full h-[300px] max-h-dvh flex flex-col items-center justify-center space-y-4">
                <h1 className="font-bold">{t.title}</h1>
                <p className="text-lg max-w-[500px] text-center">{t.text}</p>
            </header>
            <div className="grid grid-cols-1 sm:grid-cols-3">
                <Partner title="Bain" url="https://www.bain.com" logo={Bain} text={"On attends en Sacha"} />
                <Partner title="BearingPoint" url="https://www.bearingpoint.com" logo={BearingPoint} text={t.bearingPoint} />
                <Partner title="KPMG" url="https://www.kpmg.com" logo={KPMG} text={t.kpmg} />
            </div>
        </Block>
    );
}
