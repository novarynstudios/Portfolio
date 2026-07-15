const profile = {
  name: "profile",
  title: "Profile Config",
  type: "document",
  fields: [
    { name: "name", title: "Full Name", type: "string" },
    { name: "role", title: "Role Subtitle", type: "string" },
    { name: "email", title: "Contact Email", type: "string" },
    { name: "location", title: "Location", type: "string" },
    { name: "heroIntro", title: "Hero Section Intro", type: "text" },
    { name: "heroImage", title: "Hero Profile Image", type: "image", options: { hotspot: true } },
    { name: "contactHeading", title: "Contact Heading", type: "string" },
    { name: "contactDescription", title: "Contact Description", type: "text" }
  ]
};

export default profile;
