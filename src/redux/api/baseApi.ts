import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000/api",
  }),
  tagTypes: ["product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => {
        return {
          url: "/products",
          method: "GET",
        };
      },
      providesTags: ["product"],
    }),
    getProductById: builder.query({
      query: (_id) => {
        return {
          url: `/products/${_id}`,
          method: "GET",
        };
      },
    }),
    addProduct: builder.mutation({
      query: (data) => {
        return { url: "/products", method: "POST", body: data };
      },
      invalidatesTags: ["product"],
    }),
    updateProduct: builder.mutation({
      query: ({ _id, data }) => {
        return { url: `/products/${_id}`, method: "PATCH", body: data };
      },
      invalidatesTags: ["product"],
    }),
    deleteProduct: builder.mutation({
      query: (_id) => {
        return { url: `/products/${_id}`, method: "DELETE" };
      },
      invalidatesTags: ["product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useUpdateProductMutation,
  useDeleteProductMutation,
} = baseApi;
