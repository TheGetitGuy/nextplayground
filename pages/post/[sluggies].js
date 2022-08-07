import fs from 'fs'
import path from 'path'
import Markdown from 'markdown-to-jsx';
 

const Static = ({ sluggies }) => {
     const markdownToRender = (<div className={"window-body"}><Markdown >{sluggies}</Markdown></div>)
    
    
    
    return (
        <>
        {markdownToRender}
        </>
    );
};

export async function getStaticProps({ params }) {
    //get file path from the param given so its Sluggies
    const blogPost = fs.readFileSync(
        path.join(
            process.cwd(), '/postsMarkdownFiles', params.sluggies + '.md'
        ),
        'utf8'
    )
    return {
        props: {
            sluggies: blogPost, //this is being given to the component
        },
    };
}

export async function getStaticPaths() {
    //look at paths for markdownFiles, then split the end off
    const paths = fs
        .readdirSync(path.join(process.cwd(), '/postsMarkdownFiles'))
        .map((fileName) => fileName.split('.')[0])
    console.log(paths);
    //take those paths and add them as a sluggies param from the [].js
    return {
        paths: paths.map((fileName) => {
            return { params: { sluggies: fileName } };
        }),
        fallback: false
    };//returning this getStaticPaths with the params makes the paths
}
export default Static;