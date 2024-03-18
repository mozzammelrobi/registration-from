import { useState } from "react";

const Regestration = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [isSubmit, setIsSubmit] = useState(false)
    const [isChecked, setIsChecded]= useState(false)

    // console.log({name:name, email:email, password:password})

    const handleSubmit = (event) => {
        event.preventDefault()
        if(!isChecked){
            return
        }
        const user = {
            name: name,
            email: email,
            password: password
        }
        setIsSubmit(true)
        console.log(user)
    }

    return (
        <div className="h-screen w-full flex justify-center items-center bg-purple-500">
            <form
                onSubmit={(event) => handleSubmit(event)}
                className="w-2/3 lg:w-2/5 bg-white rounded shadow-lg p-8">

                <h1 className="text-4xl bg text-purple-500 mb-6 text-center">Form</h1>

                <label className="text-lg mb-2" htmlFor=""> Name</label>
                <input
                    onChange={(event) => setName(event.target.value)}
                    type="text"
                    placeholder="inter your name"
                    required
                    className="py-2 px-1 border-2 rounded border-gray-400 w-full text-lg mb-3 "
                />

                <label className="text-lg mb-2" htmlFor=""> email</label>
                <input
                    onChange={(event) => setEmail(event.target.value)}
                    type="email"
                    placeholder="inter your email"
                    className="py-2 px-1 border-2 rounded border-gray-400 w-full text-lg mb-3 "
                />

                <label className="text-lg mb-2" htmlFor=""> Password</label>
                <input
                    onChange={(event) => setPassword(event.target.value)}
                    type="password"
                    placeholder="inter your password"
                    className="py-2 px-1 border-2 rounded border-gray-400 w-full text-lg mb-3 "
                />
                <input 
                onChange={(event)=> setIsChecded(event.target.checked)}
                type="checkbox" name="" id="" /> do you agree you tearm and conditon

                <div className="mt-3 flex justify-end">
                    <button
                        type="submit"
                        className="bg-purple-500 rounded h-12 w-20 text-white"
                    >sign up</button>
                </div>
            </form>
          {
            isSubmit && (
                <div
                className="fixed top-0 flex justify-center items-center bg-purple-500 h-screen w-full"
            >
                <div className="w-2/3 h-2/3 rounded bg-purple-300 text-center">
                    <h1 className="text-3xl text-purple-600 mt-6 mb-6">You have submitted the from successfully</h1>
                    <p className="text-xl">name: {name}</p>
                    <p className="text-xl">email: {email}</p>
                    <p className="text-xl">email: {password}</p>

                </div>
            </div>
            )
          }
        </div>
    );
};

export default Regestration;