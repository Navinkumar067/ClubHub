"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { useAuth } from "@/hooks/use-auth"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import Link from "next/link"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog"

export default function LoginPage() {
  const [registerNumber, setRegisterNumber] = useState("")
  const [dob, setDob] = useState("")
  const [showDialog, setShowDialog] = useState(false)
  const { login } = useAuth()
  const router = useRouter()

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = login(registerNumber.trim(), dob)
    if (res.ok) {
      router.push("/")
    } else {
      setShowDialog(true)
    }
  }

  return (
    <div className="mx-auto grid w-full max-w-md">
      <Card>
        <CardHeader>
          <CardTitle className="text-balance">Student Login</CardTitle>
          <CardDescription>Use your Register Number and Date of Birth to continue.</CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="reg" className="text-sm">
                Register Number
              </label>
              <Input id="reg" value={registerNumber} onChange={(e) => setRegisterNumber(e.target.value)} required />
            </div>
            <div className="grid gap-2">
              <label htmlFor="dob" className="text-sm">
                Date of Birth
              </label>
              <Input id="dob" type="date" value={dob} onChange={(e) => setDob(e.target.value)} required />
            </div>
            <Button type="submit" className="w-full">
              Login
            </Button>
            <p className="text-center text-sm text-muted-foreground">
              New here?{" "}
              <Link href="/register" className="text-primary underline">
                Register Now
              </Link>
            </p>
          </form>
        </CardContent>
      </Card>

      <Dialog open={showDialog} onOpenChange={setShowDialog}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>You haven’t registered yet</DialogTitle>
            <DialogDescription>Please register to continue. It takes less than a minute.</DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button variant="secondary" onClick={() => setShowDialog(false)}>
              Close
            </Button>
            <Button asChild>
              <Link href="/register">Register Now</Link>
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  )
}
