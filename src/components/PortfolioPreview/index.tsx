// import Styles from './styles.module.scss';

function PortfolioPreview({ article }) {
	const { frontmatter } = article;
	return (
		<div >
			<div style={{backgroundImage:`url(${frontmatter.img})`}}>
				<h1 >{frontmatter.title}</h1>
			</div>
			<div >
				<p >{frontmatter.description}</p>
				<div >
					Tagged:
					{frontmatter.tags.map((t) => (
						<div data-tag={t} key={"PortfolioPreview"+t}>
							{t}
						</div>
					))}
				</div>
				<a href={article.url}>
					<span >View</span>
				</a>
			</div>
		</div>
	);
}

export default PortfolioPreview;
