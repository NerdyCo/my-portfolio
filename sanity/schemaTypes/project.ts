import { defineField, defineType } from "sanity";

export default defineType({
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "companyName",
      title: "Company Name",
      type: "string",
    }),
    defineField({
      name: "jobPosition",
      title: "Job Position",
      type: "string",
    }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [{ type: "block" }],
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "imageBanner",
      title: "Image Banner",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alt Text",
        },
      ],
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),
    defineField({
      name: "startDate",
      title: "Start Date",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
    defineField({
      name: "endDate",
      title: "End Date",
      type: "date",
      options: {
        dateFormat: "DD/MM/YYYY",
      },
    }),
    defineField({
      name: "projectType",
      title: "Project Type",
      type: "string",
      options: {
        list: [
          { title: "Personal", value: "personal" },
          { title: "Professional", value: "professional" },
          { title: "Freelance", value: "freelance" },
        ],
        layout: "dropdown",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "shortDescription",
      title: "Short Description",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(200),
    }),
  ],
});
