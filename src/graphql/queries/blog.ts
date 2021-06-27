import { gql } from 'graphql-request';

export const getDataBlog = gql`
	query getDataBlog($categoryName: String) {
		posts(where: { category: $categoryName }) {
			id
			title
			slug
			tags
			stage
			publishedAt
			excerpt
			category
			content {
				markdown
			}
			coverImage {
				fileName
				url
			}
		}
	}
`;

export const getAllDataBlog = gql`
	query getAllDataBlog {
		posts {
			id
			title
			slug
			tags
			stage
			publishedAt
			excerpt
			category
			coverImage {
				fileName
				url
			}
			content {
				markdown
			}
		}
	}
`;

export const getPost = gql`
	query getPost($slugName: String) {
		post(where: { slug: $slugName }) {
			id
			title
			tags
			slug
			publishedAt
			excerpt
			category
			content {
				markdown
			}
			coverImage {
				url
			}
			author {
				name
				picture {
					url
				}
			}
			createdAt
		}
	}
`;

export const getAllPost = gql`
	query getAllPost {
		posts {
			slug
		}
	}
`;
