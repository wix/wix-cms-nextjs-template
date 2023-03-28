### A Wix Data Next.js Education Template
![](docs/media/template-showcase.gif)


A [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

In order to be able to integrate the Wix Data solution with the template, you should first define a business in Wix.


### Step 1: Create a business with [Wix](http://wix.com/intro/main)
1. Go to [Wix](http://wix.com/intro/main)

### Step 2: Consume APIs in the Template with an Oauth client ID
To consume the APIs in the template, you will need to create an Oauth client ID. You will be able to create this ID from your [dashboard](https://manage.wix.com):
1. Go to `Settings` in the dashboard
2. Click `Oauth Apps`
3. Click `Create New` to create a new Oauth Apps
4. Once your app is created, copy the client id

### Step 3: Set up environment variables
**Note**: client ID should not be pushed to your source control

#### Local Development Environment
1. run `cp .env.template .env.local`
2. Paste the client id you copied in step 3.4. into `NEXT_PUBLIC_WIX_CLIENT_ID=<Client ID>`
#### Production Environment
Add the `NEXT_PUBLIC_WIX_CLIENT_ID` environment variable with the client id value according to your deployment provider.

## Local Development
**Note: You must complete the Get Started set up instructions before starting local development**

Once you’ve obtained and configured the oauth client Id, run the development server:
```shell
yarn
yarn dev
```
or
```shell
npm i
npm run dev
```
Open http://localhost:3000 with your browser to see the template home page.

You can start editing the Home page by modifying `app/page.tsx`.<br>
The page auto-updates as you edit the file.

Similarly, you can edit any other page - `app/<route>/page.tsx` (as described in [NextJs routes docs](https://beta.nextjs.org/docs/routing/defining-routes))

## Learn More about the Tech Stack
To customize the template and add more functionality, go to [Wix API docs](https://dev.wix.com/api/sdk/introduction)

This template is written in [Next.js](https://nextjs.org/docs) 13 using [Next.js app directory](https://beta.nextjs.org/docs/app-directory-roadmap).

To learn more about `Next.js`, take a look at the following resources:
- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [Next.js app directory](https://beta.nextjs.org/docs/app-directory-roadmap)

Additionally, this template uses the following libraries/features:
1. [React Server Components](https://nextjs.org/docs/advanced-features/react-18/server-components)
2. [TypeScript](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-9.html)
3. [TanStack Query <sup>v4</sup>](https://tanstack.com/query/latest)
4. [Tailwind CSS](https://tailwindcss.com/)
5. [Flowbite](https://flowbite.com/)
6. [Wix client SDK](https://dev.wix.com/api/sdk/introduction)

## Deployment
You can deploy this repo using any platform which supports `Next.js` Version 13 ([And app directory roadmap](https://beta.nextjs.org/docs/app-directory-roadmap))

The repository only requires a single environment variable to be defined `NEXT_PUBLIC_WIX_CLIENT_ID` which points to the `client Id` required to access the business assets in Wix using APIs.
