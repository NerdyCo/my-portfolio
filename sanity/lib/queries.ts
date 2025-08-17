import { groq } from "next-sanity";

export const glimpseProjectQuery = groq`
    *[_type == "project"] | order(startDate desc, _createdAt desc){
        _id,
        title,
        "slug": slug.current,
        shortDescription,
        projectType,
        imageBanner
    }
`;

export const fullProjectQuery = groq`
    *[_type == "project" && slug.current == $slug][0]{
        _id,
        title,
        "slug": slug.current,
        startDate,
        endDate,
        tags,
        content,
        companyName,
        jobPosition,
        imageBanner
    }
`;
