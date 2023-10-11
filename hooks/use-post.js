import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export const usePost = (postId) => {
  const { data, isLoading } = useQuery(["post", postId], {
    queryFn: async () => {
      const { data } = await axios.get(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
      );
      return data;
    },
    // onSuccess: (data) => {
    //     alert("done");
    //   },
    //   onError: (err) => {
    //     alert("error happens");
    //   },
  });

  return { data, isLoading };
};
