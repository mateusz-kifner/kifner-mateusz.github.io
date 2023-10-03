// import Styles from './styles.module.scss';

import Button from "../Button"

function PortfolioPreview({ project }: any) {
  const { frontmatter } = project
  return (
    <a
      href={project.url}
      className=" flex flex-row w-full flex-grow self-stretch hover:scale-105 hover:drop-shadow-2xl transition-all text-white"
    >
      <div
        style={{
          backgroundImage: `url(${frontmatter.img})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
        className=" w-3/5 h-96 relative drop-shadow-[4px_4px_10px_rgba(0,0,0,0.25)]"
      >
        {/* before:absolute before:w-12 before:h-full before:bg-red-600 before:right-0 before:top-0 before:drop-shadow-[4px_4px_10px_rgba(0,0,0,0.25)] */}
        <h1 className="font-bold text-4xl bg-brand-blue px-8 py-4 absolute top-1/2 -right-12  -translate-y-1/2 text-white">
          {frontmatter.title}
        </h1>
      </div>
      <div className="bg-brand-blue w-2/5 flex justify-between flex-col">
        <p className="p-4 text-white">{frontmatter.description}</p>

        <div className="p-4 flex gap-1 flex-col text-white">
          Tagi:
          <div className="flex gap-4 flex-wrap text-white">
            {frontmatter.tags.map((t: any) => (
              <div
                data-tag={t}
                key={"PortfolioPreview" + t}
                className="border-white border-2 border-solid  py-1 px-3 rounded-sm"
              >
                {t}
              </div>
            ))}
          </div>
        </div>
      </div>
    </a>
  )
}

export default PortfolioPreview
