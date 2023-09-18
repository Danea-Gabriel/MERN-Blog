import { BiEdit } from "react-icons/bi";
import { MdDelete } from "react-icons/md";
import Comment from "../components/Comment";

const PostDetails = () => {
  return (
    <div className="px-8 md:px-[200px] mt-8 ">
      <div className=" flex justify-between items-center">
        <h1 className="text-2xl font-bold text-black md:text-3xl">Some bullshit title</h1>
        <div className="flex justify-center items-center space-x-2">
          <p>
            <BiEdit />
          </p>
          <p>
            <MdDelete />
          </p>
        </div>
      </div>
      <div className="flex justify-between items-center mt-2 md:mt-4">
        <p>@namedev</p>
        <div className="flex space-x-2">
          <p>15/09/2023</p>
          <p>20:03</p>
        </div>
      </div>
      <img
        className="w-full mx-auto mt-8"
        src="https://images.unsplash.com/photo-1682695795557-17447f921f79?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        alt=""
      />
      <p className="mx-auto mt-8">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus recusandae quo modi culpa sequi dolores
        voluptas necessitatibus nobis corporis maxime, quibusdam, autem repellat velit cupiditate consectetur expedita
        tempore ullam. Sequi.
      </p>
      <div className="flex itemes-center mt-8 space-x-4 font-semibold">
        <p>Categories:</p>
        <div className="flex justify-center items-center space-x-2">
          <div className="bg-gray-300 rounded-lg px-3 py-1">Tech</div>
          <div className="bg-gray-300 rounded-lg px-3 py-1">AI</div>
        </div>
      </div>
      <div className="flex flex-col mt-4">
        <h3 className="mt-6 mb-4 font-semibold">Comments:</h3>
        <Comment />
        <Comment />
        <Comment />
      </div>
      {/*  comment */}
      <div className="w-full flex flex-col mt-4 md:flex-row mb-4">
        <input className="md:w-[80%] outline-none px-4 mt-4 md:mt-0" placeholder="write a comment" type="text" />
        <button className="bg-black text-sm text-white rounded-md px-4 py-2 md:w-[20%] mt-4 md:mt-0">
          Add comment
        </button>
      </div>
    </div>
  );
};

export default PostDetails;
