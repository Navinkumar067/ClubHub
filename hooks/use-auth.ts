// use-auth.ts
"use client"

import useSWR, { mutate as globalMutate } from "swr"

export type Student = {
  // 🚨 ADDED: A unique identifier field. We will use registerNumber as the value.
  id: string 
  name: string
  standard: string
  registerNumber: string
  dob: string // ISO date string yyyy-mm-dd
  phone?: string
}

const USER_KEY = "auth_user"
const STUDENTS_KEY = "students"

function readLocal<T>(key: string): T | null {
  if (typeof window === "undefined") return null
  try {
    const raw = localStorage.getItem(key)
    return raw ? (JSON.parse(raw) as T) : null
  } catch {
    return null
  }
}

function writeLocal<T>(key: string, value: T) {
  if (typeof window === "undefined") return
  localStorage.setItem(key, JSON.stringify(value))
}

export function useAuth() {
  const { data: user } = useSWR<Student | null>(USER_KEY, () => readLocal<Student>(USER_KEY), {
    fallbackData: null,
  })

  function login(registerNumber: string, dob: string): { ok: boolean; user?: Student } {
    const students = readLocal<Student[]>(STUDENTS_KEY) || []
    const found = students.find((s) => s.registerNumber === registerNumber && s.dob === dob)
    
    if (found) {
      // 🚨 UPDATED: Ensure the 'id' field is correctly set upon login
      const loggedInUser: Student = { ...found, id: found.registerNumber }
      
      writeLocal(USER_KEY, loggedInUser)
      globalMutate(USER_KEY, loggedInUser, false)
      return { ok: true, user: loggedInUser }
    }
    return { ok: false }
  }

  function logout() {
    if (typeof window === "undefined") return
    localStorage.removeItem(USER_KEY)
    globalMutate(USER_KEY, null, false)
  }

  function register(student: Omit<Student, 'id'>) {
    const students = readLocal<Student[]>(STUDENTS_KEY) || []
    const newStudent: Student = { 
        ...student, 
        // 🚨 ADDED: Set 'id' to be the same as 'registerNumber' upon registration
        id: student.registerNumber 
    }
    
    const exists = students.some((s) => s.registerNumber === newStudent.registerNumber)
    
    const next = exists
      ? students.map((s) => (s.registerNumber === newStudent.registerNumber ? newStudent : s))
      : [...students, newStudent]
      
    writeLocal(STUDENTS_KEY, next)
  }

  return { user, login, logout, register }
}