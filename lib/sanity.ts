import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID || "placeholder",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || "production",
  apiVersion: "2023-05-03",
  useCdn: process.env.NODE_ENV === "production",
});

// Use createImageUrlBuilder instead of default image builder to prevent deprecation warning
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  if (!source) return "";
  return builder.image(source).url();
}

// Check if Sanity env variables are configured
export const isSanityEnabled = () => {
  return (
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID &&
    process.env.NEXT_PUBLIC_SANITY_PROJECT_ID !== "placeholder"
  );
};

export async function getPortfolioData() {
  if (!isSanityEnabled()) {
    return null;
  }

  try {
    const profileQuery = `*[_type == "profile"][0]`;
    const projectsQuery = `*[_type == "project"] | order(_createdAt asc)`;
    const experienceQuery = `*[_type == "experience"] | order(_createdAt desc)`;
    const servicesQuery = `*[_type == "service"] | order(_createdAt asc)`;
    const testimonialsQuery = `*[_type == "testimonial"] | order(_createdAt asc)`;
    const skillsQuery = `*[_type == "skill"] | order(_createdAt asc)`;
    const affiliationsQuery = `*[_type == "affiliation"] | order(_createdAt asc)`;

    const [
      profile,
      projects,
      experience,
      services,
      testimonials,
      skills,
      affiliations
    ] = await Promise.all([
      client.fetch(profileQuery),
      client.fetch(projectsQuery),
      client.fetch(experienceQuery),
      client.fetch(servicesQuery),
      client.fetch(testimonialsQuery),
      client.fetch(skillsQuery),
      client.fetch(affiliationsQuery)
    ]);

    if (!profile) {
      return null;
    }

    return {
      person: {
        name: profile.name || null,
        role: profile.role || null,
        email: profile.email || null,
        location: profile.location || null,
      },
      hero: {
        intro: profile.heroIntro || null,
        profileImage: profile.heroImage ? urlFor(profile.heroImage) : null,
      },
      contact: {
        heading: profile.contactHeading || null,
        description: profile.contactDescription || null,
      },
      projects: projects && projects.length > 0 ? projects.map((p: any) => ({
        slug: p.slug?.current || p._id,
        title: p.title,
        status: p.status || "Completed",
        description: p.description,
        image: p.image ? urlFor(p.image) : "/projects/placeholder.png",
        tags: p.tags || [],
        links: p.links || []
      })) : null,
      experience: experience && experience.length > 0 ? experience : null,
      services: services && services.length > 0 ? services.map((s: any) => ({
        title: s.title,
        description: s.description,
        iconName: s.iconName || "Code"
      })) : null,
      testimonials: testimonials && testimonials.length > 0 ? testimonials : null,
      skills: skills && skills.length > 0 ? skills.map((sk: any) => ({
        name: sk.name,
        image: sk.image ? urlFor(sk.image) : ""
      })) : null,
      affiliations: affiliations && affiliations.length > 0 ? affiliations.map((af: any) => ({
        name: af.name,
        alt: af.alt || af.name,
        image: af.image ? urlFor(af.image) : ""
      })) : null
    };
  } catch (err) {
    console.error("Sanity fetch failed:", err);
    return null;
  }
}
