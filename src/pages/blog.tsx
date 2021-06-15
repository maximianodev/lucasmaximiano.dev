import React from 'react'

interface Props {

}

export async function getStaticProps(context) {
    return {
        props: {}, // will be passed to the page component as props
    }
}

export default function Blog(props: Props) {
    return (
        <div>
            Blog
        </div>
    )
}
