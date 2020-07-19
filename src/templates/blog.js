import React from 'react'
import {graphql} from 'gatsby'
import Layout from '../components/layout'
import { documentToReactComponents } from '@contentful/rich-text-react-renderer'
import Head from '../components/head'
import blogtem from '../styles/blogTemp.module.scss'

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: {eq: $slug}) {
      title
      publishedDate (formatString: "MMMM Do, YYYY")
      blogtag {
        tag
      }
      headerimg {
        resize(width: 500, height: 300) {
          src
        }
      }
      childContentfulBlogPostBlogTextTextNode {
        childMarkdownRemark {
          html
        }
      }
    } 
  }
`;

const Blog = (props) => {
const options = {
  renderNode: {
    "embedded-asset-block": (node)=> {
      const alt = node.data.target.fields.title['en-US']
      const src = node.data.target.fields.file['en-US'].url
      return <img alt={alt} src={src} className={blogtem.img}/>
    }
  }
}
  console.log(props.data.contentfulBlogPost.childContentfulBlogPostBlogTextTextNode.childMarkdownRemark.html)
    return (
        <Layout>
          <div className={blogtem.container}>
            <Head title={props.data.contentfulBlogPost.title} />
              <ol className={blogtem.tagcontainer}>
                <div className={blogtem.flex}>
                  {/* {props.data.contentfulBlogPost.blogtag.tag.map(i=><li className={blogtem.blogtag}>{i}</li>)} */}
                </div>
              </ol>
              <div className={blogtem.title}>
                <span>{props.data.contentfulBlogPost.title}</span>
              </div>
              <div className={blogtem.date}>
                <span>{props.data.contentfulBlogPost.publishedDate}</span>
              </div>
              <img className={blogtem.headerimg} src={props.data.contentfulBlogPost.headerimg.resize.src} />
                
              {/* {documentToReactComponents(props.data.contentfulBlogPost.childContentfulBlogPostBlogTextTextNode.childMarkdownRemark.html, options)} */}
              <div
                className={blogtem.body}
                dangerouslySetInnerHTML={{
                  __html: props.data.contentfulBlogPost.childContentfulBlogPostBlogTextTextNode.childMarkdownRemark.html,
                }}
              />
          </div>
        </Layout>
    )
}

export default Blog