import { useState, useEffect } from "react";
import { client } from "@/sanity/lib/client";
import { glimpseProjectQuery } from "@/sanity/lib/queries";
import { SanityProject } from "@/types";

export const useProjects = () => {
  const [projects, setProjects] = useState<SanityProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const data = await client.fetch(glimpseProjectQuery);
        setProjects(data);
      } catch (error) {
        console.error("Error fetching projects:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchProjects();
  }, []);

  return { projects, loading };
};
