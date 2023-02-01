import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({
        //baseUrl: "https://e-nauli-ussd-backup.herokuapp.com/api/v1.0",
        baseUrl: "http://localhost:5000",
    }),
    endpoints: (builder) => ({
        loginUser: builder.mutation({
            query: (body: { phone: string; pin: string }) => {
                return {
                    url: "/api/user/login",
                    method: "post",
                    body,
                };
            },
        }),
    }),
});

export const { useLoginUserMutation } = authApi;
