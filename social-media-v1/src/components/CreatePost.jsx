import { Form, redirect } from "react-router-dom";

const CreatePost = () => {
  // const { createPost } = useContext(PostListContext);

  return (
    <div className="create-post">
      <Form method="POST">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Enter Your User Id
          </label>
          <input
            name="userId"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="enter your user id"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post Title
          </label>
          <input
            name="title"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="title"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Post
          </label>
          <textarea
            name="body"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="how are you feeling today ..."
            rows="5"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Reactions
          </label>
          <input
            name="reactions"
            type="number"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="number of reactions"
            required
          />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">
            Hashtags
          </label>
          <input
            name="tags"
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="enter your hashtags"
            required
          />
        </div>
        <button type="submit" className="btn btn-success">
          Create Post
        </button>
      </Form>
    </div>
  );
};

export async function createPostAction(data) {
  const formData = await data.request.formData();
  const createPostDataForm = Object.fromEntries(formData);
  createPostDataForm.tags = createPostDataForm.tags.split(" ");
  // console.log(createPostDataForm);

  fetch("https://dummyjson.com/posts/add", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(createPostDataForm),
  })
    .then((res) => res.json())
    .then((data) => {
      // createPost(data);
      console.log(data);
    });

  return redirect("/");
}

export default CreatePost;
