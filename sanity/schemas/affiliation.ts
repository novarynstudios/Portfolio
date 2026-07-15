const affiliation = {
  name: "affiliation",
  title: "Affiliation Logos",
  type: "document",
  fields: [
    { name: "name", title: "Company Name", type: "string" },
    { name: "alt", title: "Alt Description", type: "string" },
    { name: "image", title: "Logo Image", type: "image", options: { hotspot: true } }
  ]
};

export default affiliation;
