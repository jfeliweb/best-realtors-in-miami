import { gql } from "@apollo/client";
import client from "../client";

export default function Page(props) {
  console.log("PAGE PROPS: ", props);
  return <div>Page</div>;
}

export const getStaticProps = async () => {
  return {
    props: {},
  };
};

export const getStaticPaths = async () => {
  const { data } = await client.query({
    query: gql`
      query AllPagesQuery {
        pages {
          nodes {
            uri
          }
        }
      }
    `,
  });

  return {
    paths: data.pages.nodes
      .filter((page) => page.uri !== "/")
      .map((page) => ({
        params: {
          slug: page.uri.substring(1, page.uri.length - 1).split("/"),
        },
      })),
    fallback: "blocking", //if set to 'false' it will return a 404 page if thereis no page found. if set to "blocking" NextJS will attempt to render a page on the server side of things.
  };
};
