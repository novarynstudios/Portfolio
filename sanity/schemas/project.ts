const project = {
  name: "project",
  title: "Projects",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "status", title: "Status", type: "string" },
    { name: "description", title: "Description", type: "text" },
    {
      name: "image",
      title: "Logo Image",
      type: "image",
      options: { hotspot: true }
    },
    {
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }]
    },
    {
      name: "links",
      title: "Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            { name: "label", title: "Label", type: "string" },
            { name: "href", title: "URL", type: "string" }
          ]
        }
      ]
    }
  ]
};

export default project;
