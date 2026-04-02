import React from "react";
import ImageUpload from "../components/ImageUpload";

function CreatePost() {
  const handleUpload = (formData) => {
    const file = formData.get("image");

    console.log("Uploaded File:", file);
  };

  return (
    <div>
      <h2>Create Post</h2>
      <ImageUpload onUpload={handleUpload} />
    </div>
  );
}

export default CreatePost;