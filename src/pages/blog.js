import Layout from '../components/layout';
import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import Head from '../components/head'
import blogModule from '../styles/blog.module.scss'
import graycat from '../images/graycat.png'

const BlogPage = ()=> {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost (sort: {fields: publishedDate, order: DESC}) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do,YYYY")
            blogtag {
              blogtag
            }
            headerimg {
              resize(width: 300, height: 200) {
                src
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Head title="blog" />
      <div className={blogModule.container}>
        <div className={blogModule.flex}>
          <img src={graycat} className={blogModule.cat} />
          <div className={blogModule.title}>Blog</div>
        </div>
        
        <ol className={blogModule.posts}>
          {data.allContentfulBlogPost.edges.map((edge)=> {
            return (
              <li className={blogModule.post}>
                <Link to={`/blog/${edge.node.slug}`}>
                  <div className={blogModule.blogcontainer}>
                    <div className={blogModule.flex}>
                      <img src={edge.node.headerimg.resize.src} className={blogModule.headerimg}/>
                      <div className={blogModule.container2}>
                        <div className={blogModule.tagcontainer}>
                          <div className={blogModule.flex}>
                            {edge.node.blogtag.blogtag.map(i=><li className={blogModule.blogtag}>{i}</li>)}
                          </div>
                        </div>
                        <div className={blogModule.titlecon}>
                          <span className={blogModule.title}>{edge.node.title}</span>
                        </div>
                        <div className={blogModule.datecon}>
                          <span className={blogModule.date}>{edge.node.publishedDate}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </li>
            )
          })}
        </ol>
      </div>
    </Layout>
  )
}

export default BlogPage;