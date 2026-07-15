const experience = {
  name: "experience",
  title: "Experience",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string" },
    { name: "desc", title: "Description", type: "text" },
    { name: "date", title: "Date Range", type: "string" },
    {
      name: "type",
      title: "Layout Align",
      type: "string",
      options: { list: ["left", "right"] }
    }
  ]
};

export default experience;
