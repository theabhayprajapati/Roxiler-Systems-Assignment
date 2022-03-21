import React, { useState, useEffect } from 'react'
import { useRecoilState } from 'recoil'
import todoListState from '../atoms/userid'
interface todoType {
    id: number,
    title: string,
    userId: number,
    completed: boolean
}
const Todos = () => {
    // set type for useState
    const [useidState, setuseidState] = useRecoilState(todoListState)

    const [todos, settodos] = useState<todoType[]>([])
    useEffect(() => {
        const fetchtodos = async () => {
            const fetching = await fetch('https://jsonplaceholder.typicode.com/todos')
            const todos = await fetching.json()
            settodos(todos)
        }
        fetchtodos()
        console.log(todos)
    }, [])
    console.log(useidState)

    return (
        <div>
            <h1 className='text-2xl'>
                Task Details
            </h1>
            <main className='w-full'>
                {/* make a table */}
                <table className='table-auto w-full'>
                    <thead>
                        <tr>
                            <th className='px-4 py-2'>TodoID</th>

                            <th className='px-4 py-2'>Title</th>
                            <th className='px-4 py-2'>Status</th>
                            <th className='px-4 py-2'>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {todos.slice(0, 5).map(todo => (
                            <tr key={todo.id}>
                                <td className='border-2 px-4 py-2'>{todo.id}</td>
                                <td className='border-2 px-4 py-2'>{todo.title}</td>
                                <td className='border-2 px-4 py-2'>{todo.completed ? <span className='text-green-500 font-bold'>Completed</span> : <span className='text-red-500 font-bold'>Pending</span>}</td>
                                <td className='border px-4 py-2 '>
                                    <button onClick={() => setuseidState({ ...useidState, value: todo.id, title: todo.title })} className='border-2 px-2 py-1 focus:scale-95 transform transition-all duration-200 border-blue-500 rounded-lg focus:bg-blue-400 '>
                                        Details
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {/* user details */}
                <div>

                </div>
            </main>
        </div>
    )
}

export default Todos