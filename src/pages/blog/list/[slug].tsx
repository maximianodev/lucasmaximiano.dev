import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { request } from 'graphql-request'
import { getAllDataBlog, getDataBlog } from "../../../graphql/queries/blog";
import Head from "next/head"
import * as S from "../../../styles/pages/Blog/List/styles"
import BackButton from "../../../components/BackButton"
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
            <BackButton />
            <div>
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
            </div>
        </S.Container>
    )
}

export const getStaticProps = async (context) => {
    try {
        const response = await request(process.env.GRAPHQL_URL, getDataBlog, { categoryName: context.params.slug })
        const data = response.posts

        if (data.length === 0 || !data) {
            return {
                notFound: true,
            }
        }
        return {
            props: { posts: data },
        };
    } catch (err) {
        console.log(err);
        return {
            notFound: true,
        }
    }
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
