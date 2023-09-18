import HomePosts from "../components/HomePosts";

const Home = () => {
  return (
    <div className=" px-8 md:px-[200px] dark:text-white dark:bg-gray-900">
      <div className="flex justify-between items-center"></div>
      <HomePosts />
      <HomePosts />
      <HomePosts />
      <HomePosts />
    </div>
  );
};

export default Home;
