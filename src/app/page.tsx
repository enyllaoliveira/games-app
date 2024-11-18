export default function Home() {
  return (
    <div className="ml-64">
      <div className="w-full h-[35vh] bg-red-300 flex-center">
        <p> oi</p>
      </div>
      <div className="container mx-auto my-6">
        <div className="grid grid-cols-4 gap-4 h-[35vh]">
          <div className="flex-center bg-red-100">a</div>
          <div className="flex-center bg-red-200">b</div>
          <div className="flex-center bg-red-400">c</div>
          <div className="flex-center bg-red-500">d</div>
        </div>

        <div className="container mx-auto my-6">
          <div className="grid grid-cols-12 gap-4">
            <div className="col-span-8 flex flex-col gap-4">
              <div className="flex gap-4 bg-red-600 rounded-md">
                <div>
                  {" "}
                  <img
                    className="w-auto h-[200px]"
                    src="https://placehold.co/600x400"
                    alt="image description"
                  />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <h2 className="text-3xl">Title</h2>
                  <p className="flex-grow"> Description</p>
                  <button> See more</button>
                </div>
              </div>{" "}
              <div className="flex gap-4">
                <div>
                  {" "}
                  <img
                    className="w-auto h-[200px]"
                    src="https://placehold.co/600x400"
                    alt="image description"
                  />
                </div>
                <div className="flex flex-col gap-2 py-4">
                  <h2 className="text-3xl">Title</h2>
                  <p className="flex-grow"> Description</p>
                  <button> See more</button>
                </div>
              </div>{" "}
            </div>
            <div className="col-span-4 bg-red-600">B</div>
          </div>
        </div>
      </div>
    </div>
  );
}
