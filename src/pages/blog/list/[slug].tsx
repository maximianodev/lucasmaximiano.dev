import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { request } from 'graphql-request'
import { getAllDataBlog, getDataBlog } from "../../../graphql/queries/blog";
import Head from "next/head"
import * as S from "../../../styles/pages/Blog/List/styles"

interface Posts {
    posts: [
        {
            category: string
            content: { markdown: string }
            coverImage: { fileName: string, url: string }
            excerpt: string
            id: string
            publishedAt: string
            slug: string
            stage: string
            tags: string[]
            title: string
        }
    ]
}

function BlogList({ posts }: Posts) {
    const router = useRouter();
    if (router.isFallback) return <h1>carregando...</h1>;
    return (
        <S.Container className="container">
            <Head>
                <title>Blog - {router.query.slug}</title>
            </Head>
            {posts.length < 1 && <img src="/images/building.gif" title="Construindo..." />}
            {posts.map(post => (
                <div className="post" key={post.id}>
                    <Link href={`/blog/post/${post.slug}`}>
                        <a>
                            <h2>{post.title}</h2>
                            <img src={post.coverImage.url} alt={post.coverImage.fileName} />
                        </a>
                    </Link>
                </div>
            ))}
        </S.Container>
    )
}

export const getStaticProps = async (context) => {
    const response = await request(process.env.GRAPHQL_URL, getDataBlog, { categoryName: context.params.slug })
    const posts = response.posts

    return {
        props: { posts },
    };
};

export const getStaticPaths = async (context) => {
    const response = await request(process.env.GRAPHQL_URL, getAllDataBlog)
    const paths = response.posts.map(({ slug }) => {
        return { params: { slug: slug } };
    });

    return {
        paths,
        fallback: true,
    };
}

export default BlogList