import React from "react";
import SearchInput from "../Input/SearchInput";
import { useForm } from "react-hook-form";
import { useLocation, useNavigate } from "react-router-dom";

export default function SerachForm() {
  const navigate = useNavigate();
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const initialWord = queryParams.get("word") || "";
  const { register, handleSubmit} = useForm({
    defaultValues: {
      word: initialWord,
    },
  });

  const searchInputHandler = (data) => {
    navigate(`/articles?word=${data.word}`);
    window.location.reload();
  };

  return (
    <form onSubmit={handleSubmit(searchInputHandler)}>
      <SearchInput
        register={{
          ...register("word", {
            required: true,
          }),
        }}
      />
    </form>
  );
}
