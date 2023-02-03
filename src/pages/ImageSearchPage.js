import { useState } from "react";
import SearchBar from "../components/SearchBar";
import ImageList from "../components/ImageList";
import searchImages from "../apis/api";

const ImageSearchPage = () => {
  const [images, setImages] = useState([]);

  const handleSubmit = async (term) => {
    const results = await searchImages(term);
    setImages(results);
  }

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <ImageList images={images} />
    </div>
  );
};

export default ImageSearchPage;
