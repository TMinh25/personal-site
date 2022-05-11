import { Box } from "@chakra-ui/react";
import { Article } from "contentlayer/generated";
import dynamic from "next/dynamic";
import { FC } from "react";

const Articles = dynamic(
  () => import(/* webpackChunkName: "Articles" */ "components/layouts/articles")
);

interface Props {
  articles: Article[];
}

const Page: FC<Props> = ({ articles = [] }) => {
  const allArticlesAndPublications = [...articles] as Article[];

  const sortedAllArticlesAndPublications: Article[] =
    allArticlesAndPublications.sort((a: Article, b: Article) => {
      return Number(new Date(b.date)) - Number(new Date(a.date));
    });

  return (
    <Box as="main" maxW="2xl" mx="auto" p={8}>
      <Articles
        articles={sortedAllArticlesAndPublications}
        hideViewAllLinksNode
      />
    </Box>
  );
};

export default Page;
