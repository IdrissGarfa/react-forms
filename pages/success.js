import { useRouter } from "next/router"

export default function Success() {
    const Router = useRouter();
    return (
        <main className="h-screen flex items-center justify-center">
            <div className="bg-white w-1/2 rounded-lg text-gray-700 p-16">
                <h1 className="text-3xl pb-4 font-semibold">Thanks for the email {Router.query.name}✨</h1>
                <p className="text-lg text-gray-500">
                    We have sent you an email over at {Router.query.email}. We will get back to you as soon as we can!
                </p>
            </div>
        </main>
    )
};
