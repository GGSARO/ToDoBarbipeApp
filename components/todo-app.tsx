'use client'

import { useState } from 'react'
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Checkbox } from "@/components/ui/checkbox"
import { Trash2, Plus } from "lucide-react"

interface Todo {
  id: number
  text: string
  completed: boolean
}

export function TodoAppComponent() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [newTodo, setNewTodo] = useState('')

  const addTodo = () => {
    if (newTodo.trim() !== '') {
      setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }])
      setNewTodo('')
    }
  }

  const toggleTodo = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ))
  }

  const deleteTodo = (id: number) => {
    setTodos(todos.filter(todo => todo.id !== id))
  }

  return (
    <div className="min-h-screen bg-[#B0BDE5] flex items-center justify-center p-4">
      <div className="w-full max-w-md bg-white rounded-lg shadow-xl overflow-hidden">
        <div className="bg-[#2A7B6B] p-4">
          <h1 className="text-2xl font-bold text-white text-center">To - Do Saro App</h1>
        </div>
        <div className="p-4">
          <div className="flex mb-4">
            <Input
              type="text"
              value={newTodo}
              onChange={(e) => setNewTodo(e.target.value)}
              placeholder="Añadir nueva tarea"
              className="text-black flex-grow mr-2 border-[#B0BDE5] focus:ring-black focus:border-[#2A7B6B]"
            />
            <Button 
              onClick={addTodo}
              className="bg-[#1E3A5F] hover:bg-[#2A7B6B] text-black"
            >
              <Plus className="h-5 w-5" />
            </Button>
          </div>
          <ul className="space-y-2">
            {todos.map(todo => (
              <li key={todo.id} className="flex items-center justify-between p-2 border border-[#B0BDE5] rounded bg-white">
                <div className="flex items-center">
                  <Checkbox
                    checked={todo.completed}
                    onCheckedChange={() => toggleTodo(todo.id)}
                    className="mr-2 border-[#2A7B6B] text-[#2A7B6B] focus:ring-[#2A7B6B]"
                  />
                  <span className={`${todo.completed ? 'line-through text-[#8FA3C7]' : 'text-[#1E3A5F]'}`}>
                    {todo.text}
                  </span>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  onClick={() => deleteTodo(todo.id)}
                  className="text-[#1E3A5F] hover:text-[#2A7B6B] hover:bg-[#B0BDE5]/20"
                >
                  <Trash2 className="h-4 w-4" />
                </Button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}