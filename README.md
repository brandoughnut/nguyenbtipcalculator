Name: Brandon Nguyen
Date: 4/3/2024
Lab Name: Tip Calculator
Brief Description: Created a tip calculator using next js and components
Peer Reviewer: Joseph Poncini
Peer Review Comments: Overall your project looks pretty close to the original. I really like how you have your code and components organized as well so good job on that end!! I only have a few basic comments

    - "Can't be Zero" message looks out of place, seems like you need to either give it the same margins as "Number of People" or put the two divs in a common container

    - I like how you prevent the user from giving decimal numbers in the number of people input, if you want but it's a stylistic choice, you can do something similar in the bill input field so the user can't input bills that have more than two decimal places like $100.221 for example. 

    - Additionally if you want to you can put a limit to how big the bill can be, it might be a good idea. I noticed if I put a crazy number in there the tip amount and total will go out of the container

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
