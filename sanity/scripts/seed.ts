import { createClient } from "next-sanity";
import { faker } from "@faker-js/faker";
import dotenv from "dotenv";

dotenv.config({ path: ".env.local" });

const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  token: process.env.SANITY_API_TOKEN,
  useCdn: false,
  apiVersion: process.env.NEXT_PUBLIC_SANITY_API_VERSION,
});

async function seedProjects() {
  const projects = Array.from({ length: 10 }).map(() => ({
    _type: "project",
    title: faker.company.catchPhrase(),
    companyName: faker.company.name(),
    jobPosition: faker.person.jobTitle(),
    shortDescription: faker.lorem.sentences(2),
    projectType: faker.helpers.arrayElement([
      "personal",
      "professional",
      "freelance",
    ]),
    slug: {
      _type: "slug",
      current: faker.helpers.slugify(
        faker.lorem.words(3) + "-" + faker.string.uuid()
      ),
    },
    startDate: faker.date.past().toISOString().split("T")[0],
    endDate: faker.date.recent().toISOString().split("T")[0],
    tags: faker.lorem.words(3).split(" "),
    content: [
      {
        _key: faker.string.uuid(),
        _type: "block",
        children: [
          {
            _key: faker.string.uuid(),
            _type: "span",
            text: faker.lorem.paragraphs(10),
          },
        ],
      },
    ],

    imageBanner: undefined,
  }));

  for (const project of projects) {
    await client.create(project);
  }

  console.log("✅ Dummy projects seeded successfully");
}

async function deleteAllProjects() {
  const projects = await client.fetch(`*[_type == "project"]{_id}`);

  for (const { _id } of projects) {
    await client.delete(_id);
    console.log(`🗑️ Deleted project: ${_id}`);
  }

  console.log("✅ Semua project berhasil dihapus");
}

deleteAllProjects().catch((err) => {
  console.error("❌ Gagal menghapus project", err);
});

seedProjects().catch((err) => {
  console.error("❌ Error seeding projects", err);
});
