const testimonial = {
  name: "testimonial",
  title: "Testimonials",
  type: "document",
  fields: [
    { name: "name", title: "Client Name", type: "string" },
    { name: "project", title: "Project Context", type: "string" },
    { name: "content", title: "Review Content", type: "text" },
    { name: "rating", title: "Rating Stars", type: "number", validation: (Rule: any) => Rule.min(1).max(5) },
    { name: "initials", title: "Initials (Avatar)", type: "string" }
  ]
};

export default testimonial;
