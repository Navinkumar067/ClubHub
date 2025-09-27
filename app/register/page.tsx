"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"

export default function RegisterPage() {
  const { register } = useAuth()
  const router = useRouter()

  const [form, setForm] = useState({
    name: "",
    standard: "",
    registerNumber: "",
    dob: "",
    phone: "",
  })

  function update<K extends keyof typeof form>(key: K, val: string) {
    setForm((f) => ({ ...f, [key]: val }))
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    register({
      name: form.name.trim(),
      standard: form.standard.trim(),
      registerNumber: form.registerNumber.trim(),
      dob: form.dob,
      phone: form.phone.trim(),
    })
    router.push("/login")
  }

  return (
    <div className="mx-auto grid w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">Register</CardTitle>
          <CardDescription>Enter your student details to create your account.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm">
                Name
              </label>
              <Input id="name" value={form.name} onChange={(e) => update("name", e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="std" className="text-sm">
                Standard
              </label>
              <Input id="std" value={form.standard} onChange={(e) => update("standard", e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="reg" className="text-sm">
                Register Number
              </label>
              <Input
                id="reg"
                value={form.registerNumber}
                onChange={(e) => update("registerNumber", e.target.value)}
                required
              />
            </div>
            <div className="grid gap-2">
              <label htmlFor="dob" className="text-sm">
                Date of Birth
              </label>
              <Input id="dob" type="date" value={form.dob} onChange={(e) => update("dob", e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="phone" className="text-sm">
                Phone Number
              </label>
              <Input id="phone" type="tel" value={form.phone} onChange={(e) => update("phone", e.target.value)} />
            </div>
            <Button type="submit" className="w-full">
              Save & Return to Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
