import Experience from "@/components/Experience";
import LinkWithIcon from "@/components/LinkWithIcon";
import Projects from "@/components/Projects";
import Socials from "@/components/Socials";
import Techstack from "@/components/Techstack";
import { Button } from "@/components/ui/Button";
import { getPosts } from "@/lib/posts";
import {
  ArrowDownRight,
  ArrowRightIcon,
  FileDown
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import path from "path";

const blogDirectory = path.join(process.cwd(), "content");
const TED_BIRTH_YEAR = 2000;
const LIMIT = 4; // max show 2

export default async function Home() {
  const posts = await getPosts(blogDirectory, LIMIT);

  return (
    <article className="mt-8 flex flex-col gap-16 pb-16">
      <section className="flex flex-col items-start gap-8 md:flex-row-reverse md:items-center md:justify-between">
        <Image
          className="rounded-lg"
          src="/self.jpg"
          alt="Photo of Ted"
          width={175}
          height={175}
          priority
        />
        <div className="flex flex-col">
          <h1 className="title text-5xl">Hi, Omkar here 👋</h1>
          <p className="mt-4 font-light">
            25 year old Software Engineer from New York and I am all about developing fullstack web, ML and iOS apps. Below are the quick highlights of my skills...
          </p>
          <br></br>
          <p>
            <Techstack label="React" ic="react" />
            <Techstack label="Astro" ic="astro" />
            <Techstack label="Next.js" ic="next" />
            <Techstack label="Swift" ic="swift" />
            <Techstack label="Xcode" ic="xcode" />
            <Techstack label="VSCode" ic="vscode" />
            <Techstack label="SwiftUI" ic="swiftui" />
            <Techstack label="Node.js" ic="node" />
            <Techstack label="Express.js" ic="express" />
            <Techstack label="PHP" ic="php" />
            <Techstack label="Python" ic="python" />
            <Techstack label="Javascript" ic="js" />
            <Techstack label="PostgreSQL" ic="postgresql" />
            <Techstack label="MariaDB" ic="mariadb" />
            <Techstack label="Redis" ic="redis" />
            <Techstack label="AWS (EC2, RDS, S3, Lightsail)" ic="aws" />
            <Techstack label="Git" ic="git" />
            <Techstack label="Github Actions" ic="github" />
            <Techstack label="Docker" ic="docker" />

          </p>



          <section className="mt-8 flex items-center gap-8">
            <Link href="/omkarkaleresume.pdf" target="_blank">
              <Button variant="outline">
                <span className="font-semibold">Resume</span>
                <FileDown className="ml-2 size-5" />
              </Button>
            </Link>
            <Socials />
          </section>
        </div>
      </section>

      <Experience />

      <section className="flex flex-col gap-8">
        <h2 className="title text-2xl sm:text-3xl">featured projects</h2>
        <Projects limit={LIMIT} />
        <div className="flex justify-between">
          <LinkWithIcon
            href="/projects"
            position="right"
            icon={<ArrowRightIcon className="size-5" />}
            text="view more"
          />
        </div>
      </section>
    </article >
  );
}
