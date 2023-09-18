const HomePosts = () => {
  return (
    <div className="w-full flex  space-x-4 mt-8">
      {/* left */}
      <div className="w-[35%] h-[200px] flex justify-center items-center">
        <img
          className="w-full h-full object-cover"
          src="https://images.unsplash.com/photo-1682695795557-17447f921f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
          alt=""
        />
      </div>
      {/* right */}
      <div className="flex flex-col w-[65%]">
        <h1 className="text-xl font-bold md:mb-1 mb-1 md:text-2xl">Some title for bullshit</h1>
        <div className="flex mb-2 text-sm font-semibold text-gray-500 justify-between items-center md:mb-4 ">
          <p>@namedev</p>
          <div className="flex space-x-2">
            <p>15/09/2023</p>
            <p>20:03</p>
          </div>
        </div>
        <p className="text-sm md:text-lg">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae facere quidem quae magnam eius quasi amet
          in ad, explicabo impedit ipsam vel corporis quo reiciendis excepturi culpa fugit porro itaque!
        </p>
      </div>
    </div>
  );
};

export default HomePosts;
