import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth"

const handler = NextAuth({
    providers: [
        CredentialsProvider({
          name: "Credentials",
          credentials: {
            username: { label: "email", type: "text", placeholder: "jsmith" },
            password: { label: "Password", type: "password" }
          },
          async authorize(credentials, req) {
            // Add logic here to look up the user from the credentials supplied
           const user = { id: "1", name: "J Smith", email: "jsmith@example.com" }
      
            if (user) {
              // Any object returned will be saved in `user` property of the JWT
              return user
            } else {
              // If you return null then an error will be displayed advising the user to check their details.
              return null
      
              // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
            }

          
          // const res = await fetch(
          //   `${process.env.NEXT_PUBLIC_BACKEND_URL}/users`,
          //   {
          //     method: "POST",
          //     body: JSON.stringify({
          //       email: credentials?.username,
          //       password: credentials?.password,
          //     }),
          //     headers: { "Content-Type": "application/json" },
          //   }
          // );
          // const user = await res.json();
  
          // if (user.error) throw user;
  
          // return user;
          }
        })
      ],
      callbacks:{
        async jwt({ token, user}) {
          return {...token, ...user}
        },
        async session({ session, user, token }) {
          session.user = token as any
          return session
        },
      },
      pages:{
        signIn:"/auth",
      }
      
})

export { handler as GET, handler as POST }
