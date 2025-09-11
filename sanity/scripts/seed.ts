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

const specificProjectData = {
  _type: "project",
  title: "Hoax Detection System Using Machine Learning",
  companyName: null,
  jobPosition: null,
  content: [
    {
      _key: "block-1",
      _type: "block",
      style: "h2",
      children: [
        {
          _key: "span-1",
          _type: "span",
          text: "Building a Smarter Social Media with AI",
        },
      ],
    },
    {
      _key: "block-2",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "span-2",
          _type: "span",
          text: "In a world full of information, it's easy to get lost in fake news. That's why I created this personal project: a Chromium extension to help people spot misinformation on social media platforms like Platform X. I wanted to build something that uses technology for good, and what's better than fighting hoaxes? 😉",
        },
      ],
    },
    {
      _key: "block-3",
      _type: "block",
      style: "h2",
      children: [
        {
          _key: "span-3",
          _type: "span",
          text: "How It Works: The Magic of GPT",
        },
      ],
    },
    {
      _key: "block-4",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "span-4",
          _type: "span",
          text: "This extension is super cool because it's not just a simple blocker. It uses a GPT-based LLM (that's a fancy term for a smart AI language model) to automatically check facts. When a user sees a suspicious post, the extension analyzes the text and tells you if it's likely to be fake. This helps users think more critically about the things they read online. It was a great challenge to integrate the AI model into a browser extension, but it was so rewarding to see it work! 💪",
        },
      ],
    },
    {
      _key: "block-5",
      _type: "block",
      style: "h2",
      children: [
        {
          _key: "span-5",
          _type: "span",
          text: "The Tech Stack",
        },
      ],
    },
    {
      _key: "block-6",
      _type: "block",
      style: "normal",
      children: [
        {
          _key: "span-6",
          _type: "span",
          text: "To build this, I used JavaScript for the extension logic and an external API for the GPT model. It was a good exercise in handling API requests and working with browser environments. This project really helped me understand how powerful AI can be when applied to real-world problems. 😊",
        },
      ],
    },
  ],
  slug: {
    _type: "slug",
    current: "hoax-detection-system-using-machine-learning",
  },
  imageBanner: undefined,
  tags: [
    "machine-learning",
    "ai",
    "chromium-extension",
    "gpt",
    "fact-checking",
  ],
  startDate: "2024-05-15",
  endDate: "2024-07-20",
  projectType: "personal",
  shortDescription:
    "Created a Chromium extension to detect misinformation on Platform X, integrating GPT-based LLM for automated fact-checking.",
};

async function seedProjects() {
  const dummyProjects = Array.from({ length: 10 }).map(() => ({
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
            text: faker.lorem.paragraphs(2),
          },
        ],
      },
    ],
    imageBanner: undefined,
  }));

  const allProjects = [specificProjectData];

  for (const project of allProjects) {
    await client.create(project);
  }

  console.log("✅ Projects seeded successfully");
}

async function deleteAllProjects() {
  const projects = await client.fetch(`*[_type == "project"]{_id}`);
  for (const { _id } of projects) {
    await client.delete(_id);
    console.log(`🗑️ Deleted project: ${_id}`);
  }
  console.log("✅ All projects deleted successfully");
}

deleteAllProjects().catch((err) => {
  console.error("❌ Failed to delete projects", err);
});

seedProjects().catch((err) => {
  console.error("❌ Error seeding projects", err);
});
