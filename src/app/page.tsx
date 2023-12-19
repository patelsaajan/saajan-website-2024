import styles from "./page.module.css";
import { FeaturedWork, HeroHome, RecentPosts } from "../components/home";

export default function Home() {
  return (
    <>
      <HeroHome />
      <RecentPosts /> <FeaturedWork />
    </>
  );
}
