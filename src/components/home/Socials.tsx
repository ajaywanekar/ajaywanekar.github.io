import { site } from "@/data/profile";
import { GitHubIcon, LinkedInIcon, MailIcon } from "../icons";

/** Square icon buttons for email and any social profiles that are set. */
export function Socials() {
  const links = [
    { href: `mailto:${site.email}`, label: "Email", Icon: MailIcon },
    { href: site.github, label: "GitHub", Icon: GitHubIcon },
    { href: site.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
  ].filter((l) => l.href);

  return (
    <div className="flex items-center gap-2">
      {links.map(({ href, label, Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          {...(href.startsWith("http") && { target: "_blank", rel: "noopener" })}
          className="grid size-10 place-items-center rounded-xl border border-line bg-glass text-muted transition hover:border-white/25 hover:text-fg"
        >
          <Icon className="size-[18px]" />
        </a>
      ))}
    </div>
  );
}
