import Image from "next/image";
import SectionIntro from "@/components/ui/SectionIntro";
import {
  EXECUTIVE_BOARD,
  MEMBER_PHOTO_VERSION,
  PROJECT_LEAD_SUBSECTIONS,
  type Member,
} from "@/lib/members";

function memberPhotoSrc(src: string) {
  const sep = src.includes("?") ? "&" : "?";
  return `${src}${sep}v=${MEMBER_PHOTO_VERSION}`;
}

function BoardHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl items-center gap-4">
      <div className="h-px min-w-0 flex-1 bg-border" aria-hidden />
      <h2 className="shrink-0 whitespace-nowrap px-2 font-heading text-base font-semibold uppercase tracking-[0.18em] text-foreground md:text-lg">
        {title}
      </h2>
      <div className="h-px min-w-0 flex-1 bg-border" aria-hidden />
    </div>
  );
}

function SubsectionHeading({ title }: { title: string }) {
  return (
    <div className="mx-auto flex w-full max-w-5xl items-center gap-3">
      <div className="h-px min-w-0 flex-1 bg-border/70" aria-hidden />
      <h3 className="shrink-0 whitespace-nowrap px-2 font-heading text-sm font-semibold uppercase tracking-[0.14em] text-muted md:text-base">
        {title}
      </h3>
      <div className="h-px min-w-0 flex-1 bg-border/70" aria-hidden />
    </div>
  );
}

function MemberCard({ member }: { member: Member }) {
  return (
    <article className="flex flex-col border border-border bg-background/90">
      <div className="relative aspect-[4/5] w-full overflow-hidden bg-surface">
        {member.photoSrc ? (
          <Image
            src={memberPhotoSrc(member.photoSrc)}
            alt=""
            fill
            unoptimized
            className="object-cover"
            sizes="(max-width: 768px) 100vw, 33vw"
          />
        ) : (
          <div
            className="absolute inset-0 bg-zinc-950"
            aria-hidden
          />
        )}
      </div>
      <div className="border-t border-border px-4 py-4">
        <h3 className="font-heading text-base font-bold uppercase leading-snug tracking-wide text-foreground md:text-lg">
          {member.name}
        </h3>
        {member.role ? (
          <p className="mt-1.5 text-sm leading-snug text-muted">{member.role}</p>
        ) : null}
      </div>
    </article>
  );
}

function MemberGrid({
  groupKey,
  members,
}: {
  groupKey: string;
  members: Member[];
}) {
  return (
    <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3 md:gap-6">
      {members.map((m, i) => (
        <MemberCard key={`${groupKey}-${i}`} member={m} />
      ))}
    </div>
  );
}

export default function MembersSection() {
  return (
    <section
      id="members"
      className="section-padding border-t border-border bg-surface"
    >
      <div className="section-container">
        <SectionIntro kicker="Members" title="Leadership & leads" />

        <div className="mt-14 space-y-16 md:mt-16 md:space-y-20">
          <div>
            <BoardHeading title={EXECUTIVE_BOARD.title} />
            <div className="mx-auto mt-10 max-w-6xl md:mt-12">
              <MemberGrid
                groupKey={EXECUTIVE_BOARD.title}
                members={EXECUTIVE_BOARD.members}
              />
            </div>
          </div>

          <div>
            <BoardHeading title="Project leads" />
            <div className="mt-12 space-y-14 md:mt-14 md:space-y-16">
              {PROJECT_LEAD_SUBSECTIONS.map((subsection) => (
                <div key={subsection.title}>
                  <SubsectionHeading title={subsection.title} />
                  {subsection.members.length > 0 ? (
                    <div className="mx-auto mt-8 max-w-6xl md:mt-10">
                      <MemberGrid
                        groupKey={subsection.title}
                        members={subsection.members}
                      />
                    </div>
                  ) : null}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
