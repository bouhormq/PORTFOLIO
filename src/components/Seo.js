import React from "react"
import {Helmet} from "react-helmet";
import {StaticQuery, graphql} from "gatsby"

export const Seo = ({description, keywords, title, image, url}) =>
{
    return(
        <StaticQuery
            query = {detailsQuery}
            render = {data => {
                const metaDescription = description || data.site.siteMetadata.description
                const metaTitle = title || data.site.siteMetadata.title
                const metaUrl = url || data.site.siteMetadata.url
                const metaImage = image || data.site.siteMetadata.image
                const metaKeywords = keywords || ["Salims's portfolio website"]
                return(
                    <Helmet
                        title = {title}
                        meta = {[
                            {
                                name: `description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:title`,
                                content: metaTitle,
                            },
                            {
                                property: `og:description`,
                                content: metaDescription,
                            },
                            {
                                property: `og:type`,
                                content: `website`,
                            },
                            {
                                property: `og:image`,
                                content: metaImage,
                            },
                            {
                                property: `og:url`,
                                content: metaUrl,
                            },
                            {
                                property: `og:image`,
                                content: metaImage,
                            },
                            
                            
                        ].concat(
                            metaKeywords && metaKeywords.length > 0 ? {
                                name: `keywords`,
                                content: metaKeywords.join(`, `),
                            } : []
                        )}
                    />
                )
            }}
        />
    )
}

const detailsQuery = graphql`
    query DefaulySEOQuery{
        site{
            siteMetadata{
                title
                description
                image
                url
            }
        }
    }
`
