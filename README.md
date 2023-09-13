This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

This project is an example of a web application using Next.js, TypeScript, and Firebase, focused on demonstrating design patterns and architectures, such as Hexagonal Architecture, Use Cases, Value Objects, and Facade. The main goal is to illustrate the practical application of these patterns and Clean Code and Clean Architecture concepts in a web development context.

Important Note: This project is not intended to be a beautiful or extremely complex application, nor does it address complex business rules. Instead, it focuses on architecture and a simple and effective way to apply it. The main functionality of the application is Todo task management.

Hexagonal Architecture

Hexagonal Architecture, also known as Ports and Adapters Architecture, is a software design approach that separates the concerns of the application core from external dependencies. In this project, Hexagonal Architecture is applied to ensure that the application core (use cases) is isolated from external layers, such as the user interface and Firebase data access. In the case of this project, the "core" package is completely decoupled from any external library or framework, being the heart of my application.

Clean Code and Clean Architecture

This project follows the principles of Clean Code and Clean Architecture, seeking to keep the code clean, readable, and maintainable. The concepts of separation of concerns, dependency inversion, and use of value objects are applied to create more robust and sustainable code.

This project serves as a simple, but practical, example of how to apply Hexagonal Architecture, Clean Code, and Clean Architecture in a web application using Next.js, TypeScript, and Firebase. It is important to note that, in more complex projects, these patterns and concepts can be expanded and adjusted to meet the specific needs of the project.

Remember that the main goal of this project is to demonstrate the architectures and design patterns, and not to provide a complete and production-ready application.

I appreciate your interest in this project and hope it is helpful in illustrating the application of these concepts in your own projects.
