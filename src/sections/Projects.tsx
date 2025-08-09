import { useEffect, useState } from "react"

type Project = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

const Projects = () => {

    const [projects, setProjects] = useState<Project[]>([]);

    useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
      .then((res) => res.json())
      .then((data: Project[]) => setProjects(data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="flex justify-center bg-[#7697A0]">
      <section className="w-full max-w-7xl min-h-[60vh] p-8 bg-[#7DA0CA] rounded-lg shadow-lg">
        <h1 className="text-4xl font-bold text-[#021024] mb-6">Projects</h1>

        <div className="space-y-4">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-[#FAF4F0] p-4 rounded-md shadow-sm"
            >
              <h2 className="text-lg font-semibold text-[#4B5D52]">
                {project.title}
              </h2>
              <p className="text-sm text-gray-700">{project.body}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  )
}

export default Projects