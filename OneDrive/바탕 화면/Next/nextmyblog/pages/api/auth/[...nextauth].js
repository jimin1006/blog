import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  providers: [
    GithubProvider({
      clientId: 'c96f264be2104fab4f5d',
      clientSecret: ' 8ec67f3db3990f6addcccae79338c4e7c0c0541d',
    }),
  ],
  secret : 'qkrjm1006'
};
export default NextAuth(authOptions); 